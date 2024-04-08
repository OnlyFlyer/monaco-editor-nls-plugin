import typescript from '@rollup/plugin-typescript';
import { MonacoEditorNlsPlugin }  from './src';

export default {
  input: 'src/index.ts', // 入口文件
  output: {
    file: 'lib/bundle.js',
    format: 'cjs' // CommonJS 格式
  },
  plugins: [
    typescript(), // 使用 TypeScript 插件处理 TypeScript 文件
    MonacoEditorNlsPlugin // 添加自定义插件
  ]
};
