import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from './firebase.init';

export const AuthContext = createContext(null);


const AuthProvidor = ({children}) => {

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

    const logOutUser = () => {
      setLoading(true);
      return signOut(auth);
    }

    useEffect(() => {
       const unsubscribe = onAuthStateChanged(auth, )
    }, [])

    return (
        <div>
            
        </div>
    );
};

export default AuthProvidor;