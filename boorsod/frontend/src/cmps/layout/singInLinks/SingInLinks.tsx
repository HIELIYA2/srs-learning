import React from 'react';
import { Link } from 'react-router-dom';
import './SingInLinks.scss';
import logo from '../../../assets/logo.png';

const SingInLinks = () => {
    return (
        <nav className="SingInLinks-container">
            <ul className="SingInLinks-ul">
                <Link to="/">
                    <li className="SingInLinks-li logo-home">
                        <img className="logo-img" src={logo} alt="Logo" />
                        <span className="logo-bor">Bor</span>
                        <span className="logo-sood">sood</span>
                    </li>
                </Link>
                <Link to="/learn">
                    <li className="SingInLinks-li">Learn</li>
                </Link>
            </ul>
        </nav>
    );
};

export default SingInLinks;
