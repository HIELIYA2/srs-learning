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
        isMobile: true,
    };

    componentDidMount() {
        window.addEventListener(
            'resize',
            () => {
                this.setState({
                    isMobile: window.innerWidth < 900,
                    menuOpen: true,
                });
            },
            false,
        );
    }

    handleMenuClick() {
        this.setState({ menuOpen: !this.state.menuOpen });
    }

    handleLinkClick() {
        this.setState({ menuOpen: false });
    }
    render() {
        let img = this.props.user.user.phutoUrl;
        const className = this.state.isMobile ? 'mobile' : '';
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
                        <Menu open={this.state.menuOpen}>
                            {this.props.isSignedIn ? (
                                <div className="user-buttons">
                                    <Link to="/learn">
                                        <li className="SingInLinks-li">Learn</li>
                                    </Link>
                                    <hr className="hr-mobile" />
                                    <Link to="/cards">
                                        <li className="SingInLinks-li">Cards</li>
                                    </Link>
                                    <hr className="hr-mobile" />
                                    <Link
                                        className="SingInLinks-li"
                                        to={{ pathname: '/create', state: { term: '', definition: '' } }}
                                    >
                                        New-card
                                    </Link>
                                    <hr className="hr-mobile" />
                                    <div className="user-conected-buttons">
                                        <Link to="/">
                                            <button
                                                className="sign-out-button"
                                                onClick={() => firebase.auth().signOut()}
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
                                        <div className="login-button">Login</div>
                                    </Link>
                                </div>
                            )}
                        </Menu>
                    </div>
                    <div className="container">
                        <MenuButton open={this.state.menuOpen} onClick={() => this.handleMenuClick()} />
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

// {
//     this.props.isSignedIn ? (
//         <div className="user-buttons">
//             <SingInLinks />
//             <div className="user-conected-buttons">
//                 <img className="img-profile" src={img} alt="" />
//                 <Link to="/">
//                     <button className="sign-out-button" onClick={() => firebase.auth().signOut()}>
//                         sign out
//                     </button>
//                 </Link>
//                 <Link className="nav-add-card" to={{ pathname: '/create', state: { term: '', definition: '' } }}>
//                     +
//                 </Link>
//             </div>
//         </div>
//     ) : (
//         <div className="user-buttons">
//             <div className="user-unconected-buttons">
//                 <Link to="/login">
//                     <div className="login-button">Login</div>
//                 </Link>
//             </div>
//         </div>
//     );
// }
