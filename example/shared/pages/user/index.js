const {
  createPage,
  defaultSection
} = require('viron-page-definer');

module.exports = createPage(
  'user',
  'ユーザー',
  require('./components'),
  defaultSection.manage,
  'ユーザー'
);
