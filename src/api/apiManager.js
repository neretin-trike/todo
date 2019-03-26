import { BASE_URL } from '../constants/config.js';

let api = null;

function getInitializedApi(url, myMethod = "GET", myHeaders = {}, data = {}) {
  if (api) return api; // return initialized api if already initialized.

  let initOptions = {
      mode:'cors',
      cache: 'default',
      method: myMethod,
      header: myHeaders,
      body: data,
  }
  return ( api = fetch(BASE_URL+url, initOptions) );
}

function getMethod(url, headers) {
    return getInitializedApi(url, "GET", headers)
}

function postMethod(url, headers, data) {
    return getInitializedApi(url, "POST", headers, data)
}

