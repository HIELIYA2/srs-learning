import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './NavBar.scss';
import MenuButton from '../menuButton/menuButton';
import Menu from '../menu/menu';
import firebase from '../../../firebase';
import 'firebase/auth';
import logo from '../../../assets/logo.png';

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
interface IState {
    menuOpen: boolean;
    isMobile: boolean;
}

class Nav extends React.Component<IProps, IState> {
    state = {
        menuOpen: false,
        isMobile: window.innerWidth < 900,
    };

    componentDidMount() {
        window.addEventListener(
            'resize',
            () => {
                this.setState({
                    isMobile: window.innerWidth < 900,
                    menuOpen: false,
                });
            },
            false,
        );
    }

    handleMenuClick = () => {
        this.setState(({ menuOpen }) => ({
            menuOpen: !menuOpen,
        }));
    };

    handleLinkClick = () => {
        this.setState({ menuOpen: false });
    };
    render() {
        let img = this.props.user.user.phutoUrl;
        const className = this.state.isMobile ? 'mobile' : '';
        console.log('is mobile', this.state.isMobile);
        console.log('is menu open', this.state.menuOpen);
        return (
            <nav>
                <div className="nav-container">
                    <Link to="/">
                        <li className="logo">
                            <img className="logo-img" src={logo} alt="Logo" />
                            <span className="logo-bor">Bor</span>
                            <span className="logo-sood">sood</span>
                        </li>
                    </Link>

                    <div className={className}>
                        <Menu open={this.state.isMobile ? this.state.menuOpen : true}>
                            {this.props.isSignedIn ? (
                                <div className="user-buttons">
                                    <Link to="/learn">
                                        <li className="SingInLinks-li" onClick={this.handleLinkClick}>
                                            Learn
                                        </li>
                                    </Link>
                                    <hr className="hr-mobile" />
                                    <Link to="/cards">
                                        <li className="SingInLinks-li" onClick={this.handleLinkClick}>
                                            Cards
                                        </li>
                                    </Link>
                                    <hr className="hr-mobile" />
                                    <Link
                                        className="SingInLinks-li"
                                        onClick={() => this.handleLinkClick()}
                                        to={{ pathname: '/create', state: { term: '', definition: '' } }}
                                    >
                                        New-card
                                    </Link>
                                    <hr className="hr-mobile" />
                                    <div className="user-conected-buttons">
                                        <Link to="/">
                                            <button
                                                className="sign-out-button"
                                                onClick={() => {
                                                    firebase.auth().signOut();
                                                    this.handleLinkClick();
                                                }}
                                            >
                                                Sign-out
                                            </button>
                                        </Link>
                                        <img className="img-profile" src={img} alt="" />
                                    </div>
                                </div>
                            ) : (
                                <div className="user-buttons">
                                    <Link to="/login">
                                        <div className="login-button" onClick={this.handleLinkClick}>
                                            Login
                                        </div>
                                    </Link>
                                </div>
                            )}
                        </Menu>
                    </div>
                    <div className="container">
                        <MenuButton open={this.state.menuOpen} onClick={this.handleMenuClick} />
                    </div>
                </div>
            </nav>
        );
    }
}

const mapStateToProps = (state: { user: any }) => {
    return { user: state.user };
};

export default connect(mapStateToProps)(Nav);
