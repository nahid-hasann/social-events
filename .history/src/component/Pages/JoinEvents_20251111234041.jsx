import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvidor';
import axiosPublic from '../../axiosPublic';
import { toast } from 'react-toastify';

const JoinEvents = () => {
    const {user} = useContext(AuthContext);
    const [joinedEvents, setJoinedEvents] = useState([]);
    const [dataLoading, setDataLoading] = useState(true);

    useEffect(() => {

      if(!user?.email) return;
 
      setDataLoading(true);
        axiosPublic.get(`/joined-events/${user.email}`)
        .then((res) => {
          const sorted = res.data.sort((a, b) => {
              return new Date(a.eventDate) - new Date(b.eventDate);
          }) 
          setJoinedEvents(sorted);
        })
        .catch(() => {
            toast.error("Failed to load joined events");
        })
        .finally(() => {
          setDataLoading(false);
        })
    }, [user?.email])

    if (dataLoading) {
        return (
            <div className="flex justify-center items-center h-[60vh]">
                <p className="text-blue-600 font-medium">Loading your joined events...</p>
            </div>
        );
      }


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
                        <motion.div
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