import { IPage } from './page';
export declare enum EndpointColor {
    purple = "purple",
    blue = "blue",
    green = "green",
    yellow = "yellow",
    red = "red",
    gray = "gray",
    black = "black",
    white = "white"
}
interface IMenu {
    name: string;
    thumbnail?: string;
    tags?: string[];
    color?: EndpointColor;
    pages: IPage[];
    sections?: string;
}
export declare function createMenu(name: string, pages: IPage[], thumbnail?: string, tags?: string[], color?: EndpointColor, sections?: string): IMenu;
export {};
