import React from 'react';
import { Link } from 'react-router-dom';
import './SingInLinks.css';

const SingInLinks = () => {
    return (
        <nav className="SingInLinks-container">
            <ul className="SingInLinks-ul">
                <Link to="/">
                    <li className="SingInLinks-li">Home</li>
                </Link>
                <Link to="/learn">
                    <li className="SingInLinks-li">Learn</li>
                </Link>
            </ul>
        </nav>
    );
};

export default SingInLinks;
