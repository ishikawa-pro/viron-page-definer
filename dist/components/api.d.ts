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
export declare function createAPI(method: Method, path: string): API;
