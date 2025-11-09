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
    );
};

export default Home;