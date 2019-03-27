let markTaskAsDone = function (taskDone, taskPlanned) {
    return {
      type: "MARK_TASK_AS_DONE",
      taskDone,
      taskPlanned
    }
  };
let markTaskAsPlanned = function (taskDone, taskPlanned) {
    return {
      type: "MARK_TASK_AS_PLANNED",
      taskDone,
      taskPlanned
    }
  };
   
export {markTaskAsDone, markTaskAsPlanned};