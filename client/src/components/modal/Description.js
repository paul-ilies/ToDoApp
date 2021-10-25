import React from 'react';
import { Field } from "redux-form";
import { reduxForm } from 'redux-form';





let Description = ({ handleSubmit, onSubmitHandler }) => {



    return (

        <form onSubmit={handleSubmit(onSubmitHandler)} className="create-task-container-form" >

            <Field
                className="create-task-container-form__title"
                name="title"
                type="text"
                component="input"
                placeholder="Your title here..."

            />
            <Field
                className="create-task-container-form__description"
                name="description"
                type="text"
                component="textarea"
                placeholder="Please add your thoughts..."
            />

            <div className="create-task-container-form__buttons">
                <button >Save</button>
            </div>
        </form>


    )
}

Description = reduxForm(
    {
        form: "task",
        enableReinitialize: true
    })(Description)

export default Description
