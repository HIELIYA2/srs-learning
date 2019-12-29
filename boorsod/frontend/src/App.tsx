import React from 'react';
import './css/app.css';
import Router from './RouterCmp';
import firebase from './firebase';
import 'firebase/auth';
// const axios = require('axios');

interface state {
    // masage: string;
    isSignedIn: boolean;
}

class App extends React.Component<state> {
    state = {
        isSignedIn: false,
    };

    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                // User is signed in.
                console.log('good', user.uid);
                console.log('good', user.displayName);
                console.log('good', user.photoURL);
                this.setState({ isSignedIn: true });
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

export default App;
