import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <Link to="/">Лавка Кости</Link>
            </div>
            <nav className="navigation">
                <ul>
                    <li><Link to="/">Главная</Link></li>
                    <li><Link to="/catalog">Каталог</Link></li>
                    <li><Link to="/favorites">Избранное</Link></li>
                    <li><Link to="/cart">Корзина</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
