import mq from './index'

const breakpoints = {
  // 0px
  phone: 'only screen and (min-width: 0em)',
  // 560px
  tablet: 'only screen and (min-width: 35em)',
  // 1280px
  desktop: 'only screen and (min-width: 80em)',
  'hi-dpi': `
     only screen and (-webkit-min-device-pixel-ratio: 1.5),
     only screen and (min--moz-device-pixel-ratio: 1.5),
     only screen and (-o-min-device-pixel-ratio: 1.5/1),
     only screen and (min-resolution: 144dpi),
     only screen and (min-resolution: 1.5dppx)
  `,
}

describe('mq()', () => {
  it('should return a media query string when first argument is a string', () => {
    const breakpoint = mq(breakpoints)
    expect(breakpoint('phone')).toBe('@media only screen and (min-width: 0em)')
  })

  it('should return a css getter when first argument is an object', () => {
    type Variables = {
      color: {
        blue: string
      }
    }

    const breakpoint = mq<Variables, keyof typeof breakpoints>(breakpoints)
    expect(
      breakpoint({phone: ({color}) => `color: ${color.blue};`})({
        color: {blue: 'var(--color-blue)'},
      })
    ).toBe('@media only screen and (min-width: 0em){color: var(--color-blue);}')
  })

  it('should apply default styles for breakpoint objects', () => {
    type Variables = {
      color: {
        blue: string
      }
    }

    const breakpoint = mq<Variables, keyof typeof breakpoints>(breakpoints)
    expect(
      breakpoint({
        default: `color: green;`,
        phone: ({color}) => `color: ${color.blue};`,
      })({
        color: {blue: 'var(--color-blue)'},
      })
    ).toBe(
      'color: green;@media only screen and (min-width: 0em){color: var(--color-blue);}'
    )
  })

  it('should apply styles for breakpoint objects w/ string style', () => {
    type Variables = {
      color: {
        blue: string
      }
    }

    const breakpoint = mq<Variables, keyof typeof breakpoints>(breakpoints)
    expect(
      breakpoint({
        default: `color: green;`,
        phone: `color:var(--color-blue);`,
      })({
        color: {blue: 'var(--color-blue)'},
      })
    ).toBe(
      'color: green;@media only screen and (min-width: 0em){color:var(--color-blue);}'
    )
  })

  it('should apply styles for breakpoint objects w/ object style', () => {
    type Variables = {
      color: {
        blue: string
      }
    }

    const breakpoint = mq<Variables, keyof typeof breakpoints>(breakpoints)
    expect(
      breakpoint({
        default: `color: green;`,
        phone: {
          color: 'var(--color-blue)',
        },
      })({
        color: {blue: 'var(--color-blue)'},
      })
    ).toBe(
      'color: green;@media only screen and (min-width: 0em){color:var(--color-blue);}'
    )
  })
})
