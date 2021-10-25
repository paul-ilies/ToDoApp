import React from 'react';
import "./footer.scss";

const Footer = () => {
    const timeStamp = new Date().getFullYear();
    return (
        <div className="copyright">
            <p> Copyright &copy; <strong>Ilies Paul Daniel</strong> {timeStamp} </p>
            <p>Project built from scratch with <span>ReactJS</span>, <span>NodeJS</span> with <span>Express</span>, <span>MongoDB</span> with <span>Mongoose</span>  and some personal icons created in <span>Adobe Illustrator</span> </p>
        </div>
    )
}

export default Footer
