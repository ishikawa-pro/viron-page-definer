## viron-page-definer
[![NPM](https://nodei.co/npm/viron-page-definer.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/viron-page-definer)  
viron-page-definer makes it easy to define [viron](https://github.com/cam-inc/viron) pages and menus using type completion.

> ### what is viron
> Automated Design-based Management Console.
> All you do is just create a API server and a OAS2.0 json file. Then viron admin tool is ready to use. You don't need to write frontend code!
> show [detail.](https://github.com/cam-inc/viron)

## install
It is registered in the npm repository - . Please install from the npm command.
```
npm install --save viron-page-definer
```

## usage
this is sample for request handler of express.js
``` javascript
const {
  createMenu,
  EndpointColor,
  theme,
  createPage,
  createAPI,
  Method,
  defaultSection,
  TableComponent,
} = require('viron-page-definer');

/**
 * GET: /viron
 */
const show = (req, res) => {
  const components = [
    new TableComponent(
      createAPI(Method.Get, '/user'),
      'user',
      10,
      null,
      [{key: 'createdAt', type: SearchQueryType.string}],
      true,
      'user_id',
      ['user_id', 'name']
    )
  ];
  const page = createPage(
    'user',
    'user',
    components,
    defaultSection.dashboard,
    'Users'
  );
  const result = createMenu(
    'viron-page-definer sample',
    [page],
    'https://example.com/thumbanil.jpg',
    ['viron'],
    theme.standard,
    EndpointColor.blue,
  );
  res.json(result);
};
```

return values.
```json
{
  "name": "viron-page-definer sample",
  "pages": [
    {
      "id": "user",
      "name": "user",
      "group": "Users",
      "components": [
        {
          "api": {
            "method": "get",
            "path": "/user"
          },
          "name": "user",
          "auto_refresh_sec": 10,
          "style": "table",
          "actions": null,
          "query": [
            {"key": "createdAt", "type": "string"}
           ],
          "pagination": true,
          "primary": "user_id",
          "table_labels": [
            "user_id",
            "name"
          ]
        }
      ],
      "section": "dashboard"
    }
  ],
  "thumbnail": "https://example.com/thumbanil.jpg",
  "theme": "standard",
  "color": "blue",
  "tags": [
    "viron"
  ]
}
```

## LICENSE
MIT LICENSE [LICENSE](https://github.com/ishikawa-pro/viron-page-definer/blob/master/LICENSE)
