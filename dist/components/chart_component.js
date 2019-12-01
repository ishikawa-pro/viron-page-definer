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
var ChartType;
(function (ChartType) {
    ChartType["GraphBar"] = "graph-bar";
    ChartType["GraphScatterplot"] = "graph-scatterplot";
    ChartType["GraphLine"] = "graph-line";
    ChartType["GraphHorizontalBar"] = "graph-horizontal-bar";
    ChartType["GraphStackedBar"] = "graph-stacked-bar";
    ChartType["GraphHorizontalStackedBar"] = "graph-horizontal-stacked-bar";
})(ChartType = exports.ChartType || (exports.ChartType = {}));
var ChartComponent = /** @class */ (function (_super) {
    __extends(ChartComponent, _super);
    function ChartComponent(api, name, style, auto_refresh_sec) {
        var _this = _super.call(this, api, name, auto_refresh_sec) || this;
        _this.style = style;
        return _this;
    }
    return ChartComponent;
}(base_component_1.Component));
exports.ChartComponent = ChartComponent;
