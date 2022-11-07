import React, { createContext, useState } from "react";
// import {
//   getAuth,
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   onAuthStateChanged,
//   signOut,
//   GoogleAuthProvider,
//   signInWithPopup,
//   FacebookAuthProvider,
//   GithubAuthProvider,
//   applyActionCode,
// } from "firebase/auth";
// import app from "../../Firebase/firebaseconfig/Firebase.config";

// Auth context
export const AuthContext = createContext();
// const auth = getAuth(app);
// Google provaider
// const googleProvider = new GoogleAuthProvider();
// const facebookprovider = new FacebookAuthProvider();
// const gitHubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
  // react useState
  const [thim, setThim] = useState(false);
  // const [currentUser, setCorrentUser] = useState(null);

  // Crete User Google email adn password
  // const handelEmailAndPassword = (email, password) => {
  //   return createUserWithEmailAndPassword(auth, email, password);
  // };

  // Login function
  // const handelLoginUser = (email, password) => {
  //   return signInWithEmailAndPassword(auth, email, password);
  // };

  // User Logout user
  // const userLogOut = () => {
  //   console.log("hello");
  //   return signOut(auth);
  // };

  // Google sing in google provider
  // const handelGoogleSingIn = () => {
  //   return signInWithPopup(auth, googleProvider);
  // };

  // Facebook Login function
  // const handelFacebookLogin = () => {
  //   return signInWithPopup(auth, facebookprovider);
  // };

  //Git hub sing in and Login function
  // const handelGitHubLogin = () => {
  //   return signInWithPopup(auth, gitHubProvider);
  // };

  // current user track function
  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (currenUser) => {
  //     setCorrentUser(currenUser);
  //     console.log(currenUser);
  //   });
  //   return () => {
  //     unsubscribe();
  //   };
  // }, []);

  const AuthContextInfo = {
    thim,
    setThim,
    // handelEmailAndPassword,
    // handelLoginUser,
    // userLogOut,
    // currentUser,
    // handelGoogleSingIn,
    // handelFacebookLogin,
    // handelGitHubLogin,
  };
  return (
    <AuthContext.Provider value={AuthContextInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
