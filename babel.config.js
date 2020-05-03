module.exports = (api) => {
  const module = api.env('module')
  const esm = api.env('esm')

  return {
    presets: [
      [
        '@lunde/es',
        {
          env: {
            modules: esm || module ? false : 'commonjs',
            targets: module
              ? {
                  browsers: '> 2%',
                }
              : {
                  node: esm ? '12' : '10',
                },
          },
          devExpression: false,
          restSpread: false,
          objectAssign: false,
        },
      ],
    ],
    plugins: ['annotate-pure-calls'],
  }
}
