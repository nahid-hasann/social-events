import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
// import { AuthContext } from '../../AuthProvidor'; // পাথ চেক করবেন
import { FcGoogle } from 'react-icons/fc';
import { FaUserShield, FaUserTie } from 'react-icons/fa';
import { AuthContext } from '../../AuthProvidor';
// import axiosPublic from '../../hooks/useAxiosPublic'; // আপনার axiosPublic হুক ব্যবহার করাই ভালো

const Login = () => {

    const { LoginUser, googleLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    // লগইন করার পর আগের পেজে বা হোমে নিয়ে যাবে
    const from = location.state?.from?.pathname || "/";

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        if (!email || !password) {
            toast.error("Please fill in both email and password!");
            return;
        }

        LoginUser(email, password)
            .then(() => {
                toast.success("Login successful!");
                navigate(from, { replace: true });
            })
            .catch((err) => {
                toast.error("Invalid Email or Password");
                console.log(err);
            })
    }

    // Google Login
    const handleGoogleLogin = () => {
        googleLogin()
            .then((result) => {
                const user = result.user;
                const userInfo = {
                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL,
                    role: 'user' // ডিফল্ট রোল
                };

                // ডাটাবেসে ইউজার সেভ করা (আপনার লাইভ সার্ভার লিংক useAxiosPublic এ থাকলে ভালো)
                // অথবা সরাসরি axios.post('YOUR_SERVER_LINK/users', userInfo)
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        toast.success("Google login successful!");
                        navigate(from, { replace: true });
                    });
            })
            .catch((err) => toast.error(err.message));
    }

    // --- ১. ডেমো ইউজার লগইন ফাংশন ---
    const handleUserDemo = () => {
        const email = "user@demo.com"; // এই ইমেইলে ফায়ারবেসে একাউন্ট থাকতে হবে
        const pass = "123456";

        LoginUser(email, pass)
            .then(() => {
                toast.success("Logged in as Demo User!");
                navigate(from, { replace: true });
            })
            .catch((err) => toast.error("Demo User credentials not found!"));
    };

    // --- ২. ডেমো এডমিন লগইন ফাংশন ---
    const handleAdminDemo = () => {
        const email = "admin@demo.com"; // এই ইমেইলে একাউন্ট থাকতে হবে এবং DB তে role: 'admin' থাকতে হবে
        const pass = "123456";

        LoginUser(email, pass)
            .then(() => {
                toast.success("Logged in as Demo Admin!");
                // এডমিন লগইন করলে সরাসরি ড্যাশবোর্ডে পাঠানো যেতে পারে
                navigate("/dashboard/admin-home");
            })
            .catch((err) => toast.error("Demo Admin credentials not found!"));
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-2xl">

                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
                        Welcome Back
                    </h2>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                        Sign in to access your account
                    </p>
                </div>

                {/* --- Demo Buttons Section --- */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                    <button
                        onClick={handleUserDemo}
                        className="flex flex-col items-center justify-center p-3 border border-blue-200 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors group"
                    >
                        <FaUserTie className="text-2xl text-blue-600 mb-1 group-hover:scale-110 transition-transform" />
                        <span className="text-sm font-bold text-blue-800">Demo User</span>
                    </button>

                    <button
                        onClick={handleAdminDemo}
                        className="flex flex-col items-center justify-center p-3 border border-purple-200 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors group"
                    >
                        <FaUserShield className="text-2xl text-purple-600 mb-1 group-hover:scale-110 transition-transform" />
                        <span className="text-sm font-bold text-purple-800">Demo Admin</span>
                    </button>
                </div>

                <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-white dark:bg-gray-800 text-gray-500">Or login with email</span>
                    </div>
                </div>

                <form onSubmit={handleLogin} className="mt-8 space-y-6">
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div className="mb-4">
                            <label className="sr-only">Email address</label>
                            <input
                                name="email"
                                type="email"
                                required
                                className="appearance-none rounded-lg relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                placeholder="Email address"
                            />
                        </div>
                        <div>
                            <label className="sr-only">Password</label>
                            <input
                                name="password"
                                type="password"
                                required
                                className="appearance-none rounded-lg relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                placeholder="Password"
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                        >
                            Sign in
                        </button>
                    </div>
                </form>

                <div className="mt-6">
                    <button
                        onClick={handleGoogleLogin}
                        className="w-full flex justify-center items-center gap-3 py-3 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                        <FcGoogle className="text-xl" />
                        <span>Continue with Google</span>
                    </button>
                </div>

                <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
                    Don't have an account?{' '}
                    <Link to="/register" className="font-medium text-blue-600 hover:text-blue-500">
                        Register here
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;