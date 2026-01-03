import React, { useEffect, useState } from 'react';
import { FaTrashAlt, FaUserShield } from 'react-icons/fa';
import { toast } from 'react-toastify';
import axios from 'axios';

const ManageUsers = () => {
    const [users, setUsers] = useState([]);

    // ১. ডাটাবেস থেকে ইউজার লোড করা
    useEffect(() => {
        // আপনার সার্ভার লিংক দিন
        axios.get('https://social-events-server-hazel.vercel.app/users')
            .then(res => {
                setUsers(res.data);
            })
            .catch(error => console.error(error));
    }, []);

    const handleMakeAdmin = (user) => {
        axios.patch(`https://social-events-server-hazel.vercel.app/users/admin/${user._id}`)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    // UI তে সাথে সাথে আপডেট দেখানোর জন্য
                    const updatedUsers = users.map(u =>
                        u._id === user._id ? { ...u, role: 'admin' } : u
                    );
                    setUsers(updatedUsers);
                    toast.success(`${user.name} is now an Admin!`);
                }
            })
    };

    const handleDeleteUser = (user) => {
        // কনফার্মেশন (চাইলে সুইট অ্যালার্ট ব্যবহার করতে পারো)
        const proceed = window.confirm("Are you sure you want to delete?");

        if (proceed) {
            axios.delete(`https://social-events-server-hazel.vercel.app/users/${user._id}`)
                .then(res => {
                    if (res.data.deletedCount > 0) {
                        // UI থেকে সাথে সাথে সরিয়ে ফেলার জন্য
                        const remainingUsers = users.filter(u => u._id !== user._id);
                        setUsers(remainingUsers);
                        toast.success("User Deleted Successfully");
                    }
                })
        }
    };

    return (
        <div className="w-full px-4">
            <h2 className="text-3xl font-bold my-4">Total Users: {users.length}</h2>

            <div className="overflow-x-auto rounded-lg shadow-lg">
                <table className="table w-full border-collapse bg-white">
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