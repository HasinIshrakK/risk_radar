import React, { Children } from "react";
import { AuthContext } from "./AuthContext";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase.init";

const AuthProvider = () => {
  const registerUSer = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const authInfo = {
    registerUSer,
  };

  return <AuthContext value={authInfo}>{Children}</AuthContext>;
};

export default AuthProvider;
