# @carnesen/bitcoin-regtest-service-cli [![npm version](https://badge.fury.io/js/%40carnesen%2Fbitcoin-regtest-service-cli.svg)](https://badge.fury.io/js/%40carnesen%2Fbitcoin-regtest-service-cli) [![Build Status](https://travis-ci.com/carnesen/bitcoin-regtest-service-cli.svg?branch=master)](https://travis-ci.com/carnesen/bitcoin-regtest-service-cli)

A Node.js command-line client for bitcoin's remote procedure call (RPC) interface

## Install
```
npm install --global @carnesen/bitcoin-regtest-service-cli
```

Alternatively, if you don't want to install the package you can run it as a one-off command using `npx`:
```
$ npx @carnesen/bitcoin-regtest-service-cli
```

## Usage

Use the `--help` flag to get command usage:
```
$ regtest-service --help
Usage: regtest-service <subcommand> <options>

   Manage a regtest-mode bitcoin service

Subcommands:

   restart, start, stop, status
```

The `start`, `stop`, and `restart` commands indicate whether they've changed the state of the system, e.g. gone from stopped to started:

```
$ regtest-service start
Bitcoin server starting
{ changed: true }

$ regtest-service start
{ changed: false }
```

## More information
Check out [the unit tests](src/__tests__) to see more examples of how it works. If you encounter any bugs or have any questions or feature requests, please don't hesitate to file an issue or submit a pull request on this project's repository on GitHub.

## Related
- [@carnesen/cli](https://github.com/carnesen/cli): A Node.js library for building command-line interfaces
- [@carnesen/bitcoin-regtest-service](https://github.com/carnesen/bitcoin-regtest-service): A Node.js library for managing a regtest-mode `bitcoind` service

## License

MIT © [Chris Arnesen](https://www.carnesen.com)
