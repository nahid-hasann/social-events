import React from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

const Login = () => {

    
    const handleLogin = () => {
      
    }
    return (
        <div className="max-w-md mx-auto mt-10 p-6 border rounded shadow">
            <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">
                Login
            </h2>
            <form onSubmit={handleLogin} className="space-y-3">
                <input type="email" name="email" placeholder="Email" className="w-full border p-2 rounded" required />
                <input type="password" name="password" placeholder="Password" className="w-full border p-2 rounded" required />
                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded w-full">Login</button>
            </form>
            <p className="text-center text-gray-600 mt-3">
                New here? <Link to="/register" className="text-blue-600">Register</Link>
            </p>
            <ToastContainer position="top-center" />
        </div>
    );
};

export default Login;