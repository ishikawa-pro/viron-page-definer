const {
  createAPI,
  Method,
  TableComponent
} = require('viron-page-definer');

module.exports = [
  new TableComponent(
    createAPI(Method.Get, '/user'),
    'ユーザー',
    null,
    null,
    null,
    'id',
    ['id', 'name']
  )
]