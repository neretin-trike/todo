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
        return state;
    case "MARK_TASK_AS_DONE":
        let items = [...state.tasksPlanned];
        let itemsArr = items.map( e => e.id);
        let indexFound = itemsArr.indexOf(+action.taskDone);
        items.splice(indexFound, 1);

        return {...state, 
            tasksPlanned: items,
        }
    case "MARK_TASK_AS_PLANNED":
        return Object.assign({}, state, {
            tasksPlanned: {},
            tasksDone: {}
        })
  }
  return state;
}

export default reducer;