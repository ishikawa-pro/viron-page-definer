import assert from 'assert';
import { Method } from '../src/api';
import { ChartType, ChartComponent } from '../src/components';

describe('chart_component', () => {
  it('create ChartComponent class', () => {
    const chartComponent = new ChartComponent(
      {method: Method.Get, path: '/test'},
      'test',
      ChartType.GraphBar,
      10
    );
    assert.strictEqual(chartComponent.api.method, 'get');
    assert.strictEqual(chartComponent.api.path, '/test');
    assert.strictEqual(chartComponent.name, 'test');
    assert.strictEqual(chartComponent.style, 'graph-bar');
    assert.strictEqual(chartComponent.auto_refresh_sec, 10);
  });
});
