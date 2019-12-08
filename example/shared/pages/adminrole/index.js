const {
  createPage,
  defaultSection
} = require('viron-page-definer');

module.exports = createPage(
  'adminrole',
  'Viron ユーザ権限',
  require('./components'),
  defaultSection.manage,
  '管理'
);
