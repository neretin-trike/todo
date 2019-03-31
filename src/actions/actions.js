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
   
export { markTaskAsDone, markTaskAsPlanned, changeAddFormValue };