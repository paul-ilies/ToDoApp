import {
    CREATE_TASK,
    CREATE_TASK_ERROR,
    FETCH_TASKS,
    FETCH_TASKS_ERROR,
    FETCH_TASK_ERROR,
    FETCH_TASK,
    DELETE_TASK,
    DELETE_TASK_ERROR,
    EDIT_TASK,
    EDIT_TASK_ERROR
} from "../actions/types"

export const task = (state = [], action) => {
    switch (action.type) {
        case CREATE_TASK:
            return { ...state, userTask: action.payload }
        case CREATE_TASK_ERROR:
            return { ...state, error: action.payload }
        case FETCH_TASKS:
            return { ...state, userTasks: action.payload }
        case FETCH_TASKS_ERROR:
            return { ...state, error: action.payload }
        case FETCH_TASK:
            return { ...state, userTask: action.payload }
        case FETCH_TASK_ERROR:
            return { ...state, error: action.payload }
        case DELETE_TASK:
            return { ...state, userTask: action.payload }
        case DELETE_TASK_ERROR:
            return { ...state, error: action.payload }
        case EDIT_TASK:
            return { ...state, userTask: action.payload }
        case EDIT_TASK_ERROR:
            return { ...state, error: action.payload }
        default:
            return state;
    }
}
