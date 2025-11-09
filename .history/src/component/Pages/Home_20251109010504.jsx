import React from 'react';

const Home = () => {
    return (
        <div className="max-w-6xl mx-auto">
            {/* Banner Section */}
            <div className="relative h-[400px] flex flex-col justify-center items-center text-white rounded-xl overflow-hidden mb-10">
                <img
                    src="https://i.ibb.co/fGDrg6m/community-cleanup.jpg"
                    alt="banner"
                    className="absolute w-full h-full object-cover brightness-50"
                />
                <div className="relative z-10 text-center">
                    <h1 className="text-4xl font-bold mb-3">Build a Better Community</h1>
                    <p className="text-lg">Join and create events that make a difference!</p>
                    <button className="mt-5 bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg font-semibold">
                        Explore Events
                    </button>
                </div>
            </div>

            <section className="my-10 text-center">
                <h2 className="text-3xl font-bold mb-6">Why Join Us?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-5 border rounded-lg shadow hover:shadow-lg transition">
                        <h3 className="font-semibold text-xl mb-2">Create Events</h3>
                        <p>Organize social events and inspire others in your community.</p>
                    </div>
                    <div className="p-5 border rounded-lg shadow hover:shadow-lg transition">
                        <h3 className="font-semibold text-xl mb-2">Join Activities</h3>
                        <p>Take part in cleanup drives, plantations, and donation programs.</p>
                    </div>
                    <div className="p-5 border rounded-lg shadow hover:shadow-lg transition">
                        <h3 className="font-semibold text-xl mb-2">Track Progress</h3>
                        <p>Stay updated with ongoing community development projects.</p>
                    </div>
                </div>
            </section>

            

            </div>
    );
};

export default Home;