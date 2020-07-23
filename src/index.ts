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

/**
 * A factory function that creates a utility for adding breakpoints and
 * media queries to Dash styles
 *
 * @param mediaQueries A map of media query name/query pairs
 */
function mq<
  Variables extends DashVariables = DashVariables,
  QueryNames extends string = string
>(
  mediaQueries: MediaQueries<QueryNames>
): MediaQueryCssCallback<QueryNames, Variables>
function mq<
  Variables extends DashVariables = DashVariables,
  QueryNames extends string = string
>(
  mediaQueries: MediaQueries<QueryNames>
): MediaQueryNameCallback<QueryNames, Variables>
function mq<
  Variables extends DashVariables = DashVariables,
  QueryNames extends string = string
>(mediaQueries: MediaQueries<QueryNames>) {
  /**
   * A utility for adding media queries and breakpoints to Dash styles
   *
   * @param queryName When a `string`, this will return a `string`
   *  media query e.g. `@media only screen and (min-width: 0em)`.
   *  When an object, it is used the same way as the `styles()` instance
   *  is, allowing you to define styles specific to given media queries and
   *  returning a style callback.
   */
  function mqStyles(
    queryName: QueryNames | MediaQueryObject<QueryNames, Variables>
  ) {
    if (typeof queryName === 'object') {
      return (variables: Variables) => {
        let css = ''

        for (const key in queryName) {
          let value =
            queryName[key as keyof MediaQueryObject<QueryNames, Variables>]
          value =
            typeof value === 'string'
              ? value
              : compileStyles<Variables>(value, variables)

          css +=
            key === 'default'
              ? value
              : `@media ${mediaQueries[key as QueryNames]}{${value}}`
        }

        return css
      }
    } else {
      return `@media ${mediaQueries[queryName]}`
    }
  }

  return mqStyles
}

export default mq

export type MediaQueries<QueryNames extends string> = {
  readonly [K in QueryNames]: string
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

export type MediaQueryObject<
  QueryNames extends string,
  Variables extends DashVariables = DashVariables
> = {
  readonly [K in QueryNames | 'default']?:
    | string
    | StyleObject
    | StyleCallback<Variables>
}
