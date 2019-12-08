const {
  createAPI,
  Method,
  TableComponent,
} = require('viron-page-definer');

module.exports = [
  new TableComponent(
    createAPI(Method.Get, '/auditlog'),
    'Viron 監査ログ',
    null,
    null,
    'role_id',
    ['createdAt', 'request_uri', 'request_method', 'status_code', 'user_id']
  )
]
