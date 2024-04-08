# monaco-editor-nls-plugin

## Install

```bash
# yarn
$ yarn add monaco-editor-nls-plugin -D

# npm
$ npm install monaco-editor-nls-plugin -D

# pnpm
$ pnpm i monaco-editor-nls-plugin -D

```

## Usage

```js
const { MonacoEditorNlsPlugin } = require('monaco-editor-nls-plugin');

module.exports = function (webpackEnv) {
  return {
    module: { ... },
    entry: ...,
    output: { ... },
    plugin: [
      ...,
      new MonacoEditorNlsPlugin({ locale: 'zh-cn' }),
    ],

  };
}


```


## Options

You can pass a hash of configuration options to `monaco-editor-nls-plugin`.
Allowed values are as follows:

|           Name           |                         Type                         |                        Default                        | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| :----------------------: | :--------------------------------------------------: | :---------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|**`locale`**|`{String`|`zh-cn`| Format locale
|
