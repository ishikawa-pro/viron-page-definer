import { IComponent } from './base_component';
export interface NumberComponent extends IComponent {
    style: 'number';
    unit?: number;
}
