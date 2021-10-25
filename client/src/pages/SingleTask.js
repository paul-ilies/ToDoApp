import React, { useState, useEffect } from 'react';
import "./singleTask.scss";
import { useDispatch, useSelector } from 'react-redux';
import requireAuth from '../components/utils/requireAuth';
import EventTask from "../components/utils/EventTask";
import history from "../history";
import { fetchTask, deleteTask } from "../actions";
import Modal from "../components/utils/Modal";
import Title from "../components/modal/Title";
import Description from "../components/modal/Description";
import { editTask } from '../actions';
import _ from "lodash";
import Loader from '../components/utils/Loader';


const SingleTask = ({ match }) => {
    const [showModal, setShowModal] = useState(null);
    const dispatch = useDispatch();

    const { userTask, error } = useSelector(state => state.task)


    useEffect(() => {
        dispatch(fetchTask(match.params.id))
    }, [match.params.id])


    const deleteTaskHandler = (id) => {
        if (!id) {
            return;
        }
        dispatch(deleteTask(id));
        history.push("/tasks")
    }

    const onSubmitHandler = (formValues) => {
        dispatch(editTask(match.params.id, formValues))
        history.push(`/task/${match.params.id}`)
    }


    const editTaskHandler = () => {
        setShowModal(
            <Modal
                title={<Title heading="Do you want to edit your task?" link={`/task/${match.params.id}`} />}
                description={<Description onSubmitHandler={onSubmitHandler} initialValues={_.pick(userTask, "title", "description")} />}
            />)
    }

    if (error) {
        history.push("/tasks")
    }



    if (!userTask) {

        return (
            <div className="single-task">
                <Loader />
            </div>
        )
    }

    return (
        <div className="single-task">
            <div className="single-task-container">
                <div className="single-task-container__title">
                    <h1>{userTask.title}</h1>
                </div>
                <div className="single-task-container__description">
                    <p>{userTask.description}</p>
                </div>
                <div className="single-task-container__buttons">

                    <EventTask>
                        <button onClick={editTaskHandler} >Edit</button>
                    </EventTask>
                    <EventTask>
                        <button onClick={() => deleteTaskHandler(match.params.id)}>Delete</button>
                    </EventTask>
                    <EventTask>
                        <button onClick={() => history.push("/tasks")}>Close</button>
                    </EventTask>

                </div>
                {showModal}
            </div>
        </div>
    )
}

export default requireAuth(SingleTask)
