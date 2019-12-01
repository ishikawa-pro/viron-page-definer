import { Component } from './base_component';
import { API } from '../api';
export declare class NumberComponent extends Component {
    style: string;
    unit?: string;
    constructor(api: API, name: string, auto_refresh_sec?: number, unit?: string);
}
