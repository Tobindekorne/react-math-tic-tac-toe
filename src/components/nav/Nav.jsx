import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

const Nav = () => {
    const [activeNav, setActiveNav] = useState('#');
    return (
        <nav className='navbar'>
            <Link
                className={
                    'nav__link' + (activeNav === 'home' ? ' active' : '')
                }
                to='/'
                onClick={() => setActiveNav('home')}
            >
                Home
            </Link>
            <Link
                className={
                    'nav__link' +
                    (window.location.href.includes('tic-tac-toe')
                        ? ' active'
                        : '')
                }
                to='/tic-tac-toe'
                onClick={() => setActiveNav('tic-tac-toe')}
            >
                Math Tic-Tac-Toe
            </Link>
        </nav>
    );
};

export default Nav;
