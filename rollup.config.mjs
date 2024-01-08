import typescript from '@rollup/plugin-typescript';

export default {
  external: [
    'json5'
  ],
  input: 'src/index.ts',
  output: {
    file: 'lib/wili.cjs',
    format: 'cjs',
    sourcemap: true
  },
  plugins: [
    typescript()
  ]
};
