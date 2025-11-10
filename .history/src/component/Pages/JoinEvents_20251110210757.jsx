import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvidor';

const JoinEvents = () => {
    const {user} = useContext(AuthContext);
    
    return (
        <div className="max-w-6xl mx-auto mt-10 p-4">
            <h2 className="text-3xl font-bold text-blue-600 mb-6 text-center">
                My Joined Events
            </h2>

            {joinedEvents.length === 0 ? (
                <p className="text-center text-gray-500">You haven’t joined any events yet!</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {joinedEvents.map((event) => (
                        <div
                            key={event._id}
                            className="bg-white rounded-xl shadow hover:shadow-lg transition p-4 flex flex-col"
                        >
                            <img
                                src={event.thumbnail}
                                alt={event.title}
                                className="h-48 w-full object-cover rounded mb-3"
                            />
                            <h3 className="text-lg font-semibold text-gray-800 mb-1">{event.title}</h3>
                            <p className="text-sm text-gray-600">📍 {event.location}</p>
                            <p className="text-sm text-gray-600 mb-2">
                                📅 {new Date(event.eventDate).toLocaleDateString()}
                            </p>
                            <p className="text-sm text-blue-600 font-medium">{event.type}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default JoinEvents;