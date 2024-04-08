import { replaceFormatMessageLoader } from './loaders/replaceFormatMessage';
import { replaceLocalizeLoader } from './loaders/replaceLocalize';

export interface IOptions {
  /** localize，includes: zh-cn、es、... */
  locale: string;
};


const initialOptions = {
  /** locale name */
  locale: 'zh-cn',
};

// create rules loader
function createLoaderRules(_options = initialOptions) {
  return [
      {
          test: /\.(js|mjs|jsx|ts|tsx)$/,
          enforce: 'pre',
          include: /[\\\/]monaco-editor[\\\/]esm/,
          // use: replaceLocalizeLoader,
          use: [
              {
                  loader: replaceFormatMessageLoader,
              },
              {
                  loader: replaceLocalizeLoader,
              },
          ],
      },
      // {
      //     test: /\.(js|mjs|jsx|ts|tsx)$/,
      //     enforce: 'pre',
      //     include: /[\\\/]monaco-editor[\\\/]esm/,
      //     use: replaceFormatMessageLoader,
      // },
  ];
}

// add webpack rules to webpack config
function addCompilerRules(compiler, rules) {
  const compilerOptions = compiler.options;
  if (!compilerOptions.module) {
      compilerOptions.module = { rules };
  } else {
      const moduleOptions = compilerOptions.module;
      moduleOptions.rules = (moduleOptions.rules || []).concat(rules);
  }
}

export class MonacoEditorNlsPlugin {
  options: IOptions;
  constructor(options: IOptions) {
    this.options = options;
  };
  apply(compiler) {
    const rules = createLoaderRules(this.options);
    addCompilerRules(compiler, rules);
}
};
