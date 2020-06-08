import type {StyleObject, StyleCallback, DashVariables} from '@dash-ui/styles'
declare function mq<
  QueryNames extends string,
  Variables extends DashVariables = DashVariables
>(
  mediaQueries: MediaQueries<QueryNames>
): MediaQueryCssCallback<QueryNames, Variables>
declare function mq<
  QueryNames extends string,
  Variables extends DashVariables = DashVariables
>(
  mediaQueries: MediaQueries<QueryNames>
): MediaQueryNameCallback<QueryNames, Variables>
export default mq
export declare type MediaQueries<QueryNames extends string> = {
  readonly [K in QueryNames]: string
}
export declare type MediaQueryObject<
  QueryNames extends string,
  Variables extends DashVariables = DashVariables
> = {
  readonly [K in QueryNames | 'default']?:
    | string
    | StyleObject
    | StyleCallback<Variables>
}
declare type MediaQueryNameCallback<
  QueryNames extends string,
  Variables extends DashVariables = DashVariables
> = (queryName: QueryNames | MediaQueryObject<QueryNames, Variables>) => string
declare type MediaQueryCssCallback<
  QueryNames extends string,
  Variables extends DashVariables = DashVariables
> = (
  queryName: QueryNames | MediaQueryObject<QueryNames, Variables>,
  css?: string | StyleObject | StyleCallback<Variables>
) => (variables: Variables) => string
export declare type MediaQueryCallback<
  QueryNames extends string,
  Variables extends DashVariables = DashVariables
> =
  | MediaQueryNameCallback<QueryNames, Variables>
  | MediaQueryCssCallback<QueryNames, Variables>
