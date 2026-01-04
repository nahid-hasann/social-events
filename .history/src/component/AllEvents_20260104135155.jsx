import React, { useEffect, useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { toast } from 'react-toastify';
import axiosPublic from '../axiosPublic';

const AllEvents = () => {
    const [events, setEvents] = useState([]);

   
    useEffect(() => {
        axiosPublic.get('/events')
            .then(res => {
                setEvents(res.data);
            })
            .catch(err => console.log(err));
    }, []);

   
    const handleDeleteEvent = (id) => {
        const proceed = window.confirm("Are you sure you want to delete this event?");
        if (proceed) {
            axiosPublic.delete(`/events/${id}`)
                .then(res => {
                    if (res.data.deletedCount > 0) {
                        toast.success("Event has been deleted.");
                        // UI থেকে সরিয়ে দিচ্ছি
                        const remaining = events.filter(event => event._id !== id);
                        setEvents(remaining);
                    }
                })
        }
    };

    return (
        <div className="w-full px-4">
            <h2 className="text-3xl font-bold my-6 text-blue-600">All Events: {events.length}</h2>

            <div className="overflow-x-auto bg-white rounded-lg shadow-lg">
                <table className="table w-full">
                    {/* Table Head */}
                    <thead className="bg-gray-800 text-white">
                        <tr>
                            <th className="p-3">#</th>
                            <th className="p-3">Event Name</th>
                            <th className="p-3">Creator Email</th>
                            <th className="p-3">Date</th>
                            <th className="p-3 text-center">Action</th>
                        </tr>
                    </thead>
                    {/* Table Body */}
                    <tbody>
                        {events.map((event, index) => (
                            <tr key={event._id} className="border-b hover:bg-gray-100">
                                <th className="p-3">{index + 1}</th>
                                <td className="p-3 font-bold">{event.title}</td>
                                <td className="p-3 text-blue-600">{event.email}</td>
                                <td className="p-3">{new Date(event.eventDate || event.date).toLocaleDateString()}</td>
                                <td className="p-3 text-center">
                                    <button
                                        onClick={() => handleDeleteEvent(event._id)}
                                        className="btn btn-sm bg-red-600 text-white p-2 rounded hover:bg-red-700"
                                        title="Delete Event"
                                    >
                                        <FaTrashAlt />
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

export default AllEvents;