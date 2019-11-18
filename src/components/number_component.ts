import {IComponent} from './base';

export interface numberComponent extends IComponent {
  style: 'number'
  unit?: number
}