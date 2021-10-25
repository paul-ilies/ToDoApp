import {
    AUTH_USER,
    AUTH_ERROR,
    CREATE_TASK,
    CREATE_TASK_ERROR,
    FETCH_TASKS,
    FETCH_TASKS_ERROR,
    FETCH_TASK,
    FETCH_TASK_ERROR,
    DELETE_TASK,
    DELETE_TASK_ERROR,
    EDIT_TASK,
    EDIT_TASK_ERROR
} from "./types";
import axios from "axios";

export const signUp = (email, password) => async dispatch => {

    try {
        const config = {
            headers: {
                "content-Type": 'application/json'
            }
        }
        const { data } = await axios.post("http://localhost:5000/signup", { email, password }, config);

        dispatch({
            type: AUTH_USER,
            payload: data
        })

    } catch (error) {

        dispatch({
            type: AUTH_ERROR,
            payload: error

        })
    }
}

export const login = ({ email, password }, callback) => async dispatch => {
    try {
        const config = {
            headers: {
                "content-Type": 'application/json'
            }
        }
        const { data } = await axios.post("http://localhost:5000/login", { email, password }, config);
        dispatch({
            type: AUTH_USER,
            payload: data
        })

        localStorage.setItem("token", data.token)
        callback()
    } catch (error) {
        dispatch({
            type: AUTH_ERROR,
            payload: error
        })
    }
}

export const logout = () => async dispatch => {
    localStorage.removeItem("token")
    dispatch({
        type: AUTH_USER,
        payload: ""
    })


}

export const createTask = (formValues) => async (dispatch, useState) => {


    try {
        const { userInfo } = useState().auth

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo}`

            }
        }
        const { data } = await axios.post("http://localhost:5000/task", { ...formValues }, config);

        dispatch({
            type: CREATE_TASK,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: CREATE_TASK_ERROR,
            payload: error
        })
    }
}

export const fetchTasks = () => async (dispatch, useState) => {
    try {
        const { userInfo } = useState().auth
        const config = {
            headers: {
                Authorization: `Bearer ${userInfo}`

            }
        }
        const { data } = await axios.get("http://localhost:5000/tasks", config);
        dispatch({
            type: FETCH_TASKS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: FETCH_TASKS_ERROR,
            payload: error
        })
    }
}

export const fetchTask = (id) => async (dispatch, useState) => {
    try {
        const { userInfo } = useState().auth;
        const config = {
            headers: {
                Authorization: `Bearer ${userInfo}`

            }
        }
        const { data } = await axios.get(`http://localhost:5000/tasks/${id}`, config);
        dispatch({
            type: FETCH_TASK,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: FETCH_TASK_ERROR,
            payload: error
        })
    }
}

export const deleteTask = (id) => async (dispatch, useState) => {
    try {
        const { userInfo } = useState().auth;
        const config = {
            headers: {
                Authorization: `Bearer ${userInfo}`

            }
        }
        const { data } = await axios.delete(`http://localhost:5000/tasks/${id}`, config);

        dispatch({
            type: DELETE_TASK,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: DELETE_TASK_ERROR,
            payload: error
        })
    }
}

export const editTask = (id, formValues) => async (dispatch, useState) => {
    try {
        const { userInfo } = useState().auth;
        const config = {
            headers: {
                Authorization: `Bearer ${userInfo}`

            }
        }
        const { data } = await axios.patch(`http://localhost:5000/tasks/${id}`, { ...formValues }, config);
        dispatch({
            type: EDIT_TASK,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: EDIT_TASK_ERROR,
            payload: error
        })
    }
}
