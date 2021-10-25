import React, { useState, useEffect } from 'react';
import { reduxForm } from 'redux-form';
import { useDispatch, useSelector } from 'react-redux'
import { signUp } from "../actions"
import SignUpForm from "../components/utils/UserForm";
import history from "../history"

let SignUp = (props) => {
    const { handleSubmit } = props
    const [errorMessage, setErrorMessage] = useState(null)
    const dispatch = useDispatch();


    const userRegister = useSelector(state => state.auth);
    const { userInfo, error } = userRegister

    useEffect(() => {
        if (error) {
            setErrorMessage(error.response.data.error)
            setTimeout(() => {
                setErrorMessage(null)
            }, 2000);
        }


    }, [error])


    const onSubmit = async ({ email, password }) => {
        dispatch(await signUp(email, password))

    }

    if (!userInfo) {
        return (
            <div className="userForm-container">
                <div className="userForm">
                    <SignUpForm
                        onSubmit={handleSubmit(onSubmit)}
                        title="Sign Up"
                        error={errorMessage}
                        buttonText="Sign Up" />
                </div>
            </div>
        )
    }
    else {
        history.push("/tasks");
    }


}


SignUp = reduxForm({ form: "signup" })(SignUp)

export default SignUp



