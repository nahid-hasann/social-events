import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../AuthProvidor';
import axiosPublic from '../../axiosPublic';
import { toast } from 'react-toastify';

const EventDetails = () => {

    const { id } = useParams();
    const [event, setEvent] = useState(null);
    const [loading, setLoading] = useState(true);
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const [joined, setJoined] = useState(false);

    useEffect(() => {
        axiosPublic.get(`/events/${id}`)
            .then(res => setEvent(res.data))
            .catch(() => toast.error("Failed to load event"))
            .finally(() => setLoading(false));
    }, [id])


    const handleJoin = () => {
        if (!user) {
            toast.info("Please login to join this event!");
            navigate("/login");
            return;
          }

        const joinData = {
            eventId: id,
            userEmail: user.email,
            joinedAt: new Date(),
            location: event.location,
            thumbnail: event.thumbnail,
            type: event.type,
          };

        axiosPublic.post("/joined-events", joinData)
            .then(() => {
                toast.success("Successfully joined the event!")
                setJoined(true);
            })
            .catch(() => toast.error("Failed to join event"));
    }

    if (loading) return <p className="text-center mt-10">Loading...</p>;
    

    return (
        <div className="max-w-3xl mx-auto mt-10 p-4 bg-white rounded shadow">
            <img src={event.thumbnail} alt={event.title} className="w-full h-64 object-cover rounded mb-5" />
            <h2 className="text-3xl font-bold text-blue-600 mb-2">{event.title}</h2>
            <p className="text-gray-700 mb-2">{event.description}</p>
            <p className="text-sm text-gray-600 mb-1">📍 {event.location}</p>
            <p className="text-sm text-gray-600 mb-1">📅 {new Date(event.eventDate).toLocaleDateString()}</p>
            <p className="text-sm text-gray-600 mb-3">🗂 Type: {event.type}</p>
            <button
                onClick={handleJoin}
                disabled={joined}
                className={`px-5 py-2 rounded transition ${joined
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-blue-600 hover:bg-blue-700 text-white"
                    }`}
            >
                {joined ? "✅ Joined" : "Join Event"}
            </button>
        </div>
    );
};

export default EventDetails;