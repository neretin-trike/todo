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

function getFilterPlannedItems(tasksPlanned, id) {
    let doneItem = {};
    let plannedItems = tasksPlanned;
    let filterPlannedItems = plannedItems.filter( (item) => {
        if (item.id === id) {
            doneItem = item;
        } 
        return item.id !== id;
    } )

    return {filterPlannedItems, doneItem};
}

function getNewDoneItems(taskDone, doneItem) {
    let doneItems = taskDone;
    doneItem.isDone = true;
    doneItems.push(doneItem);

    return doneItems;
}

const reducer = function(state = initialState, action) {
  switch (action.type) {
    case "SET_STATE":
        return state;
    case "MARK_TASK_AS_DONE":

        let {filterPlannedItems, doneItem} = getFilterPlannedItems([...state.tasksPlanned], +action.taskDone)
        
        let newDoneItems = getNewDoneItems( [...state.tasksDone], doneItem)

        return {...state, 
            tasksPlanned: filterPlannedItems,
            tasksDone: newDoneItems 
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