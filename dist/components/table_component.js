"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var base_component_1 = require("./base_component");
var TableComponent = /** @class */ (function (_super) {
    __extends(TableComponent, _super);
    function TableComponent(api, name, auto_refresh_sec, actions, pagination, primary, table_labels) {
        var _this = _super.call(this, api, name, auto_refresh_sec) || this;
        _this.style = 'table';
        _this.actions = actions;
        _this.pagination = pagination;
        _this.primary = primary;
        _this.table_labels = table_labels;
        return _this;
    }
    return TableComponent;
}(base_component_1.Component));
exports.TableComponent = TableComponent;
