import React, { useContext } from 'react';
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from '../../AuthProvidor';

const Navbar = () => {
    const { user, logOutUser } = useContext(AuthContext);
    // const user = null; 
    return (
        <div>
            <div className="bg-white shadow-md sticky py-[10px] top-0 z-10">
                <div className="max-w-6xl mx-auto flex justify-between  items-center py-3 px-5">
                    {/* Logo / Site Name */}
                    <Link to="/" className="text-2xl font-bold text-blue-600">
                        SocialEvents
                    </Link>

                    {/* Navigation Links */}
                    <div className="flex items-center gap-5">
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
                                <div className="relative group">
                                    <img
                                        src={user?.photoURL}
                                        alt="User"
                                        referrerPolicy="no-referrer"
                                        className="w-9 h-9 rounded-full border cursor-pointer"
                                    />
                                    <span className=" bottom-11 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
                                        {user?.displayName || "User"}
                                    </span>
                                </div>
                                <button onClick={logOutUser} className="bg-blue-600 text-white px-3 py-1 rounded">
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
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;