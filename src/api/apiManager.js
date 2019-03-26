import { BASE_URL } from '../constants/config.js';

let api = null;

function getInitializedApi(url, myMethod = "GET", data = {}) {
  if (api) return api; // return initialized api if already initialized.

  let myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${store.state.user.token}`);

  let initOptions = {
      mode:'cors',
      cache: 'default',
      method: myMethod,
      header: myHeaders,
      body: data,
  }

  if (initOptions.method === "POST") {
      myHeaders.append("Content-Type",'multipart/form-data')
  }

  return ( api = fetch(BASE_URL+url, initOptions) );
}

function getMethod(url) {
    return getInitializedApi(url, "GET")
}

function postMethod(url, data) {
    return getInitializedApi(url, "POST",data)
}

function deleteMethod(url) {
    return getInitializedApi(url, "DELETE")
}





function getTaskList(page = 1) {
    return getMethod(`/api/task/list/${page}`);
}

function getTask(id = 1) {
    return getMethod(`/api/task/${id}`);
}

function saveTask(formData) {
    return postMethod(`/api/task/save`, formData);
}

function editTask(id, formData) {
    return postMethod(`/api/task/save/${id}`, formData);
}

function deleteTask(id) {
 return deleteMethod(`/api/task/${id}`); 
}