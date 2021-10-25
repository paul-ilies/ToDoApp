import React from 'react';
import "./homepage.scss";
import { useSelector } from 'react-redux';
import history from '../history';

const HomePage = () => {


    const userLogin = useSelector(state => state.auth);
    const { userInfo } = userLogin;

    if (!userInfo) {
        return (
            <div className="homepage-container">
                <div className="about">
                    <h1><span>to do app</span><br /> personal project</h1>
                    <img src="/pictures/ToDoApp_Logo.svg" alt="logo" />
                    <div className="header-btn-container">
                        <button className="header-btn" onClick={() => history.push("/signup")}>Sign Up</button>
                    </div>
                </div>
            </div>
        )
    }
    else {
        history.push("/tasks")
    }





}

export default HomePage
