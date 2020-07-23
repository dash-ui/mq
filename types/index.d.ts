import type {StyleObject, StyleCallback, DashVariables} from '@dash-ui/styles'
/**
 * A factory function that creates a utility for adding breakpoints and
 * media queries to Dash styles
 *
 * @param mediaQueries A map of media query name/query pairs
 */
declare function mq<
  Variables extends DashVariables = DashVariables,
  QueryNames extends string = string
>(
  mediaQueries: MediaQueries<QueryNames>
): MediaQueryCssCallback<QueryNames, Variables>
declare function mq<
  Variables extends DashVariables = DashVariables,
  QueryNames extends string = string
>(
  mediaQueries: MediaQueries<QueryNames>
): MediaQueryNameCallback<QueryNames, Variables>
export default mq
export declare type MediaQueries<QueryNames extends string> = {
  readonly [K in QueryNames]: string
}
declare type MediaQueryNameCallback<
  QueryNames extends string,
  Variables extends DashVariables = DashVariables
> = (queryName: QueryNames | MediaQueryObject<QueryNames, Variables>) => string
declare type MediaQueryCssCallback<
  QueryNames extends string,
  Variables extends DashVariables = DashVariables
> = (
  queryName: QueryNames | MediaQueryObject<QueryNames, Variables>
) => (variables: Variables) => string
export declare type MediaQueryObject<
  QueryNames extends string,
  Variables extends DashVariables = DashVariables
> = {
  readonly [K in QueryNames | 'default']?:
    | string
    | StyleObject
    | StyleCallback<Variables>
}
