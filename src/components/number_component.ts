import {Component} from './base_component';
import {API} from '../api';

export class NumberComponent extends Component {
  style: string = 'number';
  unit?: string;
  constructor(api: API, name: string, auto_refresh_sec?: number, unit?:string) {
    super(api, name, auto_refresh_sec);
    this.unit = unit;
  }
}