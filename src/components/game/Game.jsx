import React, { useState, useEffect } from 'react';
import Board from '../board/Board';
import MathButton from '../mathButton/MathButton';
import AskToStart from '../askToStart/AskToStart';
import './game.css';

const data = [
    {
        label: 1,
        question: `$ f(x) = x - \\frac{7}{5} $`,
        answer: `\\( f'(x) = 1 \\)`,
    },
    {
        label: 2,
        question: `\\( f(x) = x^2\\)`,
        answer: `\\( f'(x) = 2x \\)`,
    },
    {
        label: 3,
        question: `\\( f(x) = 2x^2 - 3x \\)`,
        answer: `\\( f'(x) = 4x - 3 \\)`,
    },
    {
        label: 4,
        question: `\\( f(x) = 3x^2 - {3 \\over 2} \\)`,
        answer: `\\( f'(x) = 6x \\)`,
    },
    {
        label: 5,
        question: `\\( f(x) = {1 \\over \\sqrt{x}} \\)`,
        answer: `\\( f'(x) = {-1 \\over 2x \\sqrt{x}} \\)`,
    },
    {
        label: 6,
        question: `\\( f(x) = {1 \\over x} \\)`,
        answer: `\\( f'(x) = {-1 \\over x^2} \\)`,
    },
    {
        label: 7,
        question: `\\( f(x) = \\sqrt{2x - 3} \\)`,
        answer: `\\( f'(x) = {1 \\over \\sqrt{2x - 3}} \\)`,
    },
    {
        label: 8,
        question: `\\( f(x) = \\sqrt{x} \\)`,
        answer: `\\( f'(x) = {1 \\over 2 \\sqrt{x}} \\)`,
    },
    {
        label: 9,
        question: `\\( f(x) = x \\sqrt{139} \\)`,
        answer: `\\( f'(x) = \\sqrt{139} \\)`,
    },
];

const loadLocalStorage = () => {
    const qs = localStorage.getItem('questions')?.split(',');
    const as = localStorage.getItem('answers')?.split(',');
    if (!qs || !as) return;
    data.forEach((datum, index) => {
        datum.question =
            qs[index].trim() === '' ? datum.question : qs[index].trim();
        datum.answer =
            as[index].trim() === '' ? datum.answer : as[index].trim();
    });
};
const store = {};

const Game = () => {
    useEffect(loadLocalStorage, [store]);
    const [currentTeam, setCurrentTeam] = useState('');
    const [cells, setCells] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    const [display, setDisplay] = useState('board');
    const [currentCell, setCurrentCell] = useState(null);
    const [currentQuestion, setCurrentQuestion] = useState('');
    const [currentAnswer, setCurrentAnswer] = useState('');
    const [win, setWin] = useState(null);

    const changeTeam = (num) => {
        if (currentTeam === 'X') {
            setCurrentTeam('O');
        } else {
            setCurrentTeam('X');
        }
    };

    const changeDisplay = (num) => {
        switch (display) {
            case 'board':
                setDisplay('question');
                const datum = data.find((d) => d.label === num);
                setCurrentQuestion(datum.question);
                setCurrentAnswer(datum.answer);
                break;
            case 'question':
                setDisplay('answer');
                break;
            case 'answer':
                setDisplay('board');
                break;
            default:
        }
    };

    const checkGameWon = (squares) => {
        const winningCombos = [
            [0, 1, 2],
            [0, 3, 6],
            [0, 4, 8],
            [2, 5, 8],
            [2, 4, 6],
            [3, 4, 5],
            [6, 7, 8],
            [1, 4, 7],
        ];

        winningCombos.forEach((combo) => {
            const first = squares[combo[0]];
            const second = squares[combo[1]];
            const third = squares[combo[2]];
            if (first === second && second === third) {
                setWin(combo);
            }
        });
    };

    const handleClick = (num) => {
        Number(num) && setCurrentCell(num - 1);
        if (display === 'answer') {
            let squares = [...cells];
            squares[currentCell] = currentTeam;
            setCells(squares);
            checkGameWon(squares);
            changeTeam(num);
        }
        changeDisplay(num);
    };

    const handleStartGame = (choice) => {
        setCurrentTeam(choice);
    };

    return (
        <>
            {currentTeam === '' && <AskToStart onClick={handleStartGame} />}
            {currentTeam !== '' && win === null && (
                <h1 className='text-center game__status'>
                    Current Team: {currentTeam}
                </h1>
            )}
            {win !== null && (
                <h1 className='text-center game__status'>
                    Team {currentTeam === 'X' ? 'O' : 'X'} won!
                </h1>
            )}
            {display === 'board' && currentTeam !== '' && (
                <Board
                    onClick={handleClick}
                    buttonLabels={[...cells]}
                    winCombo={win}
                />
            )}
            {display === 'question' && (
                <MathButton onClick={handleClick} math={currentQuestion} />
            )}
            {display === 'answer' && (
                <MathButton onClick={handleClick} math={currentAnswer} />
            )}
        </>
    );
};

export default Game;
