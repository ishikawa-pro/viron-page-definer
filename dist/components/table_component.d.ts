import { Component } from "./base_component";
import { API } from "../api";
export declare class TableComponent extends Component {
    style: string;
    actions?: string[];
    pagination?: boolean;
    primary?: string;
    table_labels?: string[];
    constructor(api: API, name: string, auto_refresh_sec?: number, actions?: string[], pagination?: boolean, primary?: string, table_labels?: string[]);
}
