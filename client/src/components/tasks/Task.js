import React from 'react'
import { Link } from "react-router-dom";
import "./task.scss";
import EventTask from "../utils/EventTask"
const Task = ({ title, linkView, link }) => {
    return (
        <div className="task-container" >
            <div className="task-container-title">
                <h3>{title}</h3>
            </div>
            <div className="task-container-events">
                <EventTask >
                    <Link to={link} >
                        <p>{linkView}</p>
                    </Link>
                </EventTask>


            </div>
        </div>
    )
}

export default Task
