"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var theme_1 = require("./theme");
exports.theme = theme_1.theme;
var VironDefinition = /** @class */ (function () {
    function VironDefinition(endpoint, pages, sections, themeColor) {
        if (sections === void 0) { sections = []; }
        if (themeColor === void 0) { themeColor = theme_1.theme.standard; }
        this.name = endpoint.name;
        this.pages = pages;
        this.sections = sections;
        this.theme = themeColor;
        this.thumbnail = endpoint.thumbnail;
        this.tags = endpoint.tags;
        this.color = endpoint.color;
    }
    return VironDefinition;
}());
exports.VironDefinition = VironDefinition;
