let id = 0;
function createData(taskName, level, duration, isDone) {
  id += 1;
  return { id, taskName, level, duration, isDone};
}

const initialState = {
    tasksPlanned: [
        createData('Сделать проект ToDo', "высокий", "1 д.", false),
        createData('Научиться переопределять стили', "средний", "12 ч.", false),
        createData('Настроить стили', "низкий", "6 ч.", false),
    ],
    tasksDone: [
        createData('Добавить чекбоксы', "средний", "1 ч.", true),
        createData('Добавить таблицу', "высокий", "2 ч.", true),
    ]
}

const reducer = function(state = initialState, action) {
  switch (action.type) {
    case "SET_STATE":
        return action.state;
    case "MARK_TASK_AS_DONE":
        return Object.assign({}, state, {
            taskDone: {},
            taskPlanned: {}
        })
    case "MARK_TASK_AS_PLANNED":
        return Object.assign({}, state, {
            taskDone: {},
            taskPlanned: {}
        })
  }
  return state;
}

export default reducer;