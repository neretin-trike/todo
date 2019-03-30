import { BASE_URL } from '../constants/config.js';

let api = null;

function getInitializedApi(apiUrl, myMethod = "GET", data = null) {
  if (api) return api; // return initialized api if already initialized.

//   let myHeaders = new Headers();

    let initOptions = {
        method: myMethod,
        mode: "cors",
        headers: {
            "Content-Type":'application/json'
        },
        body:  JSON.stringify(data),
    }

    api = fetch(BASE_URL+apiUrl, initOptions);
    return api.then( res => {
        if (res.ok === false) {
            throw new Error(res.status + " : " + res.statusText);
        } else {
            return res.json();
        }
    });
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

function registerUser(formData) {
    return getMethod(`/api/register/?id=99&username=twink&email=ad@m.ru&admin=true`);
}

function loginUser(formData) {
    return postMethod(`/api/login_check`,formData);
}

export {loginUser};