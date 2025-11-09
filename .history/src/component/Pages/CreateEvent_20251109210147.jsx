import React, { useContext, useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from '../../AuthProvidor';
import { data, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const CreateEvent = () => {

    const { user } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);
    const [startDate, setStartDate] = useState(new Date())
    const navigate = useNavigate();

    const handleSubmit = (e) => {

        e.preventDefault();
        setLoading(true);

        const title = e.target.title.value;
        const description = e.target.description.value;
        const type = e.target.type.value;
        const thumbnail = e.target.thumbnail.value;
        const location = e.target.location.value;
        const eventDate = startDate;
        const email = user?.email;

        if (!title || !description || !type || !thumbnail || !location || !eventDate) {
            toast.error("All fields are required!")
            setLoading(false);
            return
        }

        const today = new Date();
        if (eventDate < today){
            toast.error("You cannot select a past date!");
            setLoading(false);
            return;
        }

        const eventData = {
            title,
            description,
            type,
            thumbnail,
            location,
            eventDate,
            email
        };

        console.log(eventData);


        toast.success("Event created successfully!");
        setLoading(false);
        setTimeout(() => {
            navigate('/events');
        }, 1000);







    }

    return (
        <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow rounded">
            <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
                Create New Event
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    name="title"
                    placeholder="Event Title"
                    className="w-full border p-2 rounded"
                />
                <textarea
                    name="description"
                    placeholder="Event Description"
                    rows="3"
                    className="w-full border p-2 rounded"
                />
                <select name="type" className="w-full border p-2 rounded">
                    <option value="">Select Event Type</option>
                    <option value="Cleanup">Cleanup</option>
                    <option value="Plantation">Plantation</option>
                    <option value="Donation">Donation</option>
                    <option value="Awareness">Awareness</option>
                </select>
                <input
                    type="text"
                    name="thumbnail"
                    placeholder="Thumbnail Image URL"
                    className="w-full border p-2 rounded"
                />
                <input
                    type="text"
                    name="location"
                    placeholder="Event Location"
                    className="w-full border p-2 rounded"
                />
                <div>
                    <label className="block mb-1 font-medium text-gray-700">
                        Event Date:
                    </label>
                    <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        className="border p-2 rounded w-full"
                        minDate={new Date()}
                        dateFormat="dd/MM/yyyy"
                    />
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700 transition"
                >
                    {loading ? "Creating..." : "Create Event"}
                </button>
            </form>
        </div>
    );
};

export default CreateEvent;