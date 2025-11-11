import React, { useEffect, useState } from 'react';
import axiosPublic from '../../axiosPublic';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const UpCommingEvent = () => {

    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filterType, setFilterType] = useState("");
    const [search, setSearch] = useState("");
    const [debouncedSearch, setDebouncedSearch] = useState("");

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedSearch(search);
        }, 500);

        return () => clearTimeout(handler); // cleanup
    }, [search]);

    // 🔥 একটাই useEffect — সব কাজ এখানেই হবে
    useEffect(() => {
        setLoading(true);

        let url = `/events?`;
        if (filterType) url += `type=${filterType}&`;
        if (debouncedSearch) url += `search=${debouncedSearch}&`;

        axiosPublic
            .get(url)
            .then((res) => {
                const today = new Date();
                const upcoming = res.data.filter(
                    (event) => new Date(event.eventDate) >= today
                );
                setEvents(upcoming);
            })
            .catch(() => toast.error("Failed to load events!"))
            .finally(() => setLoading(false));
    }, [filterType, debouncedSearch]);
    // 

    if (loading) {
        return (
            <div className="flex justify-center items-center h-[60vh]">
                <p className="text-blue-600 text-lg font-semibold">Loading events...</p>
            </div>
        );
    }

    // useEffect(() => {
    //     if (!filterType && !search) return; // কিছু না থাকলে call হবে না

    //     let url = `/events?`;
    //     if (filterType) url += `type=${filterType}&`;
    //     if (search) url += `search=${search}&`;

    //     setLoading(true);
    //     axiosPublic
    //         .get(url)
    //         .then((res) => {
    //             const today = new Date();
    //             const upcoming = res.data.filter(
    //                 (event) => new Date(event.eventDate) >= today
    //             );
    //             setEvents(upcoming);
    //         })
    //         .catch(() => toast.error("Failed to load filtered events!"))
    //         .finally(() => setLoading(false));
    // }, [filterType, search]);
      

    return (
        <div className="max-w-6xl mx-auto mt-10 p-4">
            <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
                Upcoming Events
            </h2>

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
            </div>

            {events.length === 0 ? (
                <p className="text-center text-gray-600">No upcoming events found.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {events.map((event) => (
                        <div
                            key={event._id}
                            className="bg-white rounded-xl shadow hover:shadow-lg transition p-4 flex flex-col"
                        >
                            <img
                                src={event.thumbnail}
                                alt={event.title}
                                className="h-48 w-full object-cover rounded-md mb-4"
                            />
                            <h3 className="text-xl font-semibold text-gray-800 mb-1">
                                {event.title}
                            </h3>
                            <p className="text-sm text-gray-500 mb-2">{event.location}</p>
                            <p className="text-sm text-blue-600 font-medium mb-1">
                                {event.type}
                            </p>
                            <p className="text-sm text-gray-700 mb-3">
                                📅 {new Date(event.eventDate).toLocaleDateString()}
                            </p>

                            <Link
                                to={`/events/${event._id}`}
                                className="mt-auto text-center bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
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

export default UpCommingEvent;