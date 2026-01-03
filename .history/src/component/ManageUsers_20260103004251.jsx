import React, { useEffect, useState } from 'react';
import { FaTrashAlt, FaUserShield } from 'react-icons/fa';
import { toast } from 'react-toastify';

const ManageUsers = () => {
    
    const [users, setUsers] = useState([]);

  
    useEffect(() => {
        setUsers([
            { _id: 1, name: "Rahim", email: "rahim@gmail.com", role: "user" },
            { _id: 2, name: "Karim", email: "karim@gmail.com", role: "admin" },
            { _id: 3, name: "Sokina", email: "sokina@gmail.com", role: "user" },
        ]);
    }, []);

    const handleMakeAdmin = (user) => {
      
        console.log("Make admin:", user.name);
        toast.success(`${user.name} is now an Admin!`);
    };

    const handleDeleteUser = (user) => {
        console.log("Delete:", user.name);
        toast.error("User Deleted!");
    };

    return (
        <div className="w-full px-4">
            <h2 className="text-3xl font-bold my-4">Total Users: {users.length}</h2>

            <div className="overflow-x-auto rounded-lg shadow-lg">
                <table className="table w-full border-collapse bg-white">
                    {/* head */}
                    <thead className="bg-blue-600 text-white">
                        <tr>
                            <th className="p-3 text-left">#</th>
                            <th className="p-3 text-left">Name</th>
                            <th className="p-3 text-left">Email</th>
                            <th className="p-3 text-center">Role</th>
                            <th className="p-3 text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={user._id} className="border-b hover:bg-gray-100">
                                <th className="p-3">{index + 1}</th>
                                <td className="p-3 font-semibold">{user.name}</td>
                                <td className="p-3">{user.email}</td>
                                <td className="p-3 text-center">
                                    {user.role === 'admin' ? (
                                        <span className="font-bold text-green-600">Admin</span>
                                    ) : (
                                        <button
                                            onClick={() => handleMakeAdmin(user)}
                                            className="btn btn-sm bg-orange-500 text-white p-2 rounded hover:bg-orange-600"
                                            title="Make Admin"
                                        >
                                            <FaUserShield className="text-lg" />
                                        </button>
                                    )}
                                </td>
                                <td className="p-3 text-center">
                                    <button
                                        onClick={() => handleDeleteUser(user)}
                                        className="btn btn-sm bg-red-600 text-white p-2 rounded hover:bg-red-700"
                                    >
                                        <FaTrashAlt className="text-lg" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;