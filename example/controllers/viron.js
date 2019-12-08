const compact = require('mout/array/compact');
const isEmpty = require('mout/lang/isEmpty');
const some = require('mout/array/some');
const {
  createMenu,
  EndpointColor,
  theme,
} = require('viron-page-definer');

const shared = require('../shared');
const context = shared.context;

/**
 * GET: /viron
 */
const show = (req, res) => {
  const vironlib = context.getVironLib();
  const helperAdminRole = vironlib.adminRole.helper;
  const title = req.swagger.swaggerObject.info.title;
  const pages = shared.pages;
  const result = createMenu(
    title,
    pages,
    'https://example.com/thumbanil.jpg',
    ['viron'],
    theme.midnight,
    EndpointColor.blue,
  );
  if (!req.swagger.operation.security) {
    // /viron自体が非認証の場合はそのまま返す
    return res.json(result);
  }

  // 権限がないcomponentを消してから返す
  const roles = req.auth.roles;
  for (let i in result.pages) {
    const page = result.pages[i];
    for (let j in page.components) {
      const component = page.components[j];
      const method = component.api.method;
      const path = component.api.path;
      if (!helperAdminRole.canAccess(path, method, roles)) {
        // 権限がないcomponentを削除
        page.components[j] = null;
      } else if (component.actions) {
        // actionsはGET,POST,PUT,DELETEすべてに権限がないものは削除
        page.components[j].actions = component.actions.filter(action => {
          return some(Object.keys(req.swagger.swaggerObject.paths[action]), method => {
            return helperAdminRole.canAccess(action, method, roles);
          });
        });
      }
    }
    page.components = compact(page.components);
    if (isEmpty(page.components)) {
      // componentが空になった場合はpage自体を削除
      result.pages[i] = null;
    }
  }
  result.pages = compact(result.pages);

  res.json(result);
};

module.exports = {
  'viron#show': show,
};
