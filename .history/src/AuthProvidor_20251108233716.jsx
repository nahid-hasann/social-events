import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import React, { createContext, useState } from 'react';
import { auth } from './firebase.init';

export const AuthContext = createContext(null);


const AuthProvidor = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const registerUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const LoginUser = () => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email,)
    }

    return (
        <div>
            
        </div>
    );
};

export default AuthProvidor;