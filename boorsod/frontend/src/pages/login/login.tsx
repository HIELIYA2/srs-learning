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
            this.setState({ isSignedIn: !!user });
            console.log('user', user);
        });
    }

    render() {
        return (
            <div className="login-page">
                {this.state.isSignedIn ? (
                    <span>
                        <h1>sing in</h1>
                        <button onClick={() => firebase.auth().signOut()}>sign out</button>
                        {/* <h1>WELCOME {this.state.currentUser}</h1> */}
                        {/* <img src={firebase.auth().currentUser?.photoURL} alt="profile picture" /> */}
                    </span>
                ) : (
                    <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()} />
                )}
            </div>
        );
    }
}

export default Login;
