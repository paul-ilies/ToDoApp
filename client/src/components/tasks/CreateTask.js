import React from 'react';
import "./createTask.scss";
import Modal from "../utils/Modal";
import requireAuth from '../utils/requireAuth';
import Title from '../modal/Title';
import Description from '../modal/Description';
import { createTask } from '../../actions';
import { useDispatch } from 'react-redux';
import { reset } from 'redux-form';

const CreateTask = () => {

    const dispatch = useDispatch();

    const onSubmitHandler = async (formValues) => {
        dispatch(await createTask(formValues))
        dispatch(reset("task"))
    }



    return (
        <div className="create-task-container">
            <Modal
                title={<Title heading="Do you have something in your mind?" link="/tasks" />}
                description={<Description onSubmitHandler={onSubmitHandler} />}

            />
        </div>
    )
}

export default requireAuth(CreateTask)
