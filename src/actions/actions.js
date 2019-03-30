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
   
export { markTaskAsDone, markTaskAsPlanned };