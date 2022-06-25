# [1.0.0](https://github.com/dash-ui/mq/compare/v0.4.1...v1.0.0) (2022-06-25)

### Bug Fixes

- force new version ([82cc051](https://github.com/dash-ui/mq/commit/82cc051ac0b43950169ef405fe7d5d654625f6e6))
- get rid of the riff raff ([5ad5ac9](https://github.com/dash-ui/mq/commit/5ad5ac952d75bb3796b19d5693d78a49c5a6f8d5))
- make media queries obey order of breakpoints ([8887345](https://github.com/dash-ui/mq/commit/8887345c98df2e9c842b7c9beb36742331cb9017))
- remove alpha peer deps ([3e59d3b](https://github.com/dash-ui/mq/commit/3e59d3b91a9321f01241886c1f06a7a5fd9f917a))

### Features

- add memoization and update types ([a132c8d](https://github.com/dash-ui/mq/commit/a132c8df120a47d0f7e7391f412f4e12c3ab8d2e))
- allow numbers as media query names ([fa04f47](https://github.com/dash-ui/mq/commit/fa04f47629dc42035899ed1f3b9932b8d11cc326))
- release alpha ([8764b1c](https://github.com/dash-ui/mq/commit/8764b1c25355d19d26bb94947d656d22cdc3d34b))

### Performance Improvements

- concat strings instead of interpolating ([8f1cfb0](https://github.com/dash-ui/mq/commit/8f1cfb0c417118ce056eb2c62d9c113b34b412dc))
- remove memoization, just return the compiled string ([4123031](https://github.com/dash-ui/mq/commit/4123031b840e4161319bac6f913414c8e3b4c4d8))

### BREAKING CHANGES

- `styles` instances are now required as a first argument in the initializer

# [1.0.0-alpha.8](https://github.com/dash-ui/mq/compare/v1.0.0-alpha.7...v1.0.0-alpha.8) (2022-06-25)

### Bug Fixes

- remove alpha peer deps ([3e59d3b](https://github.com/dash-ui/mq/commit/3e59d3b91a9321f01241886c1f06a7a5fd9f917a))

# [1.0.0-alpha.7](https://github.com/dash-ui/mq/compare/v1.0.0-alpha.6...v1.0.0-alpha.7) (2021-10-31)

### Performance Improvements

- concat strings instead of interpolating ([8f1cfb0](https://github.com/dash-ui/mq/commit/8f1cfb0c417118ce056eb2c62d9c113b34b412dc))

# [1.0.0-alpha.6](https://github.com/dash-ui/mq/compare/v1.0.0-alpha.5...v1.0.0-alpha.6) (2021-10-30)

### Bug Fixes

- get rid of the riff raff ([5ad5ac9](https://github.com/dash-ui/mq/commit/5ad5ac952d75bb3796b19d5693d78a49c5a6f8d5))

# [1.0.0-alpha.5](https://github.com/dash-ui/mq/compare/v1.0.0-alpha.4...v1.0.0-alpha.5) (2021-10-30)

### Bug Fixes

- make media queries obey order of breakpoints ([8887345](https://github.com/dash-ui/mq/commit/8887345c98df2e9c842b7c9beb36742331cb9017))

# [1.0.0-alpha.4](https://github.com/dash-ui/mq/compare/v1.0.0-alpha.3...v1.0.0-alpha.4) (2021-10-30)

### Features

- allow numbers as media query names ([fa04f47](https://github.com/dash-ui/mq/commit/fa04f47629dc42035899ed1f3b9932b8d11cc326))

# [1.0.0-alpha.3](https://github.com/dash-ui/mq/compare/v1.0.0-alpha.2...v1.0.0-alpha.3) (2021-10-29)

### Bug Fixes

- force new version ([82cc051](https://github.com/dash-ui/mq/commit/82cc051ac0b43950169ef405fe7d5d654625f6e6))

# [1.0.0-alpha.2](https://github.com/dash-ui/mq/compare/v1.0.0-alpha.1...v1.0.0-alpha.2) (2021-10-29)

### Performance Improvements

- remove memoization, just return the compiled string ([4123031](https://github.com/dash-ui/mq/commit/4123031b840e4161319bac6f913414c8e3b4c4d8))

# [1.0.0-alpha.1](https://github.com/dash-ui/mq/compare/v0.4.1...v1.0.0-alpha.1) (2021-10-29)

### Features

- add memoization and update types ([a132c8d](https://github.com/dash-ui/mq/commit/a132c8df120a47d0f7e7391f412f4e12c3ab8d2e))

### BREAKING CHANGES

- `styles` instances are now required as a first argument in the initializer

# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [0.4.1](https://github.com/dash-ui/mq/compare/v0.4.0...v0.4.1) (2020-08-19)

### Bug Fixes

- **types:** fix return value overload ([ee0bc1b](https://github.com/dash-ui/mq/commit/ee0bc1b2ad3262933e292846677eff08bdce56c3))

## [0.4.0](https://github.com/dash-ui/mq/compare/v0.3.0...v0.4.0) (2020-07-27)

### ⚠ BREAKING CHANGES

- Is only compatible with @dash-ui/styles@>=0.8.0

- rename all instances of "variables" to "tokens" ([dd8532a](https://github.com/dash-ui/mq/commit/dd8532a4aee8df7104616b3fbd22c378c97b12b5))

## [0.3.0](https://github.com/dash-ui/mq/compare/v0.2.0...v0.3.0) (2020-07-23)

### ⚠ BREAKING CHANGES

- The `Variables` generic now comes before the `QueryNames` generic type

### Bug Fixes

- remove unused argument type def ([050b981](https://github.com/dash-ui/mq/commit/050b981dda63a1cd09d7c9b8e853a2efc097b776))

* change generic type order ([9a75b99](https://github.com/dash-ui/mq/commit/9a75b994b7f312e72dc62737aa47bac55086a734))

## 0.2.0 (2020-07-04)
