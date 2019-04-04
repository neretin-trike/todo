const setInitalState = function (taskList) {
  return {
    type: "SET_INITIAL_STATE",
    taskList,
  }
};

const markTaskAsDone = function (idTask) {
    return {
      type: "MARK_TASK_AS_DONE",
      idTask,
    }
  };
const markTaskAsPlanned = function (idTask) {
    return {
      type: "MARK_TASK_AS_PLANNED",
      idTask,
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
    task,
  }
}
   
export { setInitalState, 
         markTaskAsDone, 
         markTaskAsPlanned, 
         changeAddFormValue, 
         getTaskViewerInfo,
         addNewTask,
         editSelectTask };