import axios from 'axios';

const getToken = function () {
  if (process.server) {
    // Server Side
    // No Token
    return;
  }

  if (window.$nuxt) {
    return window.$nuxt.$auth.getToken('local');
  }
};

export function request(method, url, data, auth = false) {
  const headers = {};

  if (auth) {
    hearders['auth-token'] = getToken();
  }

  try {
    const response = axios(method, url, data, headers);
    return response;
  } catch (e) {
    return e;
  }
}

export async function apiGet(url, data = {}, auth = false) {
  return await request('get', url, data, auth);
}

export async function apiPost(url, data = {}, auth = false) {
  return await request('post', url, data, auth);
}

export async function apiPatch(url, data = {}, auth = false) {
  return await request('patch', url, data, auth);
}

export async function apiDelete(url, data = {}, auth = false) {
  return await request('delete', url, data, auth);
}
