import React from 'react';
import './footer.css';
import { IoLogoTwitter } from 'react-icons/io';
import { FiInstagram } from 'react-icons/fi';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub, FaGitlab } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className=''>
            <div className='footer__socials'>
                {/* Twitter */}
                <a
                    className='btn'
                    href='https://twitter.com/TdeKorne'
                    role='button'
                    target='_blank'
                    rel='noreferrer'
                >
                    <IoLogoTwitter />
                </a>

                {/* Instagram */}
                <a
                    className='btn'
                    href='https://www.instagram.com/tobindekorne/'
                    role='button'
                    target='_blank'
                    rel='noreferrer'
                >
                    <FiInstagram />
                </a>

                {/* Linkedin */}
                <a
                    className='btn'
                    href='https://www.linkedin.com/in/tobin-dekorne/'
                    role='button'
                    target='_blank'
                    rel='noreferrer'
                >
                    <BsLinkedin />
                </a>

                {/* Github */}
                <a
                    className='btn'
                    href='https://github.com/Tobindekorne/'
                    role='button'
                    target='_blank'
                    rel='noreferrer'
                >
                    <FaGithub />
                </a>

                {/* Github */}
                <a
                    className='btn'
                    href='https://gitlab.com/tdekorne/'
                    role='button'
                    target='_blank'
                    rel='noreferrer'
                >
                    <FaGitlab />
                </a>
            </div>

            <div className='footer__copyright'>
                &copy; Tobin deKorne 2022. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
