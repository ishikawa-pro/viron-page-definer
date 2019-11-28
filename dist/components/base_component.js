"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Method;
(function (Method) {
    Method["Get"] = "get";
    Method["Post"] = "post";
    Method["Put"] = "put";
    Method["Delete"] = "delete";
})(Method = exports.Method || (exports.Method = {}));
function apiFactory(method, path) {
    var api = {
        method: method,
        path: path
    };
    return api;
}
exports.apiFactory = apiFactory;
