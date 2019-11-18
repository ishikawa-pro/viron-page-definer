import {IComponent} from './base_component';

export interface stringComponent extends IComponent {
  style: 'string'
  description?: string
  required?: boolean | false
  maxLength?: number
  minLength?: number
  patter?: string
}