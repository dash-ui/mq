import {normalizeStyles} from '@-ui/styles'
import type {StyleObject, StyleGetter, DefaultVars} from '@-ui/styles'

// use 1:
// styles({foo: `${mq('phone')} { display: none; }`})
//
// use 2:
// styles({foo: mq('phone', `display: block;`))
//
// use 3:
// styles({foo: mq({phone: true, 'hi-dpi': true}, `font-smoothing: antialias;`})

export default function mq<
  QueryNames extends string,
  Vars extends DefaultVars = DefaultVars
>(
  mediaQueries: MediaQueries<QueryNames>
): MediaQueryCssCallback<QueryNames, Vars>

export default function mq<
  QueryNames extends string,
  Vars extends DefaultVars = DefaultVars
>(
  mediaQueries: MediaQueries<QueryNames>
): MediaQueryNameCallback<QueryNames, Vars>

export default function mq<
  QueryNames extends string,
  Vars extends DefaultVars = DefaultVars
>(
  mediaQueries: MediaQueries<QueryNames>
): MediaQueryCallback<QueryNames, Vars> {
  return ((queryName: QueryNames | MediaQueryObject<QueryNames, Vars>) => {
    if (typeof queryName === 'object') {
      return (variables: Vars) => {
        let css = ''

        for (const key in queryName) {
          const value = normalizeStyles<Vars>(queryName[key], variables)
          css +=
            key === 'default' ? value : `@media ${mediaQueries[key]}{${value}}`
        }

        return css
      }
    } else {
      return `@media ${mediaQueries[queryName]}`
    }
  }) as MediaQueryCallback<QueryNames, Vars>
}

export type MediaQueries<QueryNames extends string> = {
  readonly [K in QueryNames]: string
}

export type MediaQueryObject<QueryNames extends string, Vars> = {
  readonly [K in QueryNames | 'default']?:
    | string
    | StyleObject
    | StyleGetter<Vars>
}

type MediaQueryNameCallback<QueryNames extends string, Vars> = (
  queryName: QueryNames | MediaQueryObject<QueryNames, Vars>
) => string

type MediaQueryCssCallback<QueryNames extends string, Vars> = (
  queryName: QueryNames | MediaQueryObject<QueryNames, Vars>,
  css?: string | StyleObject | StyleGetter<Vars>
) => (variables: Vars) => string

export type MediaQueryCallback<QueryNames extends string, Vars> =
  | MediaQueryNameCallback<QueryNames, Vars>
  | MediaQueryCssCallback<QueryNames, Vars>
