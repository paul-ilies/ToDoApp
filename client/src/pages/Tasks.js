import React, { useEffect } from 'react'
import requireAuth from "../components/utils/requireAuth";
import "./tasks.scss";
import history from "../history";
import Task from '../components/tasks/Task';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from "../actions";
import Loader from '../components/utils/Loader';


const Tasks = () => {
    const dispatch = useDispatch();
    const { userTasks } = useSelector(state => state.task)
    useEffect(() => {
        dispatch(fetchTasks())
    }, [])

    const fetchData = () => {

        return userTasks.map(el => {
            return (<Task
                key={el._id}
                title={el.title}
                linkView="View"
                disabled={true}
                link={`/task/${el._id}`}

            />)
        })
    }


    const createTaskHandler = () => {
        history.push("/task")
    }

    if (!userTasks) {
        return (
            <div className="tasksPage-container">
                <Loader />
            </div>

        )
    }


    return (
        <div className="tasksPage-container">
            <div className="tasks-container">
                <div className="tasks-container--header">
                    <h3 className="tasks-container--header__heading">ADD A TASK</h3>
                    <button className="tasks-container--header__button" onClick={createTaskHandler}>
                        <img src="/pictures/AddButton.svg" alt="" className="tasks-container--header__image" />
                    </button>
                </div>
                <div className="tasks-container--list">
                    {fetchData()}
                </div>
            </div>
        </div>
    )

}

export default requireAuth(Tasks)
