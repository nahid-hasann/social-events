import React, { useContext, useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from '../../AuthProvidor';

const CreateEvent = () => {

 const {user} = useContext(AuthContext);
 const [loading, setLoading] = useState(false);
 const 

    return (
        <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow rounded">
            <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
                Create New Event
            </h2>

            <form  className="space-y-4">
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
                        // selected={startDate}
                        // onChange={(date) => setStartDate(date)}
                        className="border p-2 rounded w-full"
                        minDate={new Date()} 
                        dateFormat="dd/MM/yyyy"
                    />
                </div>

                <button
                    type="submit"
                    // disabled={loading}
                    className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700 transition"
                >
                    {/* {loading ? "Creating..." : "Create Event"} */}
                </button>
            </form>
        </div>
    );
};

export default CreateEvent;