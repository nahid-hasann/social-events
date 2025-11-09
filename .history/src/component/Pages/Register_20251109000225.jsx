import React, { useContext, useState } from 'react';
import { AuthContext } from '../../AuthProvidor';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

const Register = () => {
    const { registerUser } = useContext(AuthContext);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleRegister = (e) => {
      e.preventDefault();
      const form = e.target;
      const name = form.name
    }

    return (
        <div className="max-w-md mx-auto my-auto mt-10 p-6 border rounded shadow">
            <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">
                Register
            </h2>
            <form onSubmit={handleRegister} className="space-y-3">
                <input type="text" name="name" placeholder="Name" className="w-full border p-2 rounded" required />
                <input type="email" name="email" placeholder="Email" className="w-full border p-2 rounded" required />
                <input type="text" name="photo" placeholder="Photo URL" className="w-full border p-2 rounded" required />
                <input type="password" name="password" placeholder="Password" className="w-full border p-2 rounded" required />
                {error && <p className="text-red-500 text-sm">{error}</p>}
                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded w-full">Register</button>
            </form>
            <p className="text-center text-gray-600 mt-3">
                Already have an account? <Link to="/login" className="text-blue-600">Login</Link>
            </p>
            <ToastContainer position="top-center" />
        </div>
    );
};

export default Register;