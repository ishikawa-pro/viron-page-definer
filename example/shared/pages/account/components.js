const {
  createAPI,
  Method,
  TableComponent,
} = require('viron-page-definer');

module.exports = [
  new TableComponent(
    createAPI(Method.Get, '/account'),
    'アカウント設定',
    null,
    null,
    null,
    'id',
    ['id', 'email', 'role_id']
  )
]
