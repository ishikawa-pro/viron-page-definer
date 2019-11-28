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

export function apiFactory(method: Method, path: string) {
  const api:API = {
    method: method,
    path: path
  };
  return api;
}

export interface IComponent {
  api: API
  name: string
  auto_refresh_sec?: number
}