import React, { useContext } from 'react';
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from '../../AuthProvidor';

const Navbar = () => {
    const { user, logOutUser } = useContext(AuthContext);
    // const user = null; 
    return (
        <header className="bg-white shadow-md sticky top-0 z-10">
            <div className="max-w-6xl mx-auto flex justify-between items-center py-3 px-5">
                {/* ✅ Logo */}
                <Link to="/" className="text-2xl font-bold text-blue-600">
                    SocialEvents
                </Link>

                {/* ✅ Mobile menu toggle button */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden text-2xl text-blue-600 focus:outline-none"
                >
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </button>

                {/* ✅ Desktop Menu */}
                <nav className="hidden md:flex items-center gap-5">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? "text-blue-600 font-semibold" : "text-gray-600"
                        }
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/events"
                        className={({ isActive }) =>
                            isActive ? "text-blue-600 font-semibold" : "text-gray-600"
                        }
                    >
                        Upcoming Events
                    </NavLink>

                    {user ? (
                        <>
                            <NavLink
                                to="/create-event"
                                className={({ isActive }) =>
                                    isActive ? "text-blue-600 font-semibold" : "text-gray-600"
                                }
                            >
                                Create Event
                            </NavLink>
                            <NavLink
                                to="/joined"
                                className={({ isActive }) =>
                                    isActive ? "text-blue-600 font-semibold" : "text-gray-600"
                                }
                            >
                                Joined Events
                            </NavLink>

                            {/* ✅ Profile photo + hover name */}
                            <div className="relative group">
                                <img
                                    src={user?.photoURL}
                                    alt="User"
                                    referrerPolicy="no-referrer"
                                    className="w-9 h-9 rounded-full border cursor-pointer"
                                />
                                <span className="absolute left-1/2 transform -translate-x-1/2 top-[42px] bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
                                    {user?.displayName || "User"}
                                </span>
                            </div>

                            <button
                                onClick={handleLogout}
                                className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition"
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <Link
                            to="/login"
                            className="bg-blue-600 text-white px-4 py-1 rounded"
                        >
                            Login
                        </Link>
                    )}
                </nav>
            </div>

            {/* ✅ Mobile dropdown menu */}
            {menuOpen && (
                <div className="md:hidden bg-white border-t shadow-md py-4">
                    <div className="flex flex-col items-center gap-4">
                        <NavLink
                            to="/"
                            onClick={() => setMenuOpen(false)}
                            className={({ isActive }) =>
                                isActive ? "text-blue-600 font-semibold" : "text-gray-600"
                            }
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/events"
                            onClick={() => setMenuOpen(false)}
                            className={({ isActive }) =>
                                isActive ? "text-blue-600 font-semibold" : "text-gray-600"
                            }
                        >
                            Upcoming Events
                        </NavLink>

                        {user ? (
                            <>
                                <NavLink
                                    to="/create-event"
                                    onClick={() => setMenuOpen(false)}
                                    className={({ isActive }) =>
                                        isActive ? "text-blue-600 font-semibold" : "text-gray-600"
                                    }
                                >
                                    Create Event
                                </NavLink>
                                <NavLink
                                    to="/joined"
                                    onClick={() => setMenuOpen(false)}
                                    className={({ isActive }) =>
                                        isActive ? "text-blue-600 font-semibold" : "text-gray-600"
                                    }
                                >
                                    Joined Events
                                </NavLink>

                                {/* Mobile profile photo */}
                                <div className="flex flex-col items-center">
                                    <img
                                        src={user?.photoURL}
                                        alt="User"
                                        className="w-10 h-10 rounded-full border mb-1"
                                        referrerPolicy="no-referrer"
                                    />
                                    <p className="text-sm text-gray-700">
                                        {user?.displayName || "User"}
                                    </p>
                                </div>

                                <button
                                    onClick={() => {
                                        handleLogout();
                                        setMenuOpen(false);
                                    }}
                                    className="bg-blue-600 text-white px-4 py-1 rounded"
                                >
                                    Logout
                                </button>
                            </>
                        ) : (
                            <Link
                                to="/login"
                                onClick={() => setMenuOpen(false)}
                                className="bg-blue-600 text-white px-4 py-1 rounded"
                            >
                                Login
                            </Link>
                        )}
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;