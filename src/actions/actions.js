const setInitalState = function (taskList) {
  return {
    type: "SET_INITIAL_STATE",
    taskList,
  }
};

const markTaskAsDone = function (task, newId) {
    return {
      type: "MARK_TASK_AS_DONE",
      task,
      newId
    }
  };
const markTaskAsPlanned = function (task, newId) {
    return {
      type: "MARK_TASK_AS_PLANNED",
      task,
      newId
    }
  };
   
const changeAddFormValue = function (name, value) {
  return {
    type: "CHANGE_ADDFORM_VALUE",
    name,
    value,
  }
};

const getTaskViewerInfo = function (task) {
  return {
    type: "GET_TASK_VIEWER_INFO",
    task,
  }
};

const addNewTask = function (task, id) {
  return {
    type: "ADD_NEW_TASK",
    task,
    id
  }
};

const editSelectTask = function (task) {
  return {
    type: "EDIT_SELECT_TASK",
    task
  }
}

const mapTaskToAddForm = function (data, addTaskType) {
  return {
    type: "MAP_TASK_TO_ADDFORM",
    data,
    addTaskType
  }
}

const setPageOpen = function (setClassNames) {
  return {
    type: "SET_PAGE_OPEN",
    setClassNames
  }
}

export { setInitalState, 
         markTaskAsDone, 
         markTaskAsPlanned, 
         changeAddFormValue, 
         getTaskViewerInfo,
         addNewTask,
         editSelectTask,
         mapTaskToAddForm,
         setPageOpen };