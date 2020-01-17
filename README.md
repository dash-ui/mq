<hr>
<div align="center">
  <h1 align="center">
    @-ui/mq
  </h1>
</div>

<p align="center">
  <a href="https://bundlephobia.com/result?p=@-ui/mq">
    <img alt="Bundlephobia" src="https://img.shields.io/bundlephobia/minzip/@-ui/mq?style=for-the-badge&labelColor=24292e">
  </a>
  <a aria-label="Types" href="https://www.npmjs.com/package/@-ui/mq">
    <img alt="Types" src="https://img.shields.io/npm/types/@-ui/mq?style=for-the-badge&labelColor=24292e">
  </a>
  <a aria-label="Code coverage report" href="https://codecov.io/gh/dash-ui/mq">
    <img alt="Code coverage" src="https://img.shields.io/codecov/c/gh/dash-ui/mq?style=for-the-badge&labelColor=24292e">
  </a>
  <a aria-label="Build status" href="https://travis-ci.org/dash-ui/mq">
    <img alt="Build status" src="https://img.shields.io/travis/dash-ui/mq?style=for-the-badge&labelColor=24292e">
  </a>
  <a aria-label="NPM version" href="https://www.npmjs.com/package/@-ui/mq">
    <img alt="NPM Version" src="https://img.shields.io/npm/v/@-ui/mq?style=for-the-badge&labelColor=24292e">
  </a>
  <a aria-label="License" href="https://jaredlunde.mit-license.org/">
    <img alt="MIT License" src="https://img.shields.io/npm/l/@-ui/mq?style=for-the-badge&labelColor=24292e">
  </a>
</p>

<pre align="center">npm i @-ui/mq</pre>
<hr>

A utility function for adding stored media queries and breakpoints to -ui styles

## Quick Start

```js
import mq from '@-ui/mq'
import styles from '@-ui/styles'

const breakpoint = mq({
  // 0px
  phone: 'only screen and (min-width: 0em)',
  // 560px
  tablet: 'only screen and (min-width: 35em)',
  // 1280px
  desktop: 'only screen and (min-width: 80em)',
})

const responsiveBox = styles({
  default: `
    display: block;
    background: #000;
    width: 400px;
    height: 400px;
  `,
  big: breakpoint(
    'desktop',
    `
    width: 1000px;
    height: 1000px;
  `
  ),
  small: `
    ${breakpoint('phone')} {
      width: 200px;
      height: 200px;
    }
  `,
})
```

## API

## LICENSE

MIT
