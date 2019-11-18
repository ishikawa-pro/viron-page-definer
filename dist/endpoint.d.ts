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
export interface IEndpoint {
    name: string;
    thumbnail?: string;
    tags?: string[];
    color?: EndpointColor;
}
