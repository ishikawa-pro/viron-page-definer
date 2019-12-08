const {
  createPage,
  defaultSection
} = require('viron-page-definer');

module.exports = createPage(
  'account',
  'アカウント設定',
  require('./components'),
  defaultSection.manage,
  '管理'
);

