import type {StyleObject, StyleCallback, DashTokens} from '@dash-ui/styles'
/**
 * A factory function that creates a utility for adding breakpoints and
 * media queries to Dash styles
 *
 * @param mediaQueries A map of media query name/query pairs
 */
declare function mq<
  Tokens extends DashTokens = DashTokens,
  QueryNames extends string = string
>(
  mediaQueries: MediaQueries<QueryNames>
): MediaQueryCssCallback<QueryNames, Tokens>
declare function mq<
  Tokens extends DashTokens = DashTokens,
  QueryNames extends string = string
>(
  mediaQueries: MediaQueries<QueryNames>
): MediaQueryNameCallback<QueryNames, Tokens>
export default mq
export declare type MediaQueries<QueryNames extends string> = {
  readonly [K in QueryNames]: string
}
declare type MediaQueryNameCallback<
  QueryNames extends string,
  Tokens extends DashTokens = DashTokens
> = (queryName: QueryNames | MediaQueryObject<QueryNames, Tokens>) => string
declare type MediaQueryCssCallback<
  QueryNames extends string,
  Tokens extends DashTokens = DashTokens
> = (
  queryName: QueryNames | MediaQueryObject<QueryNames, Tokens>
) => (tokens: Tokens) => string
export declare type MediaQueryObject<
  QueryNames extends string,
  Tokens extends DashTokens = DashTokens
> = {
  readonly [K in QueryNames | 'default']?:
    | string
    | StyleObject
    | StyleCallback<Tokens>
}
