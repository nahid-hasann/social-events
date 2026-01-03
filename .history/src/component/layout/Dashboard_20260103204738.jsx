import React, { useContext } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaHome, FaUsers, FaCalendarAlt, FaPlusCircle, FaList, FaHandshake } from 'react-icons/fa';
import useAdmin from '../../useAdmin';
// import useAdmin from '../../hooks/useAdmin';
// import { AuthContext } from '../../AuthProvidor';

const Dashboard = () => {
    // এই user এখন নিচে ব্যবহার হবে, তাই লাল দাগ আর থাকবে না
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin();

    return (
        <div className="flex h-screen bg-gray-100 dark:bg-gray-900">

            <div className="w-64 bg-blue-700 text-white flex flex-col">
                {/* --- আপডেটেড সেকশন শুরু --- */}
                <div className="p-6 border-b border-blue-600">
                    <h1 className="text-2xl font-bold mb-4">SocialEvents</h1>

                    {/* এখানে user ব্যবহার করা হয়েছে */}
                    {user && (
                        <div className="flex items-center gap-3">
                            <img
                                src={user.photoURL}
                                alt="User"
                                className="w-10 h-10 rounded-full border-2 border-white"
                            />
                            <div>
                                <p className="text-sm font-semibold">{user.displayName}</p>
                                <p className="text-xs text-blue-200 capitalize">{isAdmin ? 'Admin' : 'User'}</p>
                            </div>
                        </div>
                    )}
                </div>
                {/* --- আপডেটেড সেকশন শেষ --- */}

                <nav className="flex-1 p-4 space-y-2">
                    {/* ... আপনার বাকি মেনু কোড যেমন আছে তেমনই থাকবে ... */}
                    {
                        isAdmin ? (
                            <>
                                <NavLink to="/dashboard/admin-home" className={({ isActive }) => `flex items-center gap-3 p-3 rounded transition ${isActive ? 'bg-blue-800' : 'hover:bg-blue-600'}`}>
                                    <FaHome /> Admin Home
                                </NavLink>
                                <NavLink to="/dashboard/all-users" className={({ isActive }) => `flex items-center gap-3 p-3 rounded transition ${isActive ? 'bg-blue-800' : 'hover:bg-blue-600'}`}>
                                    <FaUsers /> Manage Users
                                </NavLink>
                                <NavLink to="/dashboard/all-events" className={({ isActive }) => `flex items-center gap-3 p-3 rounded transition ${isActive ? 'bg-blue-800' : 'hover:bg-blue-600'}`}>
                                    <FaCalendarAlt /> All Events
                                </NavLink>
                            </>
                        ) : (
                            <>
                                <NavLink to="/dashboard/user-home" className={({ isActive }) => `flex items-center gap-3 p-3 rounded transition ${isActive ? 'bg-blue-800' : 'hover:bg-blue-600'}`}>
                                    <FaHome /> User Home
                                </NavLink>
                                <NavLink to="/dashboard/add-event" className={({ isActive }) => `flex items-center gap-3 p-3 rounded transition ${isActive ? 'bg-blue-800' : 'hover:bg-blue-600'}`}>
                                    <FaPlusCircle /> Add Event
                                </NavLink>
                                <NavLink to="/dashboard/my-events" className={({ isActive }) => `flex items-center gap-3 p-3 rounded transition ${isActive ? 'bg-blue-800' : 'hover:bg-blue-600'}`}>
                                    <FaList /> My Events
                                </NavLink>
                                <NavLink to="/dashboard/joined-events" className={({ isActive }) => `flex items-center gap-3 p-3 rounded transition ${isActive ? 'bg-blue-800' : 'hover:bg-blue-600'}`}>
                                    <FaHandshake /> Joined Events
                                </NavLink>
                            </>
                        )
                    }

                    <div className="border-t border-blue-600 my-4 pt-4">
                        <NavLink to="/" className="flex items-center gap-3 p-3 rounded hover:bg-blue-600 transition">
                            <FaHome /> Home Page
                        </NavLink>
                    </div>
                </nav>
            </div>

            <div className="flex-1 overflow-y-auto p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;