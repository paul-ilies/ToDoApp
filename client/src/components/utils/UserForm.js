import React from 'react';
import { Field } from "redux-form";
import "./userForm.scss"

const UserForm = ({ onSubmit, title, buttonText, error }) => {
    return (
        <div className="user-form">
            <form onSubmit={onSubmit} >
                <div className="user-form-title">
                    <h1>{title}</h1>
                </div>

                <div className="user-form-inputs">

                    <div className="user-form-inputs__email">
                        <img src="/pictures/email.svg" alt="email" className="user-form-inputs__img" />
                        <Field
                            className="user-form-inputs-item email"
                            name="email"
                            type="text"
                            component="input"
                            autoComplete="none"
                            placeholder="E-mail"
                        />
                    </div>

                    <div className="user-form-inputs__password">
                        <img src="/pictures/lock.svg" alt="email" className="user-form-inputs__img" />
                        <Field
                            className="user-form-inputs-item password"
                            name="password"
                            type="password"
                            component="input"
                            autoComplete="none"
                            placeholder="Password"
                        />
                    </div>
                    <div className="user-form-inputs__error">{error}</div>
                    <button className="user-form-button">
                        <img src="/pictures/user.svg" alt="user" />
                        {buttonText}
                    </button>
                </div>

            </form>
        </div>
    )
}

export default UserForm
