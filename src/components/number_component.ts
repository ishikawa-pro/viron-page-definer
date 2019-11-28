import {IComponent, API} from './base_component';

export class NumberComponent implements IComponent {
  api: API;
  name: string;
  auto_refresh_sec?: number;
  readonly style = 'number'
  unit?: number
  constructor(api: API, name: string) {
    this.api = api;
    this.name = name;
  }
}
