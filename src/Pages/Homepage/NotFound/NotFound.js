import React from 'react';
import './NotFound.css'
import image from '../../../images/NotFound/not-found.png'

const NotFound = () => {
    return (
        <div className="not-found">
            <img src={image} alt="" />
        </div>
    );
};

export default NotFound;