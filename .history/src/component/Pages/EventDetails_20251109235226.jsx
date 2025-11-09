import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../AuthProvidor';
import axiosPublic from '../../axiosPublic';

const EventDetails = () => {

    const { id } = useParams();
    const [event, setEvent] = useState(null);
    const [loading, setLoading] = useState(true);
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        axiosPublic.get(`/events/${id}`)
        .then()
    }, [])



    return (
        <div className="max-w-3xl mx-auto mt-10 p-4 bg-white rounded shadow">
            <img src={event.thumbnail} alt={event.title} className="w-full h-64 object-cover rounded mb-5" />
            <h2 className="text-3xl font-bold text-blue-600 mb-2">{event.title}</h2>
            <p className="text-gray-700 mb-2">{event.description}</p>
            <p className="text-sm text-gray-600 mb-1">📍 {event.location}</p>
            <p className="text-sm text-gray-600 mb-1">📅 {new Date(event.eventDate).toLocaleDateString()}</p>
            <p className="text-sm text-gray-600 mb-3">🗂 Type: {event.type}</p>
            <button onClick={handleJoin} className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700">
                Join Event
            </button>
        </div>
    );
};

export default EventDetails;