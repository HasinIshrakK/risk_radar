import React, { useEffect, useState } from "react";
import { doc, getDoc, setDoc } from "firebase/firestore";
import auth, { db } from "../../firebase/firebase.config";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // NEW: Safe email for Firestore doc ID
  const getSafeEmail = (email) => email.replace(/\./g, "_");

  const trackLoginAttempt = async (email, isSuccess) => {
    const safeEmail = getSafeEmail(email);
    const userRef = doc(db, "loginAttempts", safeEmail);
    const userDoc = await getDoc(userRef);

    //  Optimized data fallback
    const data = userDoc.exists()
      ? userDoc.data()
      : { failedAttempts: 0, lockUntil: null };

    if (isSuccess) {
      //  Reset on successful login
      await setDoc(
        userRef,
        { failedAttempts: 0, lockUntil: null },
        { merge: true },
      );
    } else {
      const failedAttempts = data.failedAttempts + 1;
      let lockUntil = null;

      //  Lock after 5 failed attempts
      if (failedAttempts >= 5) {
        lockUntil = Date.now() + 15 * 60 * 1000; // 15 min lock
      }

      await setDoc(userRef, { failedAttempts, lockUntil }, { merge: true });

      return { failedAttempts, lockUntil };
    }
  };

  // user lock check
  const checkLockStatus = async (email) => {
    const safeEmail = getSafeEmail(email); // 🔁 UPDATED
    const userRef = doc(db, "loginAttempts", safeEmail);
    const userDoc = await getDoc(userRef);

    if (userDoc.exists()) {
      const { lockUntil } = userDoc.data();
      if (lockUntil && Date.now() < lockUntil) {
        return {
          isLocked: true,
          remainingTime: Math.ceil((lockUntil - Date.now()) / 60000),
        };
      }
    }
    return { isLocked: false };
  };

  const registerUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signinUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signinGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const signinGithub = () => {
    // setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };

  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      console.log(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const authInfo = {
    user,
    setUser,
    loading,
    registerUser,
    signinUser,
    signinGoogle,
    signinGithub,
    resetPassword,
    logOut,
    trackLoginAttempt,
    checkLockStatus,
    // user,
    // loading,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
