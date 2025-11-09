import React, { useContext } from 'react';
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from '../../AuthProvidor';

const Navbar = () => {
    const { user, logOutUser } = useContext(AuthContext);
    // const user = null; 
    return (
        <div className="bg-white shadow-md sticky top-0 z-10 py-5">
            <div className="max-w-6xl mx-auto flex flex-wrap justify-between items-center px-4">
               
                <Link
                    to="/"
                    className="text-xl sm:text-2xl font-bold text-blue-600 mb-2 sm:mb-0"
                >
                    SocialEvents
                </Link>

                
                <div className="flex flex-wrap justify-center sm:justify-end items-center gap-3 sm:gap-5 w-full sm:w-auto">
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
                    <NavLink
                        to="/event"
                        className={({ isActive }) =>
                            isActive ? "text-blue-600 font-semibold" : "text-gray-600"
                        }
                    >
                        Event Details
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
                                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border cursor-pointer"
                                />
                                <span className="absolute left-1/2 -translate-x-1/2 top-[42px] bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
                                    {user?.displayName || "User"}
                                </span>
                            </div>

                            <button
                                onClick={logOutUser}
                                className="bg-blue-600 text-white px-3 py-1 rounded text-sm sm:text-base"
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <Link
                            to="/login"
                            className="bg-blue-600 text-white px-4 py-1 rounded text-sm sm:text-base"
                        >
                            Login
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;