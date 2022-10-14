import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
const Header = () => {
    return (
        <div className='header'>
            <div className='padd'>
                <h3>Esho-Pathshala</h3>
            </div>
            <div className='header-link'>
                <div><Link to='/'>Topics</Link></div>
                <div><Link to='/statistics'>Statistics</Link></div>
                <div><Link to='/blog'>Blog</Link></div>
            </div>
        </div>
    );
};

export default Header;