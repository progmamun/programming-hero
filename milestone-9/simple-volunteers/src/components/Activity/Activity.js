import React from 'react';
import './Activity.css';

const Activity = ({activity}) => {
    const {title, img} = activity;
    return (
        <div className='activity'>
            <img src={img} alt="" />
            <h2>{title}</h2>
        </div>
    );
};

export default Activity;