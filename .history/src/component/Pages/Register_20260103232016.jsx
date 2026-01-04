import React, { useContext, useState } from 'react';
import { AuthContext } from '../../AuthProvidor';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { updateProfile } from 'firebase/auth';
import { auth } from '../../firebase.init';
import axios from 'axios';

const Register = () => {
    const { registerUser, logOutUser } = useContext(AuthContext); // logOutUser দরকার হতে পারে
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;

        // পাসওয়ার্ড ভ্যালিডেশন
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
        setError(""); // এরর ক্লিয়ার করা হলো

        registerUser(email, password)
            .then((result) => {
                const user = result.user;

                // ১. ফায়ারবেস প্রোফাইল আপডেট
                updateProfile(user, {
                    displayName: name,
                    photoURL: photo
                })
                    .then(() => {
                        // ২. ডাটাবেসে ইউজার সেভ করা (ফটোসহ)
                        const userInfo = {
                            name: name,
                            email: email,
                            photo: photo, // ✅ এই লাইনটা মিসিং ছিল, এখন ঠিক করা হলো
                            role: 'user'
                        };

                        axios.post('https://social-events-server-hazel.vercel.app/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    toast.success("Registration successful!");
                                    form.reset();

                                    // ৩. অটোমেটিক লগআউট না করে সরাসরি হোমে পাঠিয়ে দিচ্ছি
                                    // পেজটা রিলোড দিলে ছবি সাথে সাথে আপডেট হয়ে যাবে
                                    navigate("/");
                                    window.location.reload();
                                }
                            })
                            .catch(err => console.error("Database Error:", err));
                    })
                    .catch((error) => {
                        console.log("profile update error", error);
                    });
            })
            .catch((err) => {
                toast.error(err.message);
            })
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 py-12 px-4">
            <div className="max-w-md w-full space-y-8 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-2xl">
                <h2 className="text-3xl font-bold mb-4 text-center text-blue-600 dark:text-blue-400">
                    Register
                </h2>
                <form onSubmit={handleRegister} className="space-y-4">
                    <input type="text" name="name" placeholder="Full Name" className="w-full border p-3 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none" required />
                    <input type="email" name="email" placeholder="Email Address" className="w-full border p-3 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none" required />
                    <input type="text" name="photo" placeholder="Photo URL (e.g. imgbb link)" className="w-full border p-3 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none" required />
                    <input type="password" name="password" placeholder="Password" className="w-full border p-3 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none" required />

                    {error && <p className="text-red-500 text-sm font-medium">{error}</p>}

                    <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg w-full transition duration-300">Register</button>
                </form>
                <p className="text-center dark:text-gray-300 text-gray-600 mt-4">
                    Already have an account? <Link to="/login" className="text-blue-600 hover:underline font-semibold">Login</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;