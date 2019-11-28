import {API, Method} from './components/base_component';

module.exports = (method: Method, path: string) => {
  const api:API = {
    method: method,
    path: path
  };
  return api;
};