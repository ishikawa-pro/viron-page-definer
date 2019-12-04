import assert from 'assert';
import * as api from '../../src/api';

describe('api#createAPI', () => {
  context('GET method', () => {
    it('return API Object', () => {
      const result = api.createAPI(api.Method.Get, '/test');
      assert.strictEqual('get', result.method);
      assert.strictEqual('/test', result.path);
    });
  });
  context('POST method', () => {
    it('return API Object', () => {
      const result = api.createAPI(api.Method.Post, '/test');
      assert.strictEqual('post', result.method);
      assert.strictEqual('/test', result.path);
    });
  });
  context('PUT method', () => {
    it('return API Object', () => {
      const result = api.createAPI(api.Method.Put, '/test');
      assert.strictEqual('put', result.method);
      assert.strictEqual('/test', result.path);
    });
  });
  context('DELETE method', () => {
    it('return API Object', () => {
      const result = api.createAPI(api.Method.Delete, '/test');
      assert.strictEqual('delete', result.method);
      assert.strictEqual('/test', result.path);
    });
  })
});