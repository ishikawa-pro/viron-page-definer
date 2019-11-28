"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumberComponent = /** @class */ (function () {
    function NumberComponent(api, name, auto_refresh_sec) {
        this.style = 'number';
        this.api = api;
        this.name = name;
        this.auto_refresh_sec = auto_refresh_sec;
    }
    return NumberComponent;
}());
exports.NumberComponent = NumberComponent;
