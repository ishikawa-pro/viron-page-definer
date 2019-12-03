import { Component } from './components/base_component';

 export interface IPage {
  id: string  // ページのID。全ページでユニークになっている必要があります
  name: string // ページ名
  group?: string  // 中項目。空の場合はsection直下にcomponentsを配置
  components: Component[]
  section: string // 大項目。"dashboard" or "manage"
}
export enum defaultSection {
  dashboard = 'dashboard',
  manage = 'manage'
}

export function createPage(
  id: string,
  name: string,
  components: Component[],
  section: string,
  group?: string
): IPage {
  return {
    id: id,
    name: name,
    group: group,
    components: components,
    section: section
  };
}