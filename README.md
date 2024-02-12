# Foundry up @ NPM

This package simply publishes Foundry executables to NPM, so that run `forge build` by simply installing this package.

When installing, this package will install the latest nightly version of Foundry.

## Usage

### Install

```bash
npm install -g foundry-up
# or specify a release tag (version)
# npm install -g foundry-up --foundry_version=nightly-2cf84d9f3ba7b6f4a9296299e7036ecc24cfa1da
```

> Note that you can install this package locally, but in this case you won't be able to execute the commands globally. See below for more details.

### Usage
#### Install globally
```bash
forge -V

# forge 0.2.0 (b174c3a 2024-02-09T00:16:22.953958126Z)
```
#### Install locally
```bash
npx forge -V # or npm exec forge -V

# forge 0.2.0 (b174c3a 2024-02-09T00:16:22.953958126Z)
```

### Update

You can reinstall the package to get the latest version of Foundry.

```bash
npm uninstall -g foundry-up && npm install -g foundry-up
```
