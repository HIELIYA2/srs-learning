import React from 'react';
import { Link } from 'react-router-dom';
import './SingOutLinks.scss';
import logo from '../../../assets/logo.png';

const SingOutLinks = () => {
    return (
        <nav className="SingOutLinks-container">
            <ul className="SingOutLinks-ul">
                <Link to="/">
                    <li className="SingOutLinks-li logo-home">
                        <img className="logo-img" src={logo} alt="Logo" />
                        <span className="logo-bor">Bor</span>
                        <span className="logo-sood">sood</span>
                    </li>
                </Link>
            </ul>
        </nav>
    );
};

export default SingOutLinks;
