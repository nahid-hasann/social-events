import React, { createContext, useState } from 'react';

export const AuthContext = createContext(null);


const AuthProvidor = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const registerUser = 

    return (
        <div>
            
        </div>
    );
};

export default AuthProvidor;