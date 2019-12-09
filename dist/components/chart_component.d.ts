import { Component } from "./base_component";
import { API } from "../api";
export declare enum ChartType {
    GraphBar = "graph-bar",
    GraphScatterplot = "graph-scatterplot",
    GraphLine = "graph-line",
    GraphHorizontalBar = "graph-horizontal-bar",
    GraphStackedBar = "graph-stacked-bar",
    GraphHorizontalStackedBar = "graph-horizontal-stacked-bar",
    GraphStackedArea = "graph-stacked-area"
}
export declare class ChartComponent extends Component {
    style: ChartType;
    constructor(api: API, name: string, style: ChartType, auto_refresh_sec?: number);
}
