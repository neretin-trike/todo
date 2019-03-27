 
let reducer = function(state = {}, action) {
  switch (action.type) {
    case "SET_STATE":
        return state.merge(action.state);
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

export {reducer};