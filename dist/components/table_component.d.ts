import { Component } from "./base_component";
import { API } from "../api";
export declare enum SearchQueryType {
    string = "string",
    number = "number",
    integer = "integer",
    boolean = "boolean",
    array = "array",
    object = "object"
}
interface IQuery {
    key: string;
    type: SearchQueryType;
}
export declare class TableComponent extends Component {
    style: string;
    actions?: string[];
    query?: IQuery[];
    pagination?: boolean;
    primary?: string;
    table_labels?: string[];
    constructor(api: API, name: string, auto_refresh_sec?: number, actions?: string[], query?: IQuery[], pagination?: boolean, primary?: string, table_labels?: string[]);
}
export {};
