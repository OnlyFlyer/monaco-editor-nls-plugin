export function replaceLocalize(content, _map, _meta) {
    const pathRegExp = /monaco-editor[\\\/]esm[\\\/]vs.+\.js$/;
    if (!pathRegExp.test(this.resourcePath)) return content;
    const vsPath = this.resourcePath.split(/monaco-editor[\\\/]esm[\\\/]/).pop();
    if (!vsPath) return content;
    const path = vsPath.replace(/\\/g, '/').replace('.js', '');
    // add vscode-loc path to function localize
    return content.replace(/(\bfunction\s+localize\()|(\blocalize\()/g, function (text) {
        if (/function\s+localize/.test(text)) return text;
        return `localize('${path}', `;
    });
};
