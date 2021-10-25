import React, { useEffect } from "react";
import { useSelector } from 'react-redux';
import history from "../../history";

const requireAuth = (ChildComponent) => {

    const ComposedComponent = (props) => {
        const userLogin = useSelector(state => state.auth)
        const { userInfo } = userLogin



        useEffect(() => {

            if (!userInfo) {
                history.push("/")
            }


        })

        return <ChildComponent {...props} />
    }


    return ComposedComponent
}

export default requireAuth