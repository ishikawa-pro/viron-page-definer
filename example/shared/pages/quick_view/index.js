const {
  createPage,
  defaultSection
} = require('viron-page-definer');

module.exports = createPage(
  'quickview',
  'クイックビュー',
  require('./components'),
  defaultSection.dashboard
);