import React from 'react';
import { Link } from 'react-router-dom';
import './SingInLinks.scss';
import logo from '../../../assets/logo.png';

const SingInLinks = () => {
    return (
        <nav className="SingInLinks-container">
            <ul className="SingInLinks-ul">
                <Link to="/learn">
                    <li className="SingInLinks-li">Learn</li>
                </Link>
                <Link to="/cards">
                    <li className="SingInLinks-li">Cards</li>
                </Link>
            </ul>
        </nav>
    );
};

export default SingInLinks;
