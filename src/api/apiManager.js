import { BASE_URL } from '../constants/config.js';

let api = null;

function getInitializedApi(apiUrl, myMethod = "GET", data = null, myHeaders = null) {
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
            console.log(res);
            return res.json();
        }
    });
}

function getMethod(url, headers) {
    return getInitializedApi(url, "GET", null, headers)
}

function postMethod(url, data, headers) {
    return getInitializedApi(url, "POST", data, headers)
}

function deleteMethod(url, headers) {
    return getInitializedApi(url, "DELETE", null, headers)
}





function getTaskList(token) {
    let headers = {
        "Authorization": `Bearer ${token}`,
    }
    return getMethod(`/api/task/list/`, headers);
}

function getTask(id = 1, token) {
    let headers = {
        "Authorization": `Bearer ${token}`,
    }
    return getMethod(`/api/task/${id}`, headers);
}

function saveTask(formData, token) {
    let headers = {
        "Authorization": `Bearer ${token}`,
    }
    return postMethod(`/api/task/save`, formData, headers);
}

function editTask(id, formData, token) {
    let headers = {
        "Authorization": `Bearer ${token}`,
    }
    return postMethod(`/api/task/save/${id}`, formData, headers);
}

function deleteTask(id, token) {
    let headers = {
        "Authorization": `Bearer ${token}`,
    }
    return deleteMethod(`/api/task/${id}`, headers); 
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

export { loginUser, 
         saveTask, 
         getTaskList, 
         getTask,
         editTask,
         deleteTask };