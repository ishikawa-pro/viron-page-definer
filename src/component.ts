export enum Method {
  Get = "get",
  Post = "post",
  Put = "put",
  Delete = "delete",
}

interface API {
  method: Method
  path: string
}

export enum Style {
  Number = 'number',
}

export interface IComponent {
  api: API
  name: string
  style: Style
  auto_refresh_sec?: number
}