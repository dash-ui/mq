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
  it('should return a media query string w/ one argument', () => {
    const breakpoint = mq(breakpoints)
    expect(breakpoint('phone')).toBe('@media only screen and (min-width: 0em)')
  })

  it('should return a media query string w/ one object argument', () => {
    const breakpoint = mq(breakpoints)
    expect(breakpoint({phone: true})).toBe(
      '@media only screen and (min-width: 0em)'
    )
  })

  it('should return a media query string w/ two object argument', () => {
    const breakpoint = mq(breakpoints)
    expect(
      breakpoint(
        {phone: true},
        ({blue}) => `color: ${blue};`
      )({blue: 'var(--blue)'})
    ).toMatchSnapshot('var(--blue)')

    expect(
      breakpoint({phone: true}, 'color: red;')({blue: 'var(--blue)'})
    ).toMatchSnapshot('red')

    expect(
      breakpoint({phone: true}, {color: 'green'})({blue: 'var(--blue)'})
    ).toMatchSnapshot('green')
  })

  it('should join multiple query object media queries into one', () => {
    const breakpoint = mq(breakpoints)
    expect(
      breakpoint(
        {phone: true, 'hi-dpi': true},
        ({blue}) => `color: ${blue};`
      )({blue: 'var(--blue)'})
    ).toMatchSnapshot('phone, hi-dpi')
  })

  it('should not create media queries for falsy values', () => {
    const breakpoint = mq(breakpoints)
    expect(
      breakpoint(
        {phone: true, 'hi-dpi': 0},
        ({blue}) => `color: ${blue};`
      )({blue: 'var(--blue)'})
    ).toMatchSnapshot('phone, hi-dpi')

    expect(
      breakpoint({phone: false, 'hi-dpi': 0}, ({blue}) => `color: ${blue};`)
    ).toMatchSnapshot('empty string')
  })

  it('should return a style getter when there is a second argument', () => {
    const breakpoint = mq(breakpoints)
    expect(
      breakpoint('phone', ({blue}) => `color: ${blue};`)({blue: 'var(--blue)'})
    ).toMatchSnapshot('var(--blue)')

    expect(
      breakpoint('phone', 'color: red;')({blue: 'var(--blue)'})
    ).toMatchSnapshot('red')

    expect(
      breakpoint('phone', {color: 'green'})({blue: 'var(--blue)'})
    ).toMatchSnapshot('green')
  })
})
