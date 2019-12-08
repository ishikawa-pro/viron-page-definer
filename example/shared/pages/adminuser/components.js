const {
  createAPI,
  Method,
  TableComponent,
} = require('viron-page-definer');

module.exports = [
  new TableComponent(
    createAPI(Method.Get, '/adminuser'),
    'Viron 管理ユーザ',
    null,
    null,
    null,
    'id',
    ['id', 'email', 'role_id']
  )
]
