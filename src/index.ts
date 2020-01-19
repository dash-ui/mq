import {
  normalizeStyles,
  StyleObject,
  StyleGetter,
  StoredVariables,
} from '@-ui/styles'

// use 1:
// styles({foo: `${mq('phone')} { display: none; }`})
//
// use 2:
// styles({foo: mq('phone', `display: block;`))
//
// use 3:
// styles({foo: mq({phone: true, 'hi-dpi': true}, `font-smoothing: antialias;`})
export type MediaQueries<MQ> = {
  readonly [K in keyof MQ]: MQ[K]
}

export type MediaQueryObject<MQ, Vars> = {
  readonly [K in keyof MQ | 'default']?:
    | string
    | StyleObject
    | StyleGetter<Vars>
}

type MediaQueryNameCallback<MQ, Vars> = <K extends keyof MQ>(
  queryName: K | MediaQueryObject<MQ, Vars>
) => string

type MediaQueryCssCallback<MQ, Vars> = <K extends keyof MQ>(
  queryName: K | MediaQueryObject<MQ, Vars>,
  css?: string | StyleObject | StyleGetter<Vars>
) => (variables: Vars) => string

export type MediaQueryCallback<MQ, Vars> =
  | MediaQueryNameCallback<MQ, Vars>
  | MediaQueryCssCallback<MQ, Vars>

export default function mq<MQ, Vars = StoredVariables>(
  mediaQueries: MediaQueries<MQ>
): MediaQueryCssCallback<MQ, Vars>

export default function mq<MQ, Vars = StoredVariables>(
  mediaQueries: MediaQueries<MQ>
): MediaQueryNameCallback<MQ, Vars>

export default function mq<MQ, Vars = StoredVariables>(
  mediaQueries: MediaQueries<MQ>
): MediaQueryCallback<MQ, Vars> {
  return (<K extends keyof MQ>(queryName: K | MediaQueryObject<MQ, Vars>) => {
    if (typeof queryName === 'object') {
      return (variables: Vars) => {
        let css = ''

        for (const key in queryName) {
          const value = normalizeStyles<Vars>(queryName[key], variables)
          css +=
            key === 'default' ? value : `@media ${mediaQueries[key]}{${value}}`
        }

        return css
      }
    } else {
      return `@media ${mediaQueries[queryName]}`
    }
  }) as MediaQueryCallback<MQ, Vars>
}
