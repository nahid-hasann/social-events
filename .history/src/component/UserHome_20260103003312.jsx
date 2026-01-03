import React, { useContext } from 'react';
// import { AuthContext } from '../../AuthProvidor'; // পাথ ঠিক করে নিবেন
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const UserHome = () => {
    const { user } = useContext(AuthContext);

    // ডামি ডাটা (পরে ডাটাবেস থেকে আসবে)
    const data = [
        { name: 'Cleaning', uv: 4000, pv: 2400, amt: 2400 },
        { name: 'Donation', uv: 3000, pv: 1398, amt: 2210 },
        { name: 'Planting', uv: 2000, pv: 9800, amt: 2290 },
        { name: 'Social', uv: 2780, pv: 3908, amt: 2000 },
    ];

    return (
        <div>
            <h2 className="text-3xl font-bold mb-5">
                Hi, Welcome back <span className="text-blue-600">{user?.displayName}</span>!
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* --- Profile Info --- */}
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600">
                    <div className="flex items-center gap-4">
                        <img src={user?.photoURL} alt="Profile" className="w-16 h-16 rounded-full border" />
                        <div>
                            <p className="text-gray-500">Email: {user?.email}</p>
                            <p className="text-gray-500">UID: {user?.uid}</p>
                        </div>
                    </div>
                </div>

                {/* --- Stats Card --- */}
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-600">
                    <h3 className="text-xl font-bold">Your Activities</h3>
                    <p className="text-4xl font-bold mt-2">05</p>
                    <p className="text-gray-500">Events Joined</p>
                </div>
            </div>

            {/* --- Chart Section --- */}
            <div className="mt-10 bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Event Analytics</h3>
                <div className="h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            width={500}
                            height={300}
                            data={data}
                            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="pv" fill="#8884d8" />
                            <Bar dataKey="uv" fill="#82ca9d" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default UserHome;