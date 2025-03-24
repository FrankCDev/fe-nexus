import path from 'node:path';
import { pluginReact } from '@rsbuild/plugin-react';
import { defineConfig } from '@rslib/core';
export default defineConfig({
  source: {
    entry: {
      index: ['./src/**'],
    },
  },
  lib: [
    {
      bundle: false,
      dts: true,
      format: 'esm',
    },
  ],
  output: {
    target: 'web',
    // copy: [
    //   {
    //     from: path.resolve(__dirname, './styles'),
    //     to: path.resolve(__dirname, './dist/styles'),
    //   },
    // ],
  },
  plugins: [pluginReact()],
});
