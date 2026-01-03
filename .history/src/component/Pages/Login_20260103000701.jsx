import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'; 
import { AuthContext } from '../../AuthProvidor'; 
import { FcGoogle } from 'react-icons/fc';

const Login = () => {

    const { LoginUser, googleLogin } = useContext(AuthContext);
    const navigate = useNavigate();

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
                setTimeout(() => {
                    navigate("/")
                }, 1500);
            })
            .catch((err) => {
                toast.error(err.message);
                console.log(err)
            })
    }

    const handleGoogleLogin = () => {
        googleLogin()
            .then(() => {
                toast.success("Google login successful!");
                setTimeout(() => {
                    navigate("/")
                }, 2000);
            })
            .catch((err) => toast.error(err.message));
    }

    
    const handleDemoLogin = () => {
        const demoEmail = "guest@demo.com"; 
        const demoPass = "123456";

        LoginUser(demoEmail, demoPass)
            .then(() => {
                toast.success("Guest Login successful!");
                setTimeout(() => {
                    navigate("/");
                }, 1500);
            })
            .catch((err) => {
                toast.error(err.message);
            });
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 border rounded shadow">
            <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">
                Login
            </h2>
            <form onSubmit={handleLogin} className="space-y-3">
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="w-full border p-2 rounded dark:bg-gray-800 dark:text-white"
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="w-full border p-2 rounded dark:bg-gray-800 dark:text-white"
                    required
                />
                <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded w-full hover:bg-blue-700 transition"
                >
                    Login
                </button>
            </form>

            {/* --- Demo Button Added Here --- */}
            <div className="mt-3">
                <button
                    onClick={handleDemoLogin}
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-200"
                >
                    Guest / Demo Login
                </button>
            </div>

            <div className="mt-3">
                <button
                    onClick={handleGoogleLogin}
                    className="flex items-center justify-center gap-2 border border-gray-300 rounded w-full py-2 hover:bg-gray-50 transition"
                >
                    <FcGoogle size={22} /> <span>Continue with Google</span>
                </button>
            </div>

            <p className="text-center text-gray-600 mt-3">
                New here?{" "}
                <Link to="/register" className="text-blue-600">
                    Register
                </Link>
            </p>

        </div>
    );
};

export default Login;