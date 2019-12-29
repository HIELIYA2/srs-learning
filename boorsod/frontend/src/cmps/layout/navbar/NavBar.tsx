import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.scss';
import SingInLinks from '../singInLinks/SingInLinks';
import SingOutLinks from '../singOutLinks/SingOutLinks';
import firebase from '../../../firebase';
import 'firebase/auth';

interface IProps {
    isSignedIn: boolean;
}

class Nav extends React.Component<IProps> {
    render() {
        return (
            <nav>
                {this.props.isSignedIn ? (
                    <div className="user-buttons">
                        <SingInLinks />
                        <div className="user-conected-buttons">
                            <button className="sign-out-button" onClick={firebase.auth().signOut}>
                                sign out
                            </button>
                            <Link to="/create">
                                <div className="nav-add-card">+</div>
                            </Link>
                        </div>
                    </div>
                ) : (
                    <div className="user-buttons">
                        <SingOutLinks />
                        <div className="user-unconected-buttons">
                            <Link to="/login">
                                <div className="login-button">Login</div>
                            </Link>
                        </div>
                    </div>
                )}
            </nav>
        );
    }
}

export default Nav;
