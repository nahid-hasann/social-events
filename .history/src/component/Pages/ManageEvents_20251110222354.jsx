import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvidor';
// import axios from 'axios';
import axiosPublic from '../../axiosPublic';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

const ManageEvents = () => {
    const { user } = useContext(AuthContext);
    const [myEvents, setMyEvents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!user?.email) return;

        setLoading(true);
        axiosPublic.get(`/my-events/${user.email}`)
            .then(res => setMyEvents(res.data))
            .catch(() => toast.error("Failed to load your events"))
            .finally(() => setLoading(false))

    }, [user?.email])

    const handleDelete = (id) => {
      
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });
        
      };

    if (loading) {
        return (
            <div className="flex justify-center items-center h-[60vh]">
                <p className="text-blue-600 font-medium">Loading your events...</p>
            </div>
        );
    }



    return (
        <div className="max-w-6xl mx-auto mt-10 p-4">
            <h2 className="text-3xl font-bold text-blue-600 mb-6 text-center">
                Manage My Events
            </h2>

            {myEvents.length === 0 ? (
                <p className="text-center text-gray-500">You haven’t created any events yet!</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {myEvents.map((event) => (
                        <div key={event._id} className="bg-white shadow rounded p-4">
                            <img
                                src={event.thumbnail}
                                alt={event.title}
                                className="w-full h-48 object-cover rounded mb-3"
                            />
                            <h3 className="text-lg font-semibold">{event.title}</h3>
                            <p className="text-sm text-gray-600">📍 {event.location}</p>
                            <p className="text-sm text-gray-600 mb-2">
                                📅 {new Date(event.eventDate).toLocaleDateString()}
                            </p>
                            <div className="flex justify-between mt-3">
                                <button
                                    onClick={() => handleDelete(event._id)}
                                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                                >
                                    Delete
                                </button>
                                <button
                                    className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                                >
                                    Update
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ManageEvents;