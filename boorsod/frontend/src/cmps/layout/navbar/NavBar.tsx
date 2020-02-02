import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './NavBar.scss';
import SingInLinks from '../singInLinks/SingInLinks';
import SingOutLinks from '../singOutLinks/SingOutLinks';
import firebase from '../../../firebase';
import 'firebase/auth';

interface IProps {
    isSignedIn: boolean;
    user: UUser;
}

interface IUser {
    _id: string | null;
    phutoUrl: string | undefined;
    name: string | null;
    uid: string | null;
    cards: any;
}
interface UUser {
    user: IUser;
}

class Nav extends React.Component<IProps> {
    render() {
        let img = this.props.user.user.phutoUrl;
        return (
            <nav>
                {this.props.isSignedIn ? (
                    <div className="user-buttons">
                        <SingInLinks />
                        <div className="user-conected-buttons">
                            <img className="img-profile" src={img} alt="" />
                            <Link to="/">
                                <button className="sign-out-button" onClick={() => firebase.auth().signOut()}>
                                    sign out
                                </button>
                            </Link>
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

const mapStateToProps = (state: { user: any }) => {
    return { user: state.user };
};

export default connect(mapStateToProps)(Nav);
