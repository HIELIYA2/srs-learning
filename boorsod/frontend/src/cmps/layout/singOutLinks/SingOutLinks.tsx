import React from 'react';
import { Link } from 'react-router-dom';
import './SingOutLinks.css';

const SingOutLinks = () => {
    return (
        <nav className="SingOutLinks-container">
            <ul className="SingOutLinks-ul">
                <Link to="/">
                    <li className="SingOutLinks-li">Home</li>
                </Link>
            </ul>
        </nav>
    );
};

export default SingOutLinks;
