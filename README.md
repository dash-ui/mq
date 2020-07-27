<hr>
  <br/>
  <img src='https://github.com/dash-ui/styles/raw/master/assets/logo.png'/>
  <blockquote>A utility for adding stored media queries and breakpoints to <a href="https://github.com/dash-ui/styles">dash-ui</a></blockquote>
  
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

## Quick start

[Check out an example on **CodeSandbox**](https://codesandbox.io/s/dash-uimq-example-sdol5?file=/src/App.tsx)

```js
import mq from '@dash-ui/mq'
import {styles} from '@dash-ui/styles'

const breakpoint = mq({
  // 0px
  sm: 'only screen and (min-width: 0em)',
  // 560px
  mq: 'only screen and (min-width: 35em)',
  // 1280px
  lg: 'only screen and (min-width: 80em)',
})

const box = styles.one(
  breakpoint({
    sm: ({color}) => ({
      width: 100,
      height: 100,
      backgroundColor: color.primary,
    }),
    md: ({color}) => ({
      width: 200,
      height: 200,
      backgroundColor: color.primary,
    }),
    lg: ({color}) => ({
      width: 400,
      height: 400,
      backgroundColor: color.primary,
    }),
  })
)

export const Component = () => <div className={box()} />
```

## API

### mq()

A factory function that creates a utility for adding breakpoints and
media queries to Dash styles.

#### Example

[Check out an example on **CodeSandbox**](https://codesandbox.io/s/dash-uimq-example-sdol5?file=/src/App.tsx)

```tsx
import mq from '@dash-ui/mq'
import {styles} from '@dash-ui/styles'

// Creates the stored media queries
const breakpoint = mq({
  sm: 'only screen and (min-width: 0em)',
  mq: 'only screen and (min-width: 35em)',
  lg: 'only screen and (min-width: 80em)',
})

// Can be used as a shortcut for `@media ...`
const boxOne = styles.one`
  width: 200px;
  height: 200px;

  /**
   * This box will be 400x400 when "md" breakpoint matches
   */
  ${breakpoint('md')} {
    width: 400px;
    height: 400px;
  }
`

// Can be used like a style mapping
const boxTwo = styles.one(
  breakpoint({
    // This box will always have a `primary` color background
    default: ({color}) => ({
      backgroundColor: color.primary,
    }),
    // This box will be 100x100 when `sm` media query is matched
    sm: {
      width: 100,
      height: 100,
    },
    // This box will be 200x200 when `md` media query is matched
    md: `
      width: 200px;
      height: 200px;
    `,
    // This box will be 400x400 when `lg` media query is matched
    lg: `
      width: 400px;
      height: 400px
    `,
  })
)

const Component = () => (
  <React.Fragment>
    <div className={boxOne()} />
    <div className={boxTwo()} />
  </React.Fragment>
)
```

#### Arguments

```typescript
function mq<
  Tokens extends DashTokens = DashTokens,
  QueryNames extends string = string
>(
  mediaQueries: MediaQueries<QueryNames>
): MediaQueryCssCallback<QueryNames, Tokens>
function mq<
  Tokens extends DashTokens = DashTokens,
  QueryNames extends string = string
>(
  mediaQueries: MediaQueries<QueryNames>
): MediaQueryNameCallback<QueryNames, Tokens>
```

| Argument     | Type                                   | Required? | Description                           |
| ------------ | -------------------------------------- | --------- | ------------------------------------- |
| mediaQueries | `{readonly [K in QueryNames]: string}` | Yes       | A map of media query name/query pairs |

#### Returns

```typescript
// When a `string` is provided as the `mediaQueries` argument, this
// will return a `MediaQueryNameCallback`, otherwise a `MediaQueryCssCallback`
function mqStyles(
  queryName: QueryNames | MediaQueryObject<QueryNames, Tokens>
): MediaQueryNameCallback | MediaQueryCssCallback
```

### MediaQueryNameCallback

A function that returns a media query string e.g. `"@media only screen and (min-width: 0em)"`.

```typescript
type MediaQueryNameCallback<
  QueryNames extends string,
  Tokens extends DashTokens = DashTokens
> = (queryName: QueryNames | MediaQueryObject<QueryNames, Tokens>) => string
```

### MediaQueryCssCallback

A style callback which can be provided to any [`@dash-ui/styles`](https://github.com/dash-ui/styles)
functions that accept one. i.e. `styles()`, `styles.one()`, `styles.cls()`, and `styles.insertGlobal()`

```typescript
type MediaQueryCssCallback<
  QueryNames extends string,
  Tokens extends DashTokens = DashTokens
> = (
  queryName: QueryNames | MediaQueryObject<QueryNames, Tokens>
) => (tokens: Tokens) => string

export type MediaQueryObject<
  QueryNames extends string,
  Tokens extends DashTokens = DashTokens
> = {
  readonly [K in QueryNames | 'default']?:
    | string
    | StyleObject
    | StyleCallback<Tokens>
}
```

## LICENSE

MIT
