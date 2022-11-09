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
  const [sliderItem, setSliderItem] = useState({});
  const [selectSliderItem, setSelectSliderItem] = useState(true);
  const [servicesdata, setServicesdata] = useState([]);
  const [loading, setLoading] = useState(true);

  const Nodata = "No data Found";

  // Crete User Google email adn password
  const handelEmailAndPassword = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Login function
  const handelLoginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Google sing in google provider
  const handelGoogleSingIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  //Git hub sing in and Login function
  const handelGitHubLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, gitHubProvider);
  };
  // Facebook Login function
  const handelFacebookLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, facebookprovider);
  };

  // User Logout user
  const userLogOut = () => {
    // console.log("hello");
    setLoading(true);
    return signOut(auth);
  };

  // current user track function
  useLayoutEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currenUser) => {
      setCorrentUser(currenUser);
      // console.log(currenUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  const AuthContextInfo = {
    thim,
    setThim,
    currentUser,
    handelEmailAndPassword,
    handelLoginUser,
    handelGoogleSingIn,
    handelFacebookLogin,
    handelGitHubLogin,
    userLogOut,
    sliderItem,
    setSliderItem,
    selectSliderItem,
    setSelectSliderItem,
    Nodata,
    servicesdata,
    setServicesdata,
    loading,
    setLoading,
  };
  return (
    <AuthContext.Provider value={AuthContextInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
