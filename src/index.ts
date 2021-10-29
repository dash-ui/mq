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
 * @param styles - A Dash `styles` instance
 * @param mediaQueries - A map of media query name/query pairs
 */
function mq<
  Tokens extends DashTokens = DashTokens,
  Themes extends DashThemes = DashThemes,
  QueryNames extends string = string
>(styles: Styles<Tokens, Themes>, mediaQueries: MediaQueries<QueryNames>) {
  const oneMemo = memoize(styles.one);
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
  ): (tokens: TokensUnion<Tokens, Themes>) => string;
  function mqStyles(
    queryName: QueryNames | MediaQueryObject<QueryNames, Tokens, Themes>
  ): string | ((tokens: TokensUnion<Tokens, Themes>) => string) {
    if (typeof queryName === "string") {
      return `@media ${mediaQueries[queryName]}`;
    } else {
      return () => {
        let css = "";

        for (const key in queryName) {
          let value =
            queryName[
              key as keyof MediaQueryObject<QueryNames, Tokens, Themes>
            ];
          value =
            !value || typeof value === "string" ? value || "" : oneMemo(value);

          css +=
            key === "default"
              ? value
              : `@media ${mediaQueries[key as QueryNames]}{${value}}`;
        }

        return css;
      };
    }
  }

  return mqStyles;
}

function memoize(fn: Styles<any, any>["one"]) {
  const cache = new WeakMap<StyleObject | StyleCallback<any, any>, string>();

  return (value: StyleObject | StyleCallback<any, any>) => {
    const cached = cache.get(value);

    if (cached) {
      return cached;
    }

    const css = fn(value).css();
    cache.set(value, css);
    return css;
  };
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
