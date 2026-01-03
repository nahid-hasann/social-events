import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvidor';
// import { AuthContext } from '../../AuthProvidor'; // পাথ চেক করবেন

const UserHome = () => {
    const { user } = useContext(AuthContext);

    return (
        <div className="w-full p-6">
            <h2 className="text-3xl font-bold mb-6 text-blue-600">
                Hi, Welcome Back!
            </h2>

            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 flex flex-col items-center text-center max-w-lg mx-auto">
                <div className="avatar mb-4">
                    <div className="w-32 rounded-full ring ring-blue-500 ring-offset-base-100 ring-offset-2">
                        <img src={user?.photoURL} alt="User Profile" />
                    </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-800">{user?.displayName}</h3>
                <p className="text-gray-500 mb-6">{user?.email}</p>

                <div className="w-full border-t border-gray-200 pt-6">
                    <h4 className="text-lg font-semibold text-gray-700 mb-2">Profile Status</h4>
                    <span className="px-4 py-2 rounded-full bg-blue-100 text-blue-800 font-semibold text-sm">
                        Active User
                    </span>
                </div>
            </div>
        </div>
    );
};

export default UserHome;