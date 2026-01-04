import React, { useContext, useState } from 'react';
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from '../../AuthProvidor';
import ThemeToggle from '../Pages/ThemeToggle';
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const { user, logOutUser } = useContext(AuthContext);
    const [isOpen, setIsOpen] = useState(false);


    const defaultAvatar = "https://i.ibb.co/T0h2025/man.png";

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const navLinkStyle = ({ isActive }) =>
        isActive
            ? "text-blue-600 font-bold underline decoration-2 underline-offset-4 block py-2 md:py-0"
            : "text-gray-600 hover:text-blue-500 font-medium transition block py-2 md:py-0";

    return (
        <nav className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">

              
                    <div className="flex-shrink-0">
                        <Link to="/" className="text-2xl font-bold text-blue-600 dark:text-blue-400 flex items-center gap-2">
                            SocialEvents
                        </Link>
                    </div>

                   
                    <div className="hidden md:flex items-center space-x-6">
                        <NavLink to="/" className={navLinkStyle}>Home</NavLink>
                        <NavLink to="/events" className={navLinkStyle}>Upcoming Events</NavLink>
                        <NavLink to="/about" className={navLinkStyle}>About Us</NavLink>
                        <NavLink to="/contact" className={navLinkStyle}>Contact Us</NavLink>
                        {user && (
                            <NavLink to="/dashboard/user-home" className={navLinkStyle}>Dashboard</NavLink>
                        )}
                    </div>

                   
                    <div className="hidden md:flex items-center space-x-4">
                        <ThemeToggle />

                        {user ? (
                            <>
                                <div className="relative group flex items-center gap-2">
                                    
                                    <img
                                        src={user?.photoURL || defaultAvatar}
                                        onError={(e) => { e.target.src = defaultAvatar; }}
                                        alt="User"
                                        referrerPolicy="no-referrer"
                                        className="w-10 h-10 rounded-full border-2 border-blue-100 object-cover cursor-pointer"
                                    />
                                  
                                    <span className="absolute opacity-0 group-hover:opacity-100 transition-opacity bg-gray-800 text-white text-xs rounded py-1 px-2 top-[115%] left-1/2 -translate-x-1/2 whitespace-nowrap">
                                        {user?.displayName || "User"}
                                    </span>
                                </div>
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

                  
                    <div className="md:hidden flex items-center gap-4">
                        <ThemeToggle />
                        <button
                            onClick={toggleMenu}
                            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 focus:outline-none"
                        >
                            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* --- Mobile Dropdown Menu --- */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white dark:bg-gray-800 border-t dark:border-gray-700"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-2">
                            <NavLink to="/" onClick={() => setIsOpen(false)} className={navLinkStyle}>Home</NavLink>
                            <NavLink to="/events" onClick={() => setIsOpen(false)} className={navLinkStyle}>Upcoming Events</NavLink>
                            <NavLink to="/about" onClick={() => setIsOpen(false)} className={navLinkStyle}>About Us</NavLink>
                            <NavLink to="/contact" onClick={() => setIsOpen(false)} className={navLinkStyle}>Contact Us</NavLink>

                            {user && (
                                <NavLink to="/dashboard/user-home" onClick={() => setIsOpen(false)} className={navLinkStyle}>
                                    Dashboard
                                </NavLink>
                            )}

                            <div className="border-t dark:border-gray-700 my-2 pt-2"></div>

                            {user ? (
                                <div className="flex flex-col gap-3">
                                    <div className="flex items-center gap-3">
                                        {/* Mobile Image with Fallback */}
                                        <img
                                            src={user?.photoURL || defaultAvatar}
                                            onError={(e) => { e.target.src = defaultAvatar; }}
                                            alt="User"
                                            className="w-8 h-8 rounded-full object-cover"
                                        />
                                        <span className="text-gray-800 dark:text-white font-medium">{user?.displayName || "User"}</span>
                                    </div>
                                    <button
                                        onClick={() => { logOutUser(); setIsOpen(false); }}
                                        className="bg-red-500 text-white w-full py-2 rounded-md font-medium"
                                    >
                                        Logout
                                    </button>
                                </div>
                            ) : (
                                <Link to="/login" onClick={() => setIsOpen(false)}>
                                    <button className="bg-blue-600 text-white w-full py-2 rounded-md font-medium">
                                        Login
                                    </button>
                                </Link>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;