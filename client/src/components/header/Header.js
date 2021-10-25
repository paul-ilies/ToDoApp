import React from 'react';
import "./header.scss";
import { useDispatch, useSelector } from 'react-redux'
import { logout } from "../../actions";
import history from "../../history"

const Header = () => {

    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.auth);
    const { userInfo } = userLogin;


    const logoutHandler = () => {
        history.push("/")
        dispatch(logout())
    }


    const renderButton = () => {

        if (userInfo) {
            return (
                <div className="header">
                    <div className="header-btn-container">
                        <button className="header-btn" onClick={logoutHandler} >Sign Out</button>
                    </div>

                </div>
            )
        }
        if (history.location.pathname === "/" || history.location.pathname === "/signup") {
            return (
                <div className="header">
                    <div className="header-btn-container">
                        <button className="header-btn" onClick={() => history.push("/login")} >Sign In</button>
                    </div>

                </div>
            )
        }
        if (history.location.pathname === "/login") {
            return (
                <div className="header">
                    <div className="header-btn-container">
                        <button className="header-btn" onClick={() => history.push("/signup")} >Sign Up</button>
                    </div>

                </div>
            )
        }
    }


    return (
        <>
            {renderButton()}
        </>
    )








}

export default Header
