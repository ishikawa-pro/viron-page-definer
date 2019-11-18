import {IComponent} from './base_component';

export interface numberComponent extends IComponent {
  style: 'number'
  unit?: number
}