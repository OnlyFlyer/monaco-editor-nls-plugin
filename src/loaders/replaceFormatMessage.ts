const fs = require('fs');
// const path = require('path');

const nls = require.resolve('../nls/index.js');

export function replaceFormatMessageLoader(content, _map, _meta) {
    const regExp = /monaco-editor\/esm\/vs\/nls\.js/;

    // const regExp = /\/(vscode\-)?nls\.js/;
    if (!regExp.test(this.resourcePath)) return content;
    const _content = fs.readFileSync(nls, { encoding: 'utf8' });
    return _content;

    // return content;
    // const pathRegExp = /monaco-editor[\\\/]esm[\\\/]vs.+\.js$/;
    // if(!pathRegExp.test(this.resourcePath)) return content;
    // const vsPath = this.resourcePath.split(/monaco-editor[\\\/]esm[\\\/]/).pop();
    // if (!vsPath) return content;

    // let formatContent = content;
    // const formatRegExp = /\breturn\s+format\(message\, args\)/g;
    // if (formatRegExp.test(formatContent)) {
    //     // replace format function，and use nls locales zh-cn
    //     formatContent = formatContent.replace(/\breturn\s+format\(message\, args\)/g, `
    //     var obj = zh_CN[key] || {};
    //     console.log(key, '--key');
    //     console.log(obj, '--obj');
    //     console.log(message, '--message');
    //     console.log(args, '--args');
    //     return format('-', [])
    //         `);
    //     formatContent = `
    //     import zh_CN from 'monaco-editor-nls/locale/zh-hans';
    //     ${formatContent}
    //     `;
    // }
    // return formatContent;
    //     const hasFormatFunction = formatContent.includes('return format(message, args)');
    //     if (!hasFormatFunction) return formatContent;
    //     saveContent(formatContent);
    //     // replace format function，and use nls locales zh-cn
    //     formatContent = formatContent.replace(/\breturn\s+format\(message\, args\)/g, `
    // var obj = zh_CN[key] || {};
    // return format(obj[message] || '-', [])
    //     `);
    //     formatContent = `
    // import zh_CN from 'monaco-editor-nls/locale/zh-hans';
    // ${formatContent}
    // `;
    //     return formatContent;
};
