const {
  createPage,
  defaultSection
} = require('viron-page-definer');

module.exports = createPage(
  'adminuser',
  'Viron 管理ユーザ',
  require('./components'),
  defaultSection.manage,
  '管理'
);
