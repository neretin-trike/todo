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

function getFilterItems(tasksPlanned, id) {
    let changeItem = {};
    let plannedItems = tasksPlanned;
    let filterItems = plannedItems.filter( (item) => {
        if (item.id === id) {
            changeItem = item;
        } 
        return item.id !== id;
    } )

    return {filterItems, changeItem};
}

function getNewItems(taskDone, doneItem, isDone) {
    let doneItems = taskDone;
    doneItem.isDone = isDone;
    doneItems.push(doneItem);

    return doneItems;
}

const reducer = function(state = initialState, action) {
  switch (action.type) {
    case "SET_STATE":
        return state;
    case "MARK_TASK_AS_DONE": {
        let {filterItems: plannedItems, changeItem} = getFilterItems([...state.tasksPlanned], +action.idTask)
        let newDoneItems = getNewItems( [...state.tasksDone], changeItem, true)

        return {...state, 
            tasksPlanned: plannedItems,
            tasksDone: newDoneItems 
        }
    }
    case "MARK_TASK_AS_PLANNED": {
        let {filterItems: doneItems, changeItem} = getFilterItems([...state.tasksDone], +action.idTask)
        let newPlannedItems = getNewItems( [...state.tasksPlanned], changeItem, false)

        return Object.assign({}, state, {
            tasksPlanned: newPlannedItems,
            tasksDone: doneItems
        })
    }
  }
  return state;
}

export default reducer;