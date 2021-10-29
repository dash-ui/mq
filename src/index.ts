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
function mq<
  Tokens extends DashTokens = DashTokens,
  Themes extends DashThemes = DashThemes,
  QueryNames extends string = string
>(styles: Styles<Tokens, Themes>, mediaQueries: MediaQueries<QueryNames>) {
  /**
   * A utility for adding media queries and breakpoints to Dash styles
   *
   * @param queryName - When a `string`, this will return a `string`
   *  media query e.g. `@media only screen and (min-width: 0em)`.
   *  When an object, it is used the same way as the `styles()` instance
   *  is, allowing you to define styles specific to given media queries and
   *  returning a style callback.
   */
  function mqStyles(queryName: QueryNames): string;
  function mqStyles(
    queryName: MediaQueryObject<QueryNames, Tokens, Themes>
  ): string;
  function mqStyles(
    queryName: QueryNames | MediaQueryObject<QueryNames, Tokens, Themes>
  ): string {
    if (typeof queryName === "string") {
      return `@media ${mediaQueries[queryName]}`;
    } else {
      let css = "";

      for (const key in queryName) {
        let value =
          queryName[key as keyof MediaQueryObject<QueryNames, Tokens, Themes>];
        value =
          !value || typeof value === "string"
            ? value || ""
            : styles.one(value).css();

        css +=
          key === "default"
            ? value
            : `@media ${mediaQueries[key as QueryNames]}{${value}}`;
      }

      return css;
    }
  }

  return mqStyles;
}

export default mq;

export type MediaQueries<QueryNames extends string> = {
  readonly [K in QueryNames]: string;
};

export type MediaQueryObject<
  QueryNames extends string,
  Tokens extends DashTokens = DashTokens,
  Themes extends DashThemes = DashThemes
> = {
  readonly [K in QueryNames | "default"]?:
    | string
    | StyleObject
    | StyleCallback<Tokens, Themes>;
};
