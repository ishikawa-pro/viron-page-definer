export enum Method {
  Get = "get",
  Post = "post",
  Put = "put",
  Delete = "delete",
}

export interface API {
  method: Method
  path: string
}

export function createAPI(method: Method, path: string): API {
  return {
    method: method,
    path: path
  };
}
