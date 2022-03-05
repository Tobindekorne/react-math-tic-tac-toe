import React from 'react';
import './board.css';
import GameButton from '../gameButton/GameButton';

const Board = ({ onClick, buttonLabels, winCombo }) => {
    let strikeClass = 'strike';
    if (winCombo?.every((val) => [0, 1, 2].includes(val)))
        strikeClass += ' strike-row strike-row-1';
    if (winCombo?.every((val) => [0, 3, 6].includes(val)))
        strikeClass += ' strike-col strike-col-1';
    if (winCombo?.every((val) => [0, 4, 8].includes(val)))
        strikeClass += ' strike-diag strike-diag-1';
    if (winCombo?.every((val) => [2, 5, 8].includes(val)))
        strikeClass += ' strike-col strike-col-3';
    if (winCombo?.every((val) => [2, 4, 6].includes(val)))
        strikeClass += ' strike-diag strike-diag-2';
    if (winCombo?.every((val) => [3, 4, 5].includes(val)))
        strikeClass += ' strike-row strike-row-2';
    if (winCombo?.every((val) => [6, 7, 8].includes(val)))
        strikeClass += ' strike-row strike-row-3';
    if (winCombo?.every((val) => [1, 4, 7].includes(val)))
        strikeClass += ' strike-col strike-col-2';

    return (
        <>
            <div className='container board__container'>
                {buttonLabels.map((label, index) => {
                    return (
                        <GameButton
                            key={index}
                            id={index}
                            label={label}
                            onClick={onClick}
                            winCombo={winCombo}
                        />
                    );
                })}
                <div className={strikeClass}></div>
            </div>
        </>
    );
};

export default Board;
