import React, { useContext, useState } from 'react';
import { AuthContext } from '../../AuthProvidor';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { updateProfile } from 'firebase/auth';
import { auth } from '../../firebase.init';
import axios from 'axios'; // ১. Axios ইম্পোর্ট করা হলো

const Register = () => {
    const { registerUser } = useContext(AuthContext);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;

        if (!/(?=.*[A-Z])/.test(password)) {
            setError("Must contain an uppercase letter");
            return;
        }
        if (!/(?=.*[a-z])/.test(password)) {
            setError("Must contain a lowercase letter");
            return;
        }
        if (password.length < 6) {
            setError("Must be at least 6 characters long");
            return;
        }

        registerUser(email, password)
            .then((result) => {

                updateProfile(auth.currentUser, {
                    displayName: name,
                    photoURL: photo
                })
                    .then(() => {
                        // --- ২. ডাটাবেসে ইউজার সেভ করা ---
                        const userInfo = {
                            name: name,
                            email: email,
                            role: 'user' // ডিফল্ট রোল
                        };

                        // ⚠️ গুরত্বপূর্ণ: নিচের লিংকের জায়গায় আপনার Vercel এর লিংক বসান
                        axios.post('zapshift-server-coral.vercel.app/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    console.log("User added to database");
                                }
                            })
                            .catch(err => console.error("Database Error:", err));
                        // ------------------------------------

                        return auth.currentUser.reload();
                    })
                    .then(() => {
                        return auth.signOut();
                    })
                    .then(() => {
                        toast.success("Registration successful! Please Login.");
                        form.reset();
                        setTimeout(() => {
                            navigate("/login");
                        }, 1500);
                    }).catch((error) => {
                        console.log("profile update error", error);
                    })
            })
            .catch((err) => {
                toast.error(err.message);
            })
    }

    return (
        <div className="max-w-md mx-auto my-auto mt-10 p-6 border rounded shadow">
            <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">
                Register
            </h2>
            <form onSubmit={handleRegister} className="space-y-3">
                <input type="text" name="name" placeholder="Name" className="w-full border p-2 rounded dark:bg-gray-800 dark:text-white" required />
                <input type="email" name="email" placeholder="Email" className="w-full border p-2 rounded dark:bg-gray-800 dark:text-white" required />
                <input type="text" name="photo" placeholder="Photo URL" className="w-full border p-2 rounded dark:bg-gray-800 dark:text-white" required />
                <input type="password" name="password" placeholder="Password" className="w-full border p-2 rounded dark:bg-gray-800 dark:text-white" required />
                {error && <p className="text-red-500 text-sm">{error}</p>}
                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded w-full">Register</button>
            </form>
            <p className="text-center dark:text-white text-gray-600 mt-3">
                Already have an account? <Link to="/login" className="text-blue-600">Login</Link>
            </p>
            <ToastContainer position="top-center" />
        </div>
    );
};

export default Register;