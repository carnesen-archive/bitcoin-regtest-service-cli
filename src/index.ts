import { cli, leaf, option, branch } from '@carnesen/cli';
import { isAbsolute } from 'path';
import { RegtestService } from '@carnesen/bitcoin-regtest-service';

const pkg = require('../package.json');

const datadir = option({
  typeName: 'string',
  nullable: true,
  description: 'Absolute path of a bitcoin data directory',
  validate(value) {
    return isAbsolute(value) ? '' : 'Path must be absolute';
  },
});

const start = leaf({
  commandName: 'start',
  description: 'Install and start the service',
  options: {
    datadir,
  },
  async action({ datadir }) {
    const service = new RegtestService({ datadir: datadir || undefined });
    return service.start();
  },
});

const restart = leaf({
  commandName: 'restart',
  description: 'Stop and start the service',
  options: {
    datadir,
  },
  async action({ datadir }) {
    const service = new RegtestService({ datadir: datadir || undefined });
    return service.restart();
  },
});

const stop = leaf({
  commandName: 'stop',
  description: 'Stop the service',
  options: {
    datadir,
  },
  async action({ datadir }) {
    const service = new RegtestService({ datadir: datadir || undefined });
    return service.stop();
  },
});

const status = leaf({
  commandName: 'status',
  description: 'Get current service status',
  options: {
    datadir,
  },
  async action({ datadir }) {
    const service = new RegtestService({ datadir: datadir || undefined });
    const running = await service.isRunning();
    return {
      running,
    };
  },
});

export const regtestService = branch({
  commandName: 'regtest-service',
  version: pkg.version,
  description: 'Manage a regtest-mode bitcoin service',
  subcommands: [restart, start, stop, status],
});

if (module === require.main) {
  cli(regtestService)();
}
