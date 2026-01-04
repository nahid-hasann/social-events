import React, { useContext, useEffect, useState } from 'react';
import { FaUsers, FaCalendarAlt, FaChartBar } from 'react-icons/fa';
import axiosPublic from '../axiosPublic';
import { AuthContext } from '../AuthProvidor';

const AdminHome = () => {
    const { user } = useContext(AuthContext);
    const [stats, setStats] = useState({
        totalUsers: 0,
        totalEvents: 0
    });

    useEffect(() => {
        
        axiosPublic.get('/users')
            .then(res => {
                setStats(prev => ({ ...prev, totalUsers: res.data.length }));
            });

        
        axiosPublic.get('/events')
            .then(res => {
                setStats(prev => ({ ...prev, totalEvents: res.data.length }));
            });
    }, []);

    return (
        <div className="w-full p-6">
            
            <div className="mb-8 flex items-center gap-4 bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-600">
                <div className="avatar">
                    <div className="w-16 rounded-full ring ring-blue-600 ring-offset-base-100 ring-offset-2">
                        <img src={user?.photoURL} alt="Admin" />
                    </div>
                </div>
                <div>
                    <h2 className="text-3xl font-bold text-gray-800">
                        Welcome Back, {user?.displayName}!
                    </h2>
                    <p className="text-gray-500">Here's what's happening in your dashboard today.</p>
                </div>
            </div>

           
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

              
                <div className="bg-gradient-to-r from-purple-500 to-purple-700 rounded-lg p-6 text-white shadow-lg flex items-center justify-between">
                    <div>
                        <div className="text-4xl font-bold">{stats.totalUsers}</div>
                        <div className="text-sm opacity-80 mt-1">Total Users</div>
                    </div>
                    <div className="text-5xl opacity-30">
                        <FaUsers />
                    </div>
                </div>

              
                <div className="bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg p-6 text-white shadow-lg flex items-center justify-between">
                    <div>
                        <div className="text-4xl font-bold">{stats.totalEvents}</div>
                        <div className="text-sm opacity-80 mt-1">Total Events</div>
                    </div>
                    <div className="text-5xl opacity-30">
                        <FaCalendarAlt />
                    </div>
                </div>

               
                <div className="bg-gradient-to-r from-orange-400 to-orange-600 rounded-lg p-6 text-white shadow-lg flex items-center justify-between">
                    <div>
                        <div className="text-4xl font-bold">--</div>
                        <div className="text-sm opacity-80 mt-1">Site Activity</div>
                    </div>
                    <div className="text-5xl opacity-30">
                        <FaChartBar />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AdminHome;