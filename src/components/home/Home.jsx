import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import TTT from '../../assets/tic-tac-toe.png';

const Home = () => {
    return (
        <div className='container'>
            <h1 className='text-center'>Educational Games</h1>
            <Link to='/tic-tac-toe' className='card'>
                <div className='shadow-lg '>
                    <img className='w-full' src={TTT} alt='Math Tic-Tac-Toe' />
                    <div className='px-6 py-4 card__description'>
                        <div className='font-bold text-xl mb-2 card__title'>
                            Math Tic-Tac-Toe
                        </div>
                        <p className='card__description-p'>
                            A game of Tic-Tac-Toe with Math learning along the
                            way!
                        </p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Home;
