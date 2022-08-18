import type {
  DashThemes,
  DashTokens,
  StyleCallback,
  StyleObject,
  Styles,
} from "@dash-ui/styles";
/**
 * A factory function that creates a utility for adding breakpoints and
 * media queries to Dash styles
 *
 * @param styles - A Dash `styles` instance
 * @param mediaQueries - A map of media query name/query pairs
 */
declare function mq<
  Tokens extends DashTokens = DashTokens,
  Themes extends DashThemes = DashThemes,
  QueryNames extends string | number = string | number
>(
  styles: Styles<Tokens, Themes>,
  mediaQueries: MediaQueries<QueryNames>
): MqStyles<QueryNames, Tokens, Themes>;
export default mq;
export declare type MqStyles<
  QueryNames extends string | number,
  Tokens extends DashTokens = DashTokens,
  Themes extends DashThemes = DashThemes
> = {
  (queryName: QueryNames): string;
  (queryName: MediaQueryObject<QueryNames, Tokens, Themes>): string;
  (
    queryName: QueryNames | MediaQueryObject<QueryNames, Tokens, Themes>
  ): string;
};
export declare type MediaQueries<QueryNames extends string | number> = {
  readonly [K in QueryNames]: string;
};
export declare type MediaQueryObject<
  QueryNames extends string | number,
  Tokens extends DashTokens = DashTokens,
  Themes extends DashThemes = DashThemes
> = {
  readonly [K in QueryNames | "default"]?:
    | string
    | StyleObject
    | StyleCallback<Tokens, Themes>;
};
