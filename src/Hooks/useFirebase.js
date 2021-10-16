import { useEffect, useState } from "react";
import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    onAuthStateChanged,
    signOut,
    GithubAuthProvider,
    FacebookAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile
} from "firebase/auth";
import initializeAuthentication from "../firebase/firebase.init";

initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState({});

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const facebookProvider = new FacebookAuthProvider();


    const registerWithEmailPassword = (name, email, password) => {
        console.log(email, password);
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                console.log(result.user);
                updateProfile(auth.currentUser, { displayName: name })
                    .then(result => { })
            })
            .catch((error) => {
                setError(error.message);
            });
    }


    const logInWithEmailPassword = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('')
            })
            .catch(error => {
                setError(error.message);
            })
    }


    //sing in with google
    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    };

    //sing in with github
    const signInWithGithub = () => {
        return signInWithPopup(auth, githubProvider);
    };

    //sing in with facebook
    const signInWithFacebook = () => {
        return signInWithPopup(auth, facebookProvider);
    };

    //sign in with other will be added here

    //log out
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
    };

    //observing state change or not
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
        });
    }, []);

    //return
    return {
        user,
        error,
        signInWithGoogle,
        signInWithGithub,
        signInWithFacebook,
        registerWithEmailPassword,
        logInWithEmailPassword,
        logOut
    }
}


//export
export default useFirebase;