import React from 'react';
import { Link } from 'react-router-dom';

const Errorr = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen text-center">
            <h1 className="text-4xl font-bold mb-4 text-red-600">404</h1>
            <p className="text-gray-600 mb-6">Page Not Found</p>
            <Link to="/" className="text-blue-600 underline">Go Back Home</Link>
        </div>
    );
};

export default Error;