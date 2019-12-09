const {
  createAPI,
  Method,
  TableComponent,
  SearchQueryType,
} = require('viron-page-definer');

module.exports = [
  new TableComponent(
    createAPI(Method.Get, '/auditlog'),
    'Viron 監査ログ',
    null,
    null,
    [
      {key: 'createdAt', type: SearchQueryType.string},
      {key: 'request_uri', type: SearchQueryType.string},
      {key: 'request_method', type: SearchQueryType.string},
      {key: 'source_ip', type: SearchQueryType.string},
      {key: 'status_code', type: SearchQueryType.integer},
      {key: 'user_id', type: SearchQueryType.string},
    ],
    'role_id',
    ['createdAt', 'request_uri', 'request_method', 'status_code', 'user_id']
  )
]
