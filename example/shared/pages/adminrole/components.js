const {
  createAPI,
  Method,
  TableComponent,
} = require('viron-page-definer');

module.exports = [
  new TableComponent(
    createAPI(Method.Get, '/adminrole'),
    'Viron ユーザ権限',
    null,
    null,
    null,
    'role_id',
    ['role_id']
  )
]