import {API} from '../api';

export interface IComponent {
  api: API
  name: string
  auto_refresh_sec?: number
}

export abstract class Component implements IComponent {
  api: API;
  name: string;
  auto_refresh_sec?: number;
  abstract readonly style: string;

  constructor(api: API, name: string, auto_refresh_sec?: number) {
    this.api = api;
    this.name = name;
    this.auto_refresh_sec = auto_refresh_sec;
  }
}