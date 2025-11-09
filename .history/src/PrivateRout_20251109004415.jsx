import React, { useContext } from 'react';
import { AuthContext } from './AuthProvidor';

const PrivateRout = () => {
    const {user, loading} = useContext(AuthContext);
    const location = 
    return (
        <div>
            
        </div>
    );
};

export default PrivateRout;