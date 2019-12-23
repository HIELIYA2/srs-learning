import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import SingInLinks from '../singInLinks/SingInLinks';
import SingOutLinks from '../singOutLinks/SingOutLinks';

const Nav = () => {
    return (
        <nav className="nav-container">
            <div>
                <SingInLinks />
                <SingOutLinks />
            </div>
            <div className="nav-div">
                <ul className="nav-ul">
                    <Link to="/create">
                        <li className="nav-li">+</li>
                    </Link>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;
