import {Component} from './base_component';
import {API} from '../api';

export class TableComponent extends Component {
  style: string = 'table';
  actions?: string[];
  pagination?: boolean;
  primary?: string;
  table_labels?: string[];
  
  constructor(
    api: API,
    name: string,
    auto_refresh_sec?: number,
    actions?: string[],
    pagination?: boolean,
    primary?: string,
    table_labels?: string[],
  ) {
    super(api, name, auto_refresh_sec);
    this.actions = actions;
    this.pagination = pagination;
    this.primary = primary;
    this.table_labels = table_labels;
  }
}
