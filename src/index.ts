import {compileStyles} from '@dash-ui/styles'
import type {StyleObject, StyleCallback, DashVariables} from '@dash-ui/styles'

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
  Variables extends DashVariables = DashVariables
>(
  mediaQueries: MediaQueries<QueryNames>
): MediaQueryCssCallback<QueryNames, Variables>

export default function mq<
  QueryNames extends string,
  Variables extends DashVariables = DashVariables
>(
  mediaQueries: MediaQueries<QueryNames>
): MediaQueryNameCallback<QueryNames, Variables>

export default function mq<
  QueryNames extends string,
  Variables extends DashVariables = DashVariables
>(
  mediaQueries: MediaQueries<QueryNames>
): MediaQueryCallback<QueryNames, Variables> {
  return ((queryName: QueryNames | MediaQueryObject<QueryNames, Variables>) => {
    if (typeof queryName === 'object') {
      return (variables: Variables) => {
        let css = ''

        for (const key in queryName) {
          let value = queryName[key]
          value =
            typeof queryName[key] === 'string'
              ? queryName[key]
              : compileStyles<Variables>(queryName[key], variables)
          css +=
            key === 'default' ? value : `@media ${mediaQueries[key]}{${value}}`
        }

        return css
      }
    } else {
      return `@media ${mediaQueries[queryName]}`
    }
  }) as MediaQueryCallback<QueryNames, Variables>
}

export type MediaQueries<QueryNames extends string> = {
  readonly [K in QueryNames]: string
}

export type MediaQueryObject<
  QueryNames extends string,
  Variables extends DashVariables = DashVariables
> = {
  readonly [K in QueryNames | 'default']?:
    | string
    | StyleObject
    | StyleCallback<Variables>
}

type MediaQueryNameCallback<
  QueryNames extends string,
  Variables extends DashVariables = DashVariables
> = (queryName: QueryNames | MediaQueryObject<QueryNames, Variables>) => string

type MediaQueryCssCallback<
  QueryNames extends string,
  Variables extends DashVariables = DashVariables
> = (
  queryName: QueryNames | MediaQueryObject<QueryNames, Variables>,
  css?: string | StyleObject | StyleCallback<Variables>
) => (variables: Variables) => string

export type MediaQueryCallback<
  QueryNames extends string,
  Variables extends DashVariables = DashVariables
> =
  | MediaQueryNameCallback<QueryNames, Variables>
  | MediaQueryCssCallback<QueryNames, Variables>
