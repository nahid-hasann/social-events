import React, { useContext } from 'react';
import { AuthContext } from './AuthProvidor';
import { useLocation } from 'react-router-dom';

const PrivateRout = () => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <p className="text-center mt-20">Loading...</p>;
    }
    if(user){
        
    }
    return (
        <div>
            
        </div>
    );
};

export default PrivateRout;