import React from 'react';
import "./eventTask.scss";

const EventTask = ({ children }) => {
    return (

        <div className="event-container">
            <div className="event-container-whiteCircle">
                <div className="event-container-grayCircle">
                    {children}
                </div>
            </div>
        </div>


    )
}

export default EventTask
