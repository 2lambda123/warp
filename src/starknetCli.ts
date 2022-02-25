import assert = require('assert');
import { execSync } from 'child_process';
import { IDeployProps, ICallOrInvokeProps, IOptionalNetwork, IDeployAccountProps } from './index';
import { logError } from './utils/errors';

export function compileCairo(
  filePath: string,
  cairoPath: string = extractCairoPath(filePath),
): { success: boolean; resultPath: string | undefined; abiPath: string | undefined } {
  assert(filePath.endsWith('.cairo'), `Attempted to compile non-cairo file ${filePath} as cairo`);
  const cairoPathRoot = filePath.slice(0, -'.cairo'.length);
  const resultPath = `${cairoPathRoot}_compiled.json`;
  const abiPath = `${cairoPathRoot}_abi.json`;
  const parameters = new Map([
    ['output', resultPath],
    ['abi', abiPath],
  ]);
  if (cairoPath !== '') {
    parameters.set('cairo_path', cairoPath);
  }
  try {
    runStarknetCompile(filePath, parameters);
    return { success: true, resultPath, abiPath };
  } catch (e) {
    if (e instanceof Error) {
      logError('Compile failed');
      return { success: false, resultPath: undefined, abiPath: undefined };
    } else {
      throw e;
    }
  }
}

function runStarknetCompile(filePath: string, cliOptions: Map<string, string>) {
  console.log(`Running starknet compile with cairoPath ${cliOptions.get('cairo_path')}`);
  execSync(
    `starknet-compile ${filePath} ${[...cliOptions.entries()]
      .map(([key, value]) => `--${key} ${value}`)
      .join(' ')}`,
    { stdio: 'inherit' },
  );
}

export function runStarknetStatus(tx_hash: string, option: IOptionalNetwork) {
  if (option.network == undefined) {
    logError(
      `Error: Exception: feeder_gateway_url must be specified with the "status" subcommand.\nConsider passing --network or setting the STARKNET_NETWORK environment variable.`,
    );
    return;
  }

  try {
    execSync(`starknet tx_status --hash ${tx_hash} --network ${option.network}`, {
      stdio: 'inherit',
    });
  } catch {
    logError('starknet tx_status failed');
  }
}

export function runStarknetDeploy(filePath: string, options: IDeployProps) {
  if (options.network == undefined) {
    logError(
      `Error: Exception: feeder_gateway_url must be specified with the "deploy" subcommand.\nConsider passing --network or setting the STARKNET_NETWORK environment variable.`,
    );
    return;
  }
  const { success, resultPath } = compileCairo(filePath, '../warplib');
  if (!success) {
    logError(`Compilation of contract ${filePath} failed`);
    return;
  }

  const inputs = options.inputs ? `--inputs ${options.inputs.join(' ')}` : '';

  try {
    execSync(`starknet deploy --contract ${resultPath} --network ${options.network} ${inputs}`, {
      stdio: 'inherit',
    });
  } catch {
    logError('starknet deploy failed');
  }
}

export function runStarknetDeployAccount(options: IDeployAccountProps) {
  if (options.wallet == undefined) {
    logError(
      `Error: AssertionError: --wallet must be specified with the "deploy_account" subcommand.`,
    );
    return;
  }
  if (options.network == undefined) {
    logError(
      `Error: Exception: feeder_gateway_url must be specified with the "deploy_account" subcommand.\nConsider passing --network or setting the STARKNET_NETWORK environment variable.`,
    );
    return;
  }

  try {
    execSync(
      `starknet deploy_account --wallet ${options.wallet} --network ${options.network} --account ${options.account}`,
      {
        stdio: 'inherit',
      },
    );
  } catch {
    logError('starknet deploy failed');
  }
}

export function runStarknetCallOrInvoke(
  filePath: string,
  isCall: boolean,
  options: ICallOrInvokeProps,
) {
  const callOrInvoke = isCall ? 'call' : 'invoke';

  if (options.network == undefined) {
    logError(
      `Error: Exception: feeder_gateway_url must be specified with the "${callOrInvoke}" subcommand.\nConsider passing --network or setting the STARKNET_NETWORK environment variable.`,
    );
    return;
  }

  const wallet = options.wallet === undefined ? '--no_wallet' : `--wallet ${options.wallet}`;

  const { success, abiPath } = compileCairo(filePath, '../warplib');
  if (!success) {
    logError(`Compilation of contract ${filePath} failed`);
    return;
  }

  const inputs = options.inputs ? `--inputs ${options.inputs.join(' ')}` : '';

  try {
    execSync(
      `starknet ${callOrInvoke}  --address ${options.address} --abi ${abiPath} --function ${options.function} --network ${options.network} ${wallet} ${inputs}`,
      { stdio: 'inherit' },
    );
  } catch {
    logError(`starknet ${callOrInvoke} failed`);
  }
}

// TODO use actual path libraries rather than doing this manually
function extractCairoPath(filePath: string): string {
  return filePath.split('/').slice(0, -1).join('/');
}