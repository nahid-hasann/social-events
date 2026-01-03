import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from './firebase.init';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

export const AuthContext = createContext(null);

const googleprovider = new GoogleAuthProvider();

const AuthProvidor = ({ children }) => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const registerUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const LoginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleprovider);
  }

  const logOutUser = () => {
    setLoading(true);
    return signOut(auth);
  }

  // --- আপডেট করা useEffect ---
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

      // যদি ইউজার লগইন অবস্থায় থাকে
      if (currentUser) {
        // ১. ফায়ারবেস থেকে টোকেন নিচ্ছি
        currentUser.getIdToken(true)
          .then(token => {
            // ২. লোকাল স্টোরেজে সেভ করছি
            localStorage.setItem('access-token', token);
            setLoading(false);
          })
      }
      else {
        // ইউজার না থাকলে টোকেন মুছে ফেলছি
        localStorage.removeItem('access-token');
        setLoading(false);
      }
    });
    return () => unsubscribe();
  }, [])

  const authInfo = {
    user,
    loading,
    registerUser,
    LoginUser,
    logOutUser,
    googleLogin
  }

  return (
    <AuthContext.Provider value={authInfo} >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvidor;