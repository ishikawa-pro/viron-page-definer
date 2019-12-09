import { API } from "../api";
export declare abstract class Component {
    api: API;
    name: string;
    auto_refresh_sec?: number;
    abstract readonly style: string;
    constructor(api: API, name: string, auto_refresh_sec?: number);
}
