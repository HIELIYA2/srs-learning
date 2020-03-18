import './css/app.css';
import Router from './RouterCmp';
import firebase from './firebase';
import 'firebase/auth';
import { login } from '../src/actions/usersAction';
// import { connect } from 'react-redux';
const connect = require('react-redux');
// import React, { Component } from 'react';
const React = require('react');

declare namespace JSX {
    interface Element {}
    interface IntrinsicElements {
        div: any;
    }
}

interface IUser {
    phutoUrl: string | null;
    name: string | null;
    uid: any;
    cardsID: any;
}

interface Props {
    onLogin: (user: IUser) => void;
}

interface State {
    isSignedIn: boolean;
}

class App extends React.Component<Props, State> {
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
                    cardsID: [],
                });
            } else {
                this.setState({ isSignedIn: false });
            }
        });
    }

    render() {
        const { isSignedIn } = this.state;
        return (
            <div>
                <Router isSignedIn={isSignedIn} />
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        onLogin: (user: any) => dispatch(login(user)),
    };
};

export default connect(null, mapDispatchToProps)(App);
