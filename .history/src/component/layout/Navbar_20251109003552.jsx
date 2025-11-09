import React from 'react';
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const 
    const user = null; 
    return (
        <div>
            <div className="bg-white shadow-md sticky top-0 z-10">
                <div className="max-w-6xl mx-auto flex justify-between items-center py-3 px-5">
                    {/* Logo / Site Name */}
                    <Link to="/" className="text-2xl font-bold text-blue-600">
                        SocialEvents
                    </Link>

                    {/* Navigation Links */}
                    <div className="flex gap-5">
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
                                <button className="bg-blue-600 text-white px-3 py-1 rounded">
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