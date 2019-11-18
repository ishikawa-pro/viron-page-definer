import {IComponent } from './components/base_component';

export type PageDefine = {
  id: string  // ページのID。全ページでユニークになっている必要があります
  name: string // ページ名
  group?: string  // 中項目。空の場合はsection直下にcomponentsを配置
  components: IComponent[]
}
export enum defaultSection {
  dashboard = 'dashboard',
  manage = 'manage'
}

export interface IPage extends PageDefine {
  section: string // 大項目。"dashboard" or "manage"
}
