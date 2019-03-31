import { BASE_URL } from '../constants/config.js';

let api = null;

function getInitializedApi(apiUrl, myMethod = "GET", data = null, myHeaders = null) {
//   if (api) return api; // return initialized api if already initialized.

    let initOptions = {
        method: myMethod,
        mode: "cors",
        headers: myHeaders,
        body:  data,
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

function getMethod(url, headers) {
    return getInitializedApi(url, "GET", null ,headers)
}

function postMethod(url, data, headers) {
    return getInitializedApi(url, "POST",data, headers)
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

function saveTask(formData, token) {
    let headers = {
        "Authorization": `Bearer ${token}`,
        // "Content-Type": 'multipart/form-data'   
    }
    return postMethod(`/api/task/save`, formData, headers);
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
    let headers = {
        "Content-Type": 'application/json'   
    }

    return postMethod(`/api/login_check`, JSON.stringify(formData), headers);
}

export {loginUser, saveTask};