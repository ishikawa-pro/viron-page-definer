import {IComponent} from './base_component';

export interface StringComponent extends IComponent {
  style: 'string'
  description?: string
  required?: boolean | false
  maxLength?: number
  minLength?: number
  patter?: string
}