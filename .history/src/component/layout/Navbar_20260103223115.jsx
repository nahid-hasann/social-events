import React, { useContext } from 'react';
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from '../../AuthProvidor'; // পাথ চেক করবেন
import ThemeToggle from '../Pages/ThemeToggle'; // পাথ চেক করবেন
import { motion } from "framer-motion";

const Navbar = () => {
    const { user, logOutUser } = useContext(AuthContext);

    // কমন স্টাইল যাতে কোড ক্লিন থাকে
    const navLinkStyle = ({ isActive }) =>
        isActive ? "text-blue-600 font-bold underline decoration-2 underline-offset-4" : "text-gray-600 hover:text-blue-500 font-medium transition";

    return (
        <div className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50 py-4 transition-colors duration-300">
            <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center px-4">

                {/* --- Logo --- */}
                <Link
                    to="/"
                    className="text-2xl font-bold text-blue-600 dark:text-blue-400 flex items-center gap-2"
                >
                    SocialEvents
                </Link>


                {/* --- Menu Items --- */}
                <div className="flex flex-wrap items-center gap-4 sm:gap-6 mt-4 sm:mt-0">

                    <NavLink to="/" className={navLinkStyle}>
                        Home
                    </NavLink>

                    <NavLink to="/events" className={navLinkStyle}>
                        Upcoming Events
                    </NavLink>

                    <NavLink to="/about" className={navLinkStyle}>
                        About Us
                    </NavLink>

                    <NavLink to="/contact" className={navLinkStyle}>
                        Contact Us
                    </NavLink>

                    {/* Dashboard Link (Only visible if logged in) */}
                    {user && (
                        <NavLink to="/dashboard/user-home" className={navLinkStyle}>
                            Dashboard
                        </NavLink>
                    )}
                </div>


                {/* --- User Actions & Theme --- */}
                <div className="flex items-center gap-4 mt-4 sm:mt-0">

                    <ThemeToggle />

                    {user ? (
                        <>
                            {/* User Profile Image & Tooltip (Dropdown Removed) */}
                            <div className="relative group">
                                <img
                                    src={user?.photoURL}
                                    alt="User"
                                    referrerPolicy="no-referrer"
                                    className="w-10 h-10 rounded-full border-2 border-blue-100 cursor-pointer object-cover"
                                />

                                {/* Tooltip (User Name) */}
                                <span className="absolute 
                                    opacity-0 group-hover:opacity-100 
                                    transition-opacity duration-300
                                    bg-gray-800 text-white text-xs 
                                    rounded py-1 px-2 
                                    top-[110%] left-1/2 -translate-x-1/2 
                                    whitespace-nowrap z-50">
                                    {user?.displayName || "User"}
                                </span>
                            </div>

                            {/* Logout Button */}
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={logOutUser}
                                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium transition"
                            >
                                Logout
                            </motion.button>
                        </>
                    ) : (
                        // Login Button
                        <Link to="/login">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md text-sm font-medium transition"
                            >
                                Login
                            </motion.button>
                        </Link>
                    )}

                </div>
            </div>
        </div>
    );
};

export default Navbar;