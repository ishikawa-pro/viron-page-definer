import { Component } from './components/base_component';
export declare type PageDefine = {
    id: string;
    name: string;
    group?: string;
    components: Component[];
};
export declare enum defaultSection {
    dashboard = "dashboard",
    manage = "manage"
}
export interface IPage extends PageDefine {
    section: string;
}
