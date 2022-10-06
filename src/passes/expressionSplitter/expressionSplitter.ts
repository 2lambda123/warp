import assert from 'assert';
import {
  Assignment,
  ContractDefinition,
  DataLocation,
  Conditional,
  ExpressionStatement,
  FunctionCall,
  FunctionDefinition,
  FunctionVisibility,
  Identifier,
  Mutability,
  StateVariableVisibility,
  VariableDeclaration,
  VariableDeclarationStatement,
  generalizeType,
  FunctionKind,
} from 'solc-typed-ast';
import { AST } from '../../ast/ast';
import { ASTMapper } from '../../ast/mapper';
import { printNode } from '../../utils/astPrinter';
import { cloneASTNode } from '../../utils/cloning';
import { TranspileFailedError } from '../../utils/errors';
import { createCallToFunction, fixParameterScopes } from '../../utils/functionGeneration';
import { SPLIT_EXPRESSION_PREFIX } from '../../utils/nameModifiers';
import {
  createEmptyTuple,
  createExpressionStatement,
  createIdentifier,
  createVariableDeclarationStatement,
} from '../../utils/nodeTemplates';
import { safeGetNodeType } from '../../utils/nodeTypeProcessing';
import { counterGenerator, getContainingFunction } from '../../utils/utils';
import {
  addStatementsToCallFunction,
  createFunctionBody,
  getConditionalReturnVariable,
  getInputs,
  getNodeVariables,
  getParams,
  getReturns,
} from './conditionalFunctionaliser';

function* expressionGenerator(prefix: string): Generator<string, string, unknown> {
  const count = counterGenerator();
  while (true) {
    yield `${prefix}${count.next().value}`;
  }
}

export class ExpressionSplitter extends ASTMapper {
  eGen = expressionGenerator(SPLIT_EXPRESSION_PREFIX);
  funcNameCounter = 0;
  varNameCounter = 0;

  // Function to add passes that should have been run before this pass
  addInitialPassPrerequisites(): void {
    const passKeys: Set<string> = new Set<string>([]);
    passKeys.forEach((key) => this.addPassPrerequisite(key));
  }

  visitAssignment(node: Assignment, ast: AST): void {
    this.commonVisit(node, ast);
    if (!(node.parent instanceof ExpressionStatement)) {
      // No need to create temp vars for state vars
      if (
        node.vLeftHandSide instanceof Identifier &&
        identifierReferenceStateVar(node.vLeftHandSide)
      ) {
        return;
      }
      const initialValue = node.vRightHandSide;
      const location =
        generalizeType(safeGetNodeType(initialValue, ast.compilerVersion))[1] ??
        DataLocation.Default;
      const varDecl = new VariableDeclaration(
        ast.reserveId(),
        '',
        false, // constant
        false, // indexed
        this.eGen.next().value, //name
        ast.getContainingScope(node), //scope
        false, // stateVariable
        location,
        StateVariableVisibility.Internal,
        Mutability.Constant,
        initialValue.typeString,
      );

      const tempVarStatement = createVariableDeclarationStatement([varDecl], initialValue, ast);
      const tempVar = tempVarStatement.vDeclarations[0];

      const leftHandSide = cloneASTNode(node.vLeftHandSide, ast);
      const rightHandSide = createIdentifier(tempVar, ast, undefined, node);
      const assignment = new Assignment(
        ast.reserveId(),
        '',
        leftHandSide.typeString,
        '=',
        leftHandSide,
        rightHandSide,
      );
      const updateVal = createExpressionStatement(ast, assignment);

      ast.insertStatementBefore(node, tempVarStatement);
      ast.insertStatementBefore(node, updateVal);
      ast.replaceNode(node, createIdentifier(tempVar, ast));
    }
  }

  visitFunctionCall(node: FunctionCall, ast: AST): void {
    this.commonVisit(node, ast);
    if (
      !(node.vReferencedDeclaration instanceof FunctionDefinition) ||
      node.parent instanceof ExpressionStatement ||
      node.parent instanceof VariableDeclarationStatement
    ) {
      return;
    }

    const returnTypes = node.vReferencedDeclaration.vReturnParameters.vParameters;
    if (returnTypes.length === 0) {
      const parent = node.parent;
      assert(parent !== undefined, `${printNode(node)} ${node.vFunctionName} has no parent`);
      ast.replaceNode(node, createEmptyTuple(ast));
      ast.insertStatementBefore(parent, new ExpressionStatement(ast.reserveId(), '', node));
    } else if (returnTypes.length === 1) {
      assert(
        returnTypes[0].vType !== undefined,
        'Return types should not be undefined since solidity 0.5.0',
      );
      ast.extractToConstant(node, cloneASTNode(returnTypes[0].vType, ast), this.eGen.next().value);
    } else {
      throw new TranspileFailedError(
        `ExpressionSplitter expects functions to have at most 1 return argument. ${printNode(
          node,
        )} ${node.vFunctionName} has ${returnTypes.length}`,
      );
    }
  }

  visitConditional(node: Conditional, ast: AST) {
    const containingFunction = getContainingFunction(node);
    const variables = getNodeVariables(node);
    const inputs = getInputs(variables, ast);
    const params = getParams(variables, ast);
    const newFuncId = ast.reserveId();
    const returns = getReturns(node, variables, newFuncId, this.varNameCounter++, ast);

    const func = new FunctionDefinition(
      newFuncId,
      '',
      containingFunction.scope,
      containingFunction.kind === FunctionKind.Free ? FunctionKind.Free : FunctionKind.Function,
      `_conditional${this.funcNameCounter++}`,
      false, // virtual
      FunctionVisibility.Internal,
      containingFunction.stateMutability,
      false, // isConstructor
      params,
      returns,
      [],
      undefined,
      createFunctionBody(node, returns, ast),
    );
    fixParameterScopes(func);
    containingFunction.vScope.insertBefore(func, containingFunction);
    ast.registerChild(func, containingFunction.vScope);
    this.dispatchVisit(func, ast);

    const conditionalResult = getConditionalReturnVariable(
      node,
      containingFunction.id,
      this.varNameCounter++,
      ast,
    );
    addStatementsToCallFunction(
      node,
      conditionalResult,
      [...variables.keys()],
      createCallToFunction(func, inputs, ast),
      ast,
    );
    ast.replaceNode(node, createIdentifier(conditionalResult, ast));
  }
}

function identifierReferenceStateVar(id: Identifier) {
  const refDecl = id.vReferencedDeclaration;
  return (
    refDecl instanceof VariableDeclaration &&
    refDecl.getClosestParentByType(ContractDefinition)?.id === refDecl.scope
  );
}