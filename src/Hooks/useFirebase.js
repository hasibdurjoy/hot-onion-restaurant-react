import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, GithubAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";

initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);


    const auth = getAuth();
    const signInUsingGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
            })
            .finally(() => { setIsLoading(false) })
    };

    const signInUsingGithub = () => {
        const githubProvider = new GithubAuthProvider();
        signInWithPopup(auth, githubProvider)
            .then(result => {
                setUser(result.user);
            })
            .finally(() => { setIsLoading(false) })
    };


    const signInUsingFacebook = () => {
        const facebookProvider = new FacebookAuthProvider();
        signInWithPopup(auth, facebookProvider)
            .then(result => {
                setUser(result.user);
            })
            .finally(() => { setIsLoading(false) })
    }
    /* useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        })
        return () => unsubscribed;
    }, []); */
    /*   useEffect(() => {
          onAuthStateChanged(auth, (user) => {
              if (user) {
                  setUser(user);
                  // readDatabase(user.uid);
              } else {
                  setUser({});
              }
          });
      }, []); */
    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => { })
            .finally(() => { setIsLoading(false) })
    }
    return {
        user,
        isLoading,
        setUser,
        signInUsingGoogle,
        signInUsingGithub,
        signInUsingFacebook,
        logOut
    }
}
export default useFirebase;