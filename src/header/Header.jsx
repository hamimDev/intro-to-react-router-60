import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import ActiveLink from '../Components/ActiveLink/ActiveLink';

const Header = () => {
    return (
        <nav className='optionAll'>
            <h4 className='optionOne'><ActiveLink  to="/">Home</ActiveLink></h4>
            <h4 className='optionOne'><ActiveLink  to="/friends">Friends</ActiveLink></h4>
            <h4 className='optionOne'><ActiveLink  to="/posts">Posts</ActiveLink></h4>
            <h4 className='optionOne'><ActiveLink  to="/about">About</ActiveLink></h4>
            <h4 className='optionOne'><ActiveLink  to="/contact">Contact</ActiveLink></h4>
        </nav>
    );
};

export default Header;