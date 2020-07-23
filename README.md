<hr>
  <br/>
  <img src='https://github.com/dash-ui/styles/raw/master/assets/logo.png'/>
  <blockquote>A utility function for adding stored media queries and breakpoints to <a href="https://github.com/dash-ui/styles">dash-ui</a></blockquote>
  
  <pre>npm i @dash-ui/mq</pre>
  <br/>
  
  <a href="https://bundlephobia.com/result?p=@dash-ui/mq">
    <img alt="Bundlephobia" src="https://img.shields.io/bundlephobia/minzip/@dash-ui/mq?style=for-the-badge&labelColor=24292e">
  </a>

  <a aria-label="Types" href="https://www.npmjs.com/package/@dash-ui/mq">
    <img alt="Types" src="https://img.shields.io/npm/types/@dash-ui/mq?style=for-the-badge&labelColor=24292e">
  </a>
  <a aria-label="Code coverage report" href="https://codecov.io/gh/dash-ui/mq">
    <img alt="Code coverage" src="https://img.shields.io/codecov/c/gh/dash-ui/mq?style=for-the-badge&labelColor=24292e">
  </a>
  <a aria-label="Build status" href="https://travis-ci.com/dash-ui/mq">
    <img alt="Build status" src="https://img.shields.io/travis/com/dash-ui/mq?style=for-the-badge&labelColor=24292e">
  </a>
  <a aria-label="NPM version" href="https://www.npmjs.com/package/@dash-ui/mq">
    <img alt="NPM Version" src="https://img.shields.io/npm/v/@dash-ui/mq?style=for-the-badge&labelColor=24292e">
  </a>
  <a aria-label="License" href="https://jaredlunde.mit-license.org/">
    <img alt="MIT License" src="https://img.shields.io/npm/l/@dash-ui/mq?style=for-the-badge&labelColor=24292e">
  </a>
<hr>

## Quick Start

```js
import mq from '@dash-ui/mq'
import styles from '@dash-ui/styles'

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
  big: breakpoint({
    default: `
      width: 800px;
      height: 800px;
    `,
    desktop: `
      width: 1000px;
      height: 1000px;
    `,
  }),
  small: `
    width: 300px;
    height: 300px;

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
