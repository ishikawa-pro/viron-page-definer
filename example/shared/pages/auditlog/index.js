const {
  createPage,
  defaultSection
} = require('viron-page-definer');

module.exports = createPage(
  'auditlog',
  'Viron 監査ログ',
  require('./components'),
  defaultSection.manage,
  '管理'
);

