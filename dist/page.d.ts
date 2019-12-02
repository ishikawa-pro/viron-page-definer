import { Component } from './components/base_component';
interface IPage {
    id: string;
    name: string;
    group?: string;
    components: Component[];
    section: string;
}
export declare enum defaultSection {
    dashboard = "dashboard",
    manage = "manage"
}
export declare function createPage(id: string, name: string, components: Component[], section: string, group?: string): IPage;
export {};
