import type {
  DashThemes,
  DashTokens,
  StyleCallback,
  StyleObject,
  Styles,
  TokensUnion,
} from "@dash-ui/styles";
/**
 * A factory function that creates a utility for adding breakpoints and
 * media queries to Dash styles
 *
 * @param mediaQueries - A map of media query name/query pairs
 */
declare function mq<
  Tokens extends DashTokens = DashTokens,
  Themes extends DashThemes = DashThemes,
  QueryNames extends string = string
>(
  styles: Styles<Tokens, Themes>,
  mediaQueries: MediaQueries<QueryNames>
): {
  (queryName: QueryNames): string;
  (queryName: MediaQueryObject<QueryNames, Tokens, Themes>): (
    tokens: TokensUnion<Tokens, Themes>
  ) => string;
};
export default mq;
export declare type MediaQueries<QueryNames extends string> = {
  readonly [K in QueryNames]: string;
};
export declare type MediaQueryObject<
  QueryNames extends string,
  Tokens extends DashTokens = DashTokens,
  Themes extends DashThemes = DashThemes
> = {
  readonly [K in QueryNames | "default"]?:
    | string
    | StyleObject
    | StyleCallback<Tokens, Themes>;
};
