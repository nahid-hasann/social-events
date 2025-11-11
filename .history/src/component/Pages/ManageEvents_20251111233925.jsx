import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvidor';
// import axios from 'axios';
import axiosPublic from '../../axiosPublic';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import { motion } from "framer-motion";


const ManageEvents = () => {
    const { user } = useContext(AuthContext);
    const [myEvents, setMyEvents] = useState([]);
    console.log(myEvents)
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
                axiosPublic.delete(`/events/${id}`)
                    .then(() => {
                        Swal.fire("Deleted!", "Your event has been removed.", "success");
                        setMyEvents((prev) => prev.filter((e) => e._id !== id));
                    })
                    .catch(() => {
                        Swal.fire("Error!", "Failed to delete the event.", "error");
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

    const handleUpdate = (event) => {
        Swal.fire({
            title: "Update Event",
            html: `
            <input id="title" class="swal2-input" placeholder="Title" value="${event.title}">
            <input id="location" class="swal2-input" placeholder="Location" value="${event.location}">
            <input id="date" class="swal2-input" type="date" value="${new Date(event.eventDate).toISOString().split("T")[0]}">
            <input id="thumbnail" class="swal2-input" placeholder="Image URL" value="${event.thumbnail}">
          `,
            focusConfirm: false,
            showCancelButton: true,
            confirmButtonText: "Save Changes",
            preConfirm: () => {
                return {
                    title: document.getElementById("title").value,
                    location: document.getElementById("location").value,
                    eventDate: document.getElementById("date").value,
                    thumbnail: document.getElementById("thumbnail").value,
                };
            },
        }).then((result) => {
            if (result.isConfirmed) {
                const updatedData = result.value;

                if (!updatedData.title || !updatedData.location || !updatedData.eventDate || !updatedData.thumbnail) {
                    Swal.fire("Error!", "All fields are required!", "error");
                    return;
                }

                if (updatedData.title.length < 3) {
                    Swal.fire("Error!", "Title must be at least 3 characters long!", "error");
                    return;
                }

                if (!updatedData.thumbnail.startsWith("http")) {
                    Swal.fire("Error!", "Please provide a valid image URL!", "error");
                    return;
                }

                if (new Date(updatedData.eventDate) < new Date()) {
                    Swal.fire("Error!", "Event date must be in the future!", "error");
                    return;
                }


                axiosPublic
                    .put(`/events/${event._id}`, updatedData)
                    .then(() => {
                        Swal.fire("Updated!", "Your event has been updated.", "success");
                        // Update local state instantly
                        setMyEvents((prev) =>
                            prev.map((e) =>
                                e._id === event._id ? { ...e, ...updatedData } : e
                            )
                        );
                    })
                    .catch(() => {
                        Swal.fire("Error!", "Failed to update event.", "error");
                    });
            }
        });
    };


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
                        <div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: 0.1 }}
                            whileHover={{ scale: 1.03 }}
                            key={event._id} 
                            className="bg-white shadow rounded p-4">
                            <img
                                src={event.thumbnail}
                                alt={event.title}
                                className="w-full h-48 object-cover rounded mb-3"
                            />
                            <h3 className="text-lg dark:text-black font-semibold">{event.title}</h3>
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
                                    onClick={() => handleUpdate(event)}
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