import type {StyleObject, StyleGetter, DefaultVars} from '@dash-ui/styles'
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
export declare type MediaQueries<QueryNames extends string> = {
  readonly [K in QueryNames]: string
}
export declare type MediaQueryObject<QueryNames extends string, Vars> = {
  readonly [K in QueryNames | 'default']?:
    | string
    | StyleObject
    | StyleGetter<Vars>
}
declare type MediaQueryNameCallback<QueryNames extends string, Vars> = (
  queryName: QueryNames | MediaQueryObject<QueryNames, Vars>
) => string
declare type MediaQueryCssCallback<QueryNames extends string, Vars> = (
  queryName: QueryNames | MediaQueryObject<QueryNames, Vars>,
  css?: string | StyleObject | StyleGetter<Vars>
) => (variables: Vars) => string
export declare type MediaQueryCallback<QueryNames extends string, Vars> =
  | MediaQueryNameCallback<QueryNames, Vars>
  | MediaQueryCssCallback<QueryNames, Vars>
export {}
