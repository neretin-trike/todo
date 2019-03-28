const markTaskAsDone = function (taskDone, taskPlanned) {
    return {
      type: "MARK_TASK_AS_DONE",
      taskDone,
      taskPlanned
    }
  };
const markTaskAsPlanned = function (taskDone, taskPlanned) {
    return {
      type: "MARK_TASK_AS_PLANNED",
      taskDone,
      taskPlanned
    }
  };
   
export { markTaskAsDone, markTaskAsPlanned };