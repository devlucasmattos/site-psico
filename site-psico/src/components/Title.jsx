import React from 'react';
import './Title.css'; 

const Title = ({text}) => {
    return (
        <div class="container">
        <h2>{text}</h2>
        </div>
    );
};

export default Title;