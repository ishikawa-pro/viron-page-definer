import {IComponent} from './base';

export interface stringComponent extends IComponent {
  style: 'string'
  description?: string
  required?: boolean | false
  maxLength?: number
  minLength?: number
  patter?: string
}