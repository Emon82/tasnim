import React from 'react';
import './Header.css';
const Header = () => {
    return (
        <div className='header'>
            <nav>
                <a href="/">Home</a>
                <a href="/blog">Blog</a>
                <a href="/portfoli">Portfolio</a>
                <a href="/Contact">Contact </a>
                <a href="/project">Project</a>
                </nav>   
        </div>
    );
};

export default Header;