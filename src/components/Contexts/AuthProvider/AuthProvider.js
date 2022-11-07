import React, { createContext, useLayoutEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";
import app from "../../Firebase/firebaseconfig/Firebase.config";

// Auth context
export const AuthContext = createContext();
const auth = getAuth(app);
// Google provaider
const googleProvider = new GoogleAuthProvider();
const facebookprovider = new FacebookAuthProvider();
const gitHubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
  // react useState
  const [thim, setThim] = useState(false);
  const [currentUser, setCorrentUser] = useState(null);

  // Crete User Google email adn password
  const handelEmailAndPassword = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Google sing in google provider
  const handelGoogleSingIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  //Git hub sing in and Login function
  const handelGitHubLogin = () => {
    return signInWithPopup(auth, gitHubProvider);
  };
  // Facebook Login function
  const handelFacebookLogin = () => {
    return signInWithPopup(auth, facebookprovider);
  };

  // current user track function
  useLayoutEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currenUser) => {
      setCorrentUser(currenUser);
      console.log(currenUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  const AuthContextInfo = {
    thim,
    setThim,
    handelEmailAndPassword,
    handelGoogleSingIn,
    handelFacebookLogin,
    handelGitHubLogin,
  };
  return (
    <AuthContext.Provider value={AuthContextInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
