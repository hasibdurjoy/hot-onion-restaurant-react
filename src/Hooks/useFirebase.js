import { useEffect, useState } from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged, signOut, GithubAuthProvider, FacebookAuthProvider } from "firebase/auth";
import initializeAuthentication from "../firebase/firebase.init";

initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState({});

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const facebookProvider = new FacebookAuthProvider();


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
        logOut
    }
}


//export
export default useFirebase;