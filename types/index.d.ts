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
): {
  (queryName: QueryNames): string
  (queryName: MediaQueryObject<QueryNames, Tokens>): (tokens: Tokens) => string
}
export default mq
export declare type MediaQueries<QueryNames extends string> = {
  readonly [K in QueryNames]: string
}
export declare type MediaQueryObject<
  QueryNames extends string,
  Tokens extends DashTokens = DashTokens
> = {
  readonly [K in QueryNames | 'default']?:
    | string
    | StyleObject
    | StyleCallback<Tokens>
}
