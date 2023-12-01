module.exports['localize'] =
    module.exports['setLocaleData'] =
    module.exports['loadMessageBundle'] =
    module.exports['config'] =
        null;

const zhCN = require('monaco-editor-nls/locale/zh-hans.json');
// const zh_CN = require('vscode-loc/i18n/vscode-language-pack-zh-hans/translations/main.i18n.json');
function _format(message, args) {
    let result;
    if (args.length === 0) {
        result = message;
    } else {
        result = String(message).replace(/\{(\d+)\}/g, function (match, rest) {
            const index = rest[0];
            return typeof args[index] !== 'undefined' ? args[index] : match;
        });
    }
    return result;
}

// let CURRENT_LOCALE_DATA = zh_CN;

function localize(path, data, defaultMessage) {
    const key = typeof data === 'object' ? data.key : data;
    const _data = zhCN || {};
    let message = (_data[path] || {})[key];
    if (!message) {
        message = defaultMessage;
    }
    const args = [];
    for (let _i = 3; _i < arguments.length; _i++) {
        args[_i - 3] = arguments[_i];
    }
    return _format(message, args);
}

module.exports['localize'] = localize;

// function setLocaleData(data) {
//     CURRENT_LOCALE_DATA = data;
// }
// module.exports['setLocaleData'] = setLocaleData;

function loadMessageBundle(_file) {
    return localize;
}
module.exports['loadMessageBundle'] = loadMessageBundle;

function config(_opt) {
    return loadMessageBundle;
}

module.exports['config'] = config;

function getConfiguredDefaultLocale() {
    return undefined;
}

module.exports['getConfiguredDefaultLocale'] = getConfiguredDefaultLocale;
