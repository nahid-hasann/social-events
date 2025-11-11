import React, { useEffect, useState } from "react";
import axiosPublic from "../../axiosPublic";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const UpcomingEvents = () => {
    const [events, setEvents] = useState([]);
    const [filterType, setFilterType] = useState("");
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true);

    // 🔍 Load events with filter + search
    useEffect(() => {
        setLoading(true);
        let url = `/events?`;

        if (filterType) url += `type=${filterType}&`;
        if (search) url += `search=${search}&`;

        axiosPublic
            .get(url)
            .then((res) => {
                // filter only upcoming events (date in future)
                const now = new Date();
                const upcoming = res.data.filter(
                    (ev) => new Date(ev.eventDate) > now
                );
                setEvents(upcoming);
            })
            .catch(() => toast.error("Failed to load events"))
            .finally(() => setLoading(false));
    }, [filterType, search]);

    // 🧹 Reset Filters
    const handleReset = () => {
        setFilterType("");
        setSearch("");
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center h-[60vh]">
                <p className="text-blue-600 font-medium">Loading events...</p>
            </div>
        );
    }

    return (
        <div className="max-w-6xl mx-auto p-4 mt-10">
            <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
                Upcoming Events
            </h2>

            {/* 🔎 Filter & Search Bar */}
            <div className="flex flex-wrap justify-center gap-3 mb-6">
                <input
                    type="text"
                    placeholder="Search event by name..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="border p-2 rounded w-60 dark:bg-gray-800 dark:text-white"
                />
                <select
                    value={filterType}
                    onChange={(e) => setFilterType(e.target.value)}
                    className="border p-2 rounded dark:bg-gray-800 dark:text-white"
                >
                    <option value="">All Types</option>
                    <option value="Cleanup">Cleanup</option>
                    <option value="Plantation">Plantation</option>
                    <option value="Donation">Donation</option>
                    <option value="Awareness">Awareness</option>
                </select>
                <button
                    onClick={handleReset}
                    className="bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition"
                >
                    Reset
                </button>
            </div>

            {/* 🧩 Event Grid */}
            {events.length === 0 ? (
                <p className="text-center text-gray-500">
                    No upcoming events found!
                </p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {events.map((event) => (
                        <div
                            key={event._id}
                            className="bg-white dark:bg-gray-900 dark:text-white shadow rounded p-4 transition hover:shadow-lg"
                        >
                            <img
                                src={event.thumbnail}
                                alt={event.title}
                                className="w-full h-48 object-cover rounded mb-3"
                            />
                            <h3 className="text-lg font-semibold">{event.title}</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-300">
                                📍 {event.location}
                            </p>
                            <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                                📅 {new Date(event.eventDate).toLocaleDateString()}
                            </p>
                            <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
                                🏷️ {event.type}
                            </p>
                            <Link
                                to={`/events/${event._id}`}
                                className="block text-center bg-blue-600 text-white mt-3 py-1 rounded hover:bg-blue-700 transition"
                            >
                                View Event
                            </Link>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default UpcomingEvents;
