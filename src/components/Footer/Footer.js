import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-logo">
                    <span>Лавка Кости</span>
                </div>
                <div className="footer-copy">
                    &copy; 2024 Лавка Кости. Все права защищены.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
