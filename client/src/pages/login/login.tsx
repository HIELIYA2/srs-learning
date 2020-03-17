import React from 'react';
import './login.css';
import firebase from '../../firebase';
import 'firebase/auth';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

interface state {
    isSignedIn: boolean;
}

class Login extends React.Component<state> {
    state = {
        isSignedIn: false,
    };

    // Configure FirebaseUI.
    uiConfig = {
        signInFlow: 'popup',
        signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID, firebase.auth.EmailAuthProvider.PROVIDER_ID],
        signInSuccessUrl: '/',
    };

    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.setState({ isSignedIn: true });
            } else {
                this.setState({ isSignedIn: false });
            }
        });
    }

    render() {
        return (
            <div className="login-page">
                {this.state.isSignedIn ? (
                    <span>
                        <h1>login sucsess</h1>{' '}
                    </span>
                ) : (
                    <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()} />
                )}
            </div>
        );
    }
}

export default Login;
