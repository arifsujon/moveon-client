import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebaseConfig';
import { useHistory, useLocation } from 'react-router';
import { UserContext } from '../../App';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const provider = new firebase.auth.GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        console.log('login clicked');
        firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
            console.log(result);
            const {displayName, email} = result.user;
            const signedInUser = {userName: displayName, email};
            console.log(signedInUser);
            setLoggedInUser(signedInUser);
            history.replace(from);
        })
        .catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log('errorCode: ', errorCode, 'errorMessage: ', errorMessage);
        });
    }

    return (
        <div className="mt-5 pt-5" id="login">
            <div className="container text-center">
            <button className="btn btn-info" onClick={handleGoogleSignIn}>Login with Google</button>  
            </div>
        </div>
    );
};

export default Login;