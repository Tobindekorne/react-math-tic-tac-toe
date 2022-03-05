import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './questionEditor.css';
import {
    BsInfoCircleFill,
    BsFillEyeFill,
    BsFillEyeSlashFill,
} from 'react-icons/bs';
import { BiSave } from 'react-icons/bi';

const loadLocalStorage = () => {
    const qs = localStorage.getItem('questions')?.split(',');
    const as = localStorage.getItem('answers')?.split(',');
    if (!qs || !as) return;
    const inputs = document.querySelectorAll('input');

    inputs.forEach((input) => {
        input.dataset.questionId &&
            (input.value = qs[input.dataset.questionId]);
        input.dataset.answerId && (input.value = as[input.dataset.answerId]);
    });
};
const store = {};

const QuestionEditor = () => {
    useEffect(loadLocalStorage, [store]);
    const [previewMode, setPreviewMode] = useState(false);

    const handlePreview = () => {
        setPreviewMode(!previewMode);
    };

    const handleSave = () => {
        const inputs = document.getElementsByTagName('input');
        const questions = [];
        const answers = [];
        for (const [key, value] of Object.entries(inputs)) {
            key % 2 === 0
                ? questions.push(value.value)
                : answers.push(value.value);
        }
        localStorage.setItem('questions', questions);
        localStorage.setItem('answers', answers);
    };

    return (
        <div className='container'>
            <Link to='/tic-tac-toe' className='btn btn-primary back-btn'>
                Back
            </Link>
            <table>
                <thead>
                    <tr>
                        <th>Questions</th>
                        <th>Answers</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <input data-question-id='0' type='text' />
                        </td>
                        <td>
                            <input data-answer-id='0' type='text' />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input data-question-id='1' type='text' />
                        </td>
                        <td>
                            <input data-answer-id='1' type='text' />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input data-question-id='2' type='text' />
                        </td>
                        <td>
                            <input data-answer-id='2' type='text' />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input data-question-id='3' type='text' />
                        </td>
                        <td>
                            <input data-answer-id='3' type='text' />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input data-question-id='4' type='text' />
                        </td>
                        <td>
                            <input data-answer-id='4' type='text' />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input data-question-id='5' type='text' />
                        </td>
                        <td>
                            <input data-answer-id='5' type='text' />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input data-question-id='6' type='text' />
                        </td>
                        <td>
                            <input data-answer-id='6' type='text' />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input data-question-id='7' type='text' />
                        </td>
                        <td>
                            <input data-answer-id='7' type='text' />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input data-question-id='8' type='text' />
                        </td>
                        <td>
                            <input data-answer-id='8' type='text' />
                        </td>
                    </tr>
                </tbody>
            </table>

            <div className='btn-row'>
                <button className='btn btn__icon' title='Formatting info'>
                    <BsInfoCircleFill />
                </button>
                <button
                    className='btn btn__icon'
                    title='Show/Hide Math View'
                    onClick={handlePreview}
                >
                    {previewMode ? <BsFillEyeFill /> : <BsFillEyeSlashFill />}
                </button>
                <button
                    className='btn btn__icon'
                    title='Save to Browser'
                    onClick={handleSave}
                >
                    <BiSave />
                </button>
            </div>
        </div>
    );
};

export default QuestionEditor;
