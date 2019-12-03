"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Method;
(function (Method) {
    Method["Get"] = "get";
    Method["Post"] = "post";
    Method["Put"] = "put";
    Method["Delete"] = "delete";
})(Method = exports.Method || (exports.Method = {}));
function createAPI(method, path) {
    return {
        method: method,
        path: path
    };
}
exports.createAPI = createAPI;
