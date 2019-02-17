import { resolve } from 'path';

import { testCliThrows, testCli } from '@carnesen/cli';

import { regtestService as subject } from '../index';

export const datadir = resolve(__dirname, '..', '..', 'tmp');

const cli = testCli(subject);
const cliThrows = testCliThrows(subject);

describe(subject.commandName, () => {
  it('starts, stops, and restarts', async () => {
    await cli(`stop --datadir ${datadir}`);
    expect(await cli(`status --datadir ${datadir}`)).toEqual({ running: false });
    await cli(`start --datadir ${datadir}`);
    expect(await cli(`status --datadir ${datadir}`)).toEqual({ running: true });
    await cli(`restart --datadir ${datadir}`);
    expect(await cli(`status --datadir ${datadir}`)).toEqual({ running: true });
    await cli(`stop --datadir ${datadir}`);
    expect(await cli(`status --datadir ${datadir}`)).toEqual({ running: false });
  }, 60000);

  it('gives usage if --help is given', async () => {
    expect(await cliThrows('--help')).toMatch('Usage');
  });
});
