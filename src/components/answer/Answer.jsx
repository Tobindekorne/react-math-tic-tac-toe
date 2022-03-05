import React from 'react';
import Latex from 'react-latex';

const Answer = ({ answer }) => {
    return <Latex>{answer}</Latex>;
};

export default Answer;
