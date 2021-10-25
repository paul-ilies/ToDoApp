import React from 'react';
import history from "../../history";


const Title = (props) => {
    return (
        <>
            <div className="create-task-container--closeButton">
                <button onClick={() => history.push(props.link)}>
                    <img src="/pictures/closeBtn.svg" alt="close button" />
                </button>
            </div>
            <div className="create-task-container--heading">
                <h3>{props.heading}</h3>
            </div>
        </>
    )
}

export default Title
