export declare enum Method {
    Get = "get",
    Post = "post",
    Put = "put",
    Delete = "delete"
}
export interface API {
    method: Method;
    path: string;
}
export declare function apiFactory(method: Method, path: string): API;
export interface IComponent {
    api: API;
    name: string;
    auto_refresh_sec?: number;
}
