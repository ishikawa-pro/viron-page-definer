const {
  createAPI,
  Method,
  NumberComponent,
  ChartComponent,
  ChartType
} = require('viron-page-definer');

module.exports = [
  new NumberComponent(createAPI(Method.Get, '/stats/dau'), 'DAU', 5),
  new NumberComponent(createAPI(Method.Get, '/stats/mau'), 'MAU', 30),
  new ChartComponent(createAPI(Method.Get, '/stats/area'), 'Chart(area)', ChartType.GraphStackedArea),
]