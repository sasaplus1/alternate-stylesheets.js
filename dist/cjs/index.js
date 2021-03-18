"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setAlternateStylesheet = exports.getAlternateStylesheets = void 0;
function getAlternateStylesheets() {
    const links = document.getElementsByTagName('link');
    const alternateStylesheets = [];
    for (let i = 0, len = links.length; i < len; ++i) {
        const link = links[i];
        if (/stylesheet/i.test(link.rel) && link.title) {
            alternateStylesheets.push(link);
        }
    }
    return alternateStylesheets;
}
exports.getAlternateStylesheets = getAlternateStylesheets;
function setAlternateStylesheet(title) {
    const links = getAlternateStylesheets();
    const len = links.length;
    let targetStyleSheet = null;
    for (let i = 0, stylesheet; i < len; ++i) {
        stylesheet = links[i];
        if (stylesheet.title === title) {
            targetStyleSheet = stylesheet;
        }
    }
    if (targetStyleSheet === null) {
        return false;
    }
    for (let i = 0, stylesheet; i < len; ++i) {
        stylesheet = links[i];
        stylesheet.disabled = stylesheet.title !== title;
        // HACK: for Google Chrome and Safari
        stylesheet.disabled = !stylesheet.disabled;
        stylesheet.disabled = !stylesheet.disabled;
    }
    return true;
}
exports.setAlternateStylesheet = setAlternateStylesheet;
//# sourceMappingURL=index.js.map