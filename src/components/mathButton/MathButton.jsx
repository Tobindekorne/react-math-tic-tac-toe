import React from 'react';
import Latex from 'react-latex';
import './mathButton.css';

const MathButton = ({ math, onClick }) => {
    return (
        <div className='btn math text-center' onClick={onClick}>
            <Latex>{math}</Latex>
        </div>
    );
};

export default MathButton;
