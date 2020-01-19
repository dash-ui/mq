import {
  normalizeStyles,
  StoredVariables,
  StyleObject,
  StyleGetter,
} from '@-ui/styles'

// use 1:
// styles({foo: `${mq('phone')} { display: none; }`})
//
// use 2:
// styles({foo: mq('phone', `display: block;`))
//
// use 3:
// styles({foo: mq({phone: true, 'hi-dpi': true}, `font-smoothing: antialias;`})
export type MediaQueries<T> = {
  readonly [K in keyof T]: T[K]
}

export type MediaQueryCallbackObject<T> = {
  readonly [K in keyof T]?: any
}

type MediaQueryNameCallback<T> = <K extends keyof T>(
  queryName: K | MediaQueryCallbackObject<T>
) => string

type MediaQueryCssCallback<T> = <K extends keyof T>(
  queryName: K | MediaQueryCallbackObject<T>,
  css?: string | StyleObject | StyleGetter
) => (variables: StoredVariables) => string

export type MediaQueryCallback<T> =
  | MediaQueryNameCallback<T>
  | MediaQueryCssCallback<T>

export default function mq<T, Vars = StoredVariables>(
  mediaQueries: MediaQueries<T>
): MediaQueryCssCallback<T>
export default function mq<T, Vars = StoredVariables>(
  mediaQueries: MediaQueries<T>
): MediaQueryNameCallback<T>
export default function mq<T, Vars = StoredVariables>(
  mediaQueries: MediaQueries<T>
) {
  const callback = <K extends keyof T>(
    queryName: K | MediaQueryCallbackObject<T>,
    css?: string | StyleObject | StyleGetter
  ) => {
    let query: T[K] | string

    if (typeof queryName === 'object') {
      query = Object.keys(queryName)
        .filter(k => Boolean(queryName[k]))
        .map(qn => mediaQueries[qn])
        .join(',')
    } else {
      query = mediaQueries[queryName]
    }

    if (!query) return ''
    const queryString = `@media ${query}`
    return css === void 0
      ? queryString
      : (variables: Vars): string =>
          `${queryString}{${normalizeStyles<Vars>(css, variables)}}`
  }

  return callback as MediaQueryCallback<T>
}
