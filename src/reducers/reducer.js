
const initialState = {
    tasksPlanned: [],
    tasksDone: [],
    currentPage: "wrapper open-tasklist",
    addTaskType: "Добавление новой",
    addFormValues: {
        description: "",
        duration_days: "0",
        duration_hours: "0",
        info: "",
        priority: "0",
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
    let plannedItems = tasksPlanned;
    let filterItems = plannedItems.filter( (item) => {
        return item.id !== id;
    } )

    return {filterItems};
}

function getNewItems(taskDone, doneItem, isDone, newId) {
    let doneItems = taskDone;
    doneItem.id = newId;
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
        let {filterItems: plannedItems} = getFilterItems([...state.tasksPlanned], +action.task.id)
        let newDoneItems = getNewItems( [...state.tasksDone], action.task, true, +action.newId)

        return {...state, 
            tasksPlanned: plannedItems,
            tasksDone: newDoneItems 
        }
    }
    case "MARK_TASK_AS_PLANNED": {
        let {filterItems: doneItems} = getFilterItems([...state.tasksDone], +action.task.id)
        let newPlannedItems = getNewItems( [...state.tasksPlanned], action.task, false, +action.newId)

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
            data = {...initialState.addFormValues};
        } else {
            data = {...action.data};
            data.info = action.data.additional_data.info;
            data.priority = action.data.additional_data.priority;
            delete data.additional_data;
        }
        return {
            ...state,
            addTaskType: action.addTaskType,
            addFormValues:data,
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