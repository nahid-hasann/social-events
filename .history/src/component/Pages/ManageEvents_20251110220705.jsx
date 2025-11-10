import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvidor';

const ManageEvents = () => {
    const {user} = useContext(AuthContext);
    const [myEvents, setMyEvents] = useState([]);

    useEffect(() => {
      
    }, [])

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