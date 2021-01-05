import typescript from 'rollup-plugin-typescript'
import sourceMaps from 'rollup-plugin-sourcemaps'

export default {
  input: './src/main.ts',
  plugins: [
    typescript({
      exclude: 'node_modules/**',
      typescript: require('typescript')
    }),
    sourceMaps()
  ],
  output: [{
      format: 'cjs',
      file: 'lib/bundle.cjs.js'
    },
    {
      format: 'es',
      file: 'lib/bundle.esm.js'
    },
  ]
}