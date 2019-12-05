import assert from 'assert';
import { createMenu, EndpointColor } from '../src/menu';
import { Method } from '../src/api';
import { Component ,NumberComponent } from '../src/components';
import { theme } from '../src/theme';
import { ISection } from '../src/section';

describe('menu', () => {
  it('createMenu', () => {
    const components: Component[] = [
      new NumberComponent(
        {
          method: Method.Get,
          path: '/test'
        },
        'test',
        10,
        'test-unit'
      ),
    ];
    const menu = createMenu(
      'name',
      [
        {
          id: 'id',
          name: 'test',
          group: 'test-group',
          components: components,
          section: 'test-section'
        }
      ],
      'https://example/thumbnail.jpg',
      ['tag1', 'tag2'],
      theme.standard,
      EndpointColor.black,
      [
        {
          id: 'manage',
          label: '管理'
        }
      ]
    );
    const numberComponent: NumberComponent = menu.pages[0].components[0];
    const page = menu.pages[0];
    assert.strictEqual(menu.name, 'name');
    assert.strictEqual(page.id, 'id');
    assert.strictEqual(page.name, 'test');
    assert.strictEqual(page.group, 'test-group');
    assert.strictEqual(page.section, 'test-section');
    assert.strictEqual(numberComponent.api.method, 'get');
    assert.strictEqual(numberComponent.api.path, '/test');
    assert.strictEqual(numberComponent.name, 'test');
    assert.strictEqual(numberComponent.auto_refresh_sec, 10);
    assert.strictEqual(numberComponent.unit, 'test-unit');
    assert.strictEqual(menu.thumbnail, 'https://example/thumbnail.jpg');
    assert.strictEqual(menu.tags?.[0], 'tag1');
    assert.strictEqual(menu.tags?.[1], 'tag2');
    assert.strictEqual(menu.theme, 'standard');
    assert.strictEqual(menu.color, 'black');
    assert.strictEqual(menu.sections?.[0].id, 'manage');
    assert.strictEqual(menu.sections?.[0].label, '管理');
  });
});