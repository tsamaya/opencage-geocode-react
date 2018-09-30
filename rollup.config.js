// node-resolve will resolve all the node dependencies
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

import pkg from './package.json';

const commonjs = require('rollup-plugin-commonjs');

// const external = ['react', 'react-native'];

export default [
  {
    input: 'src/index.js',
    // All the used libs needs to be here
    // external: external.concat(Object.keys(pkg.dependencies)),
    external: ['react', 'prop-types'],
    plugins: [
      resolve(),
      commonjs(),
      babel(),
      //     {
      //     babelrc: false,
      //     exclude: 'node_modules/**',
      //     presets: [['env', { modules: false }], 'stage-1', 'react'],
      //     plugins: ['external-helpers'],
      //   }
    ],
    output: [
      { file: pkg.main, format: 'cjs', sourcemap: true },
      { file: pkg.module, format: 'es', sourcemap: true },
    ],
  },
];
