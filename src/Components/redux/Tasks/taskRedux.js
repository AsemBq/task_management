import {CREATE_TASK, DELETE_TASK, EDIT_TASK, RECEIVE_TASKS} from "./tasksType.js";


const TasksState = {
    tasks: [],
    loading: true
}

const tasksReducer = (state = TasksState, action) => {
    switch (action.type) {
        case RECEIVE_TASKS:
            return {loading: false, tasks: action.payload};
        case CREATE_TASK:
            return state
        case DELETE_TASK:
            return state
        case EDIT_TASK:
            return state
        default:
            return state
    }
}

export default tasksReducer;