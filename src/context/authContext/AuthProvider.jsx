import React, { Children, useEffect } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../../firebase/firebase.init";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = () => {
  const registerUSer = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signinUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signinGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const logOut = () => {
    // setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      //   setUser(currentUser);
      // setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    registerUSer,
    signinUser,
    signinGoogle,
    logOut,
  };

  return <AuthContext value={authInfo}>{Children}</AuthContext>;
};

export default AuthProvider;
