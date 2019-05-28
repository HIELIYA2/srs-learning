import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

function Nav() {
    return (
        <nav className="nav-container">
            <ul className="nav-ul">
                <Link to="/">
                    <li className="nav-li">Home</li>
                </Link>
                <Link to="/learn">
                    <li className="nav-li">Learn</li>
                </Link>
                <Link to="/create">
                    <li className="nav-li">Create</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;
