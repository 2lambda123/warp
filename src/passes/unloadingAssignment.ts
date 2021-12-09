import { Assignment, BinaryOperation } from 'solc-typed-ast';
import { ASTMapper } from '../ast/mapper';

export class UnloadingAssignment extends ASTMapper {
  visitAssignment(node: Assignment) {
    if (node.operator === '=') return node;

    // Extract "+" from "+="
    const operator = node.operator.slice(0, node.operator.length - 1);
    const rhs = new BinaryOperation(
      this.genId(),
      node.src,
      node.type,
      node.typeString,
      operator,
      node.vLeftHandSide,
      node.vRightHandSide,
    );

    return new Assignment(
      this.genId(),
      node.src,
      node.type,
      node.typeString,
      '=',
      node.vLeftHandSide,
      rhs,
      node.raw,
    );
  }
}