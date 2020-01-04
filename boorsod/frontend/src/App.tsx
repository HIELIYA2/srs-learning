import React, { Component } from 'react';
import { connect } from 'react-redux';
import './css/app.css';
import Router from './RouterCmp';
import firebase from './firebase';
import 'firebase/auth';
import { addUser } from '../src/actions/usersAction';

interface IUser {
    phutoUrl: string | null;
    name: string | null;
    uid: any;
}

interface Props {
    onLogin: (user: IUser) => void;
}

interface State {
    isSignedIn: boolean;
}

class App extends Component<Props, State> {
    state = {
        isSignedIn: false,
    };

    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.setState({ isSignedIn: true });
                this.props.onLogin({
                    phutoUrl: user.photoURL,
                    name: user.displayName,
                    uid: user.uid,
                });
            } else {
                console.log('not good');
                this.setState({ isSignedIn: false });
            }
        });
    }

    render() {
        const { isSignedIn } = this.state;
        return (
            <div className="home-page">
                <Router isSignedIn={isSignedIn} />
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        onLogin: (user: any) => dispatch(addUser(user)),
    };
};

export default connect(null, mapDispatchToProps)(App);
