import React from 'react';
import './styles.css';
import { ReactComponent as Logo } from './logo.svg';

const Footer = () => {
    return (
        <nav className="main-navbar">
            <Logo />
            <a href="/" className="logo-text">DS Delivery</a>
        </nav>
    )
}

export default Footer;