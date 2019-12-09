import { Component } from "./base_component";
import { API } from "../api";

export enum SearchQueryType {
  string = "string",
  number = "number",
  integer = "integer",
  boolean = "boolean",
  array = "array",
  object = "object",
}

interface IQuery {
  key: string;
  type: SearchQueryType;
}

export class TableComponent extends Component {
  style: string = "table";
  actions?: string[];
  query?: IQuery[];
  pagination?: boolean;
  primary?: string;
  table_labels?: string[];

  constructor(
    api: API,
    name: string,
    auto_refresh_sec?: number,
    actions?: string[],
    query?: IQuery[],
    pagination?: boolean,
    primary?: string,
    table_labels?: string[]
  ) {
    super(api, name, auto_refresh_sec);
    this.actions = actions;
    this.query = query;
    this.pagination = pagination;
    this.primary = primary;
    this.table_labels = table_labels;
  }
}
