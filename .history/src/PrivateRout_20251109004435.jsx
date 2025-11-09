import React, { useContext } from 'react';
import { AuthContext } from './AuthProvidor';
import { useLocation } from 'react-router-dom';

const PrivateRout = () => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return 
    }
    return (
        <div>
            
        </div>
    );
};

export default PrivateRout;