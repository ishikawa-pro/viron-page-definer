import { IComponent } from './base_component';
export interface TableComponent extends IComponent {
    style: 'table';
    actions?: string[];
    pagination?: boolean;
    primary?: string;
    table_labels?: string[];
}
