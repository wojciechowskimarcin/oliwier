import React from 'react';
import s from './Footer.module.scss';

const Footer = () => {
    return (
        <footer className={s.footer}>
            <ul>
                <li><a href="#">BTC</a></li>
                <li><a href="#">ETH</a></li>
                <li><a href="#">LTH</a></li>
                <li><a href="#">DOG</a></li>
            </ul>
        </footer>
    );
};

export default Footer;