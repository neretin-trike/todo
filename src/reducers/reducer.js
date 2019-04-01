
const initialState = {
    tasksPlanned: [],
    tasksDone: [],
    addFormValues: {
        description: "",
        duration_days: "0",
        duration_hours: "0",
        info: "",
        priority: "0",
        userid: "1",
    }
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
    case "SET_INITIAL_STATE": {
        return {...state,
            tasksPlanned: action.taskList.tasks
        };
    }
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
    case "CHANGE_ADDFORM_VALUE": {
        let items = {...state.addFormValues};
        items[action.name] = action.value;
        return {...state, 
            addFormValues: items,
        }
    }
  }
  return state;
}

export default reducer;