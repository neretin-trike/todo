
const initialState = {
    tasksPlanned: [],
    tasksDone: [],
    currentPage: "wrapper open-tasklist",
    addTaskType: "Добавление новой",
    addFormValues: {
        description: "",
        duration_days: "0",
        duration_hours: "0",
        additional_data: {
            info: "",
            priority: "0",
        },
        userid: "1",
        attachmentFile: "",
    },
    viewFormValues: {
        description: "",
        duration_days: "",
        duration_hours: "",
        attachment_filename: "",
        additional_data: {
            info: "",
            priority: "",
        }
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
        if ( action.name === "info" || action.name === "priority" ) {
            items.additional_data[action.name] = action.value;
        } else {
            items[action.name] = action.value;
        }
        return {...state, 
            addFormValues: items,
        }
    }
    case "GET_TASK_VIEWER_INFO": {
        let items = {...state.viewFormValues};
        items = action.task;
        return {...state, 
            viewFormValues: items,
        }
    }
    case "ADD_NEW_TASK": {
        let items = [...state.tasksPlanned];
        action.task.id = action.id;
        items.push(action.task);
        return {
            ...state,
            tasksPlanned:items
        }
    }
    case "MAP_TASK_TO_ADDFORM": {
        let data = {};
        if ( action.data == null ) {
            data = initialState.addFormValues;
        } else {
            data = action.data;
        }

        let item = JSON.parse(JSON.stringify(data));

        return {
            ...state,
            addTaskType: action.addTaskType,
            addFormValues:item,
        }
    }
    case "EDIT_SELECT_TASK": {
        let item = action.task;

        let plannedTaskList = [...state.tasksPlanned];
        let plTaskIDList = plannedTaskList.map( e => e.id);
        let indexFound = plTaskIDList.indexOf(+item.id);
        plannedTaskList[indexFound] = item;
        return {
            ...state,
            tasksPlanned: plannedTaskList
        }
    }
    case "SET_PAGE_OPEN": {
        return {
            ...state,
            currentPage: "wrapper "+ action.setClassNames
        }
      }
  }
  return state;
}

export default reducer;