import React from 'react';
import { Link } from 'react-router-dom';
import './askToStart.css';
import QuestionEditor from '../questionEditor/QuestionEditor';

const AskToStart = ({ onClick }) => {
    return (
        <div className='container text-center'>
            <h1>Who will start?</h1>
            <div className='btn-row'>
                <button
                    onClick={() => onClick('X')}
                    className='btn btn-primary btn-start'
                >
                    X
                </button>
                <button
                    onClick={() => onClick('O')}
                    className='btn btn-primary btn-start'
                >
                    O
                </button>
            </div>
            <div className='btn-row'>
                <Link
                    to='/tic-tac-toe/questions'
                    className='btn btn-primary edit-btn'
                    element={<QuestionEditor />}
                >
                    Edit Questions
                </Link>
            </div>
        </div>
    );
};

export default AskToStart;
