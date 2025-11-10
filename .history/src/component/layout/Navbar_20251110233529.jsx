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

                   
                </div>
            </div>
        </div>
    );
};

export default Navbar;