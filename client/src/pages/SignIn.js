import React, { useState, useEffect } from 'react';
import SignInForm from "../components/utils/UserForm";
import { reduxForm } from 'redux-form';
import { useDispatch, useSelector } from 'react-redux'
import { login } from "../actions";
import history from "../history";


let SignIn = (props) => {
    const { handleSubmit } = props
    const [errorMessage, setErrorMessage] = useState(null)
    const dispatch = useDispatch();
    const userLogin = useSelector(state => state.auth)
    const { userInfo, error } = userLogin

    useEffect(() => {
        if (error) {
            setErrorMessage(error.response.data.error);
            setTimeout(() => {
                setErrorMessage(null)
            }, 2000)
        }


    }, [error])



    const onSubmit = async (email, password) => {
        dispatch(await login(email, password))
    }


    if (userInfo) {
        history.push("/tasks")
    }
    return (
        <div className="userForm-container">
            <div className="userForm">
                <SignInForm
                    onSubmit={handleSubmit(onSubmit)}
                    error={errorMessage}
                    title="Sign In"
                    buttonText="Sign In" />
            </div>
        </div>
    )
}

SignIn = reduxForm({ form: "signin" })(SignIn)

export default SignIn

