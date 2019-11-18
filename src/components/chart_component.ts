import {IComponent} from './base';

export enum ChartType {
  GraphBar = 'graph-bar',
  GraphScatterplot = 'graph-scatterplot',
  GraphLine = 'graph-line',
  GraphHorizontalBar = 'graph-horizontal-bar',
  GraphStackedBar = 'graph-stacked-bar',
  GraphHorizontalStackedBar = 'graph-horizontal-stacked-bar'
}

export interface ChartComponent extends IComponent {
  style: ChartType
}