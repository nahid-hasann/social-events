import React from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaRegHandshake, FaGlobeAmericas } from 'react-icons/fa';

const AboutUs = () => {
    return (
        <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">

            {/* Hero Section */}
            <div className="bg-blue-600 py-20 text-center text-white">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl md:text-5xl font-bold mb-4"
                >
                    About SocialEvents
                </motion.h1>
                <p className="text-lg max-w-2xl mx-auto px-4">
                    Bringing communities together through meaningful events and social gatherings.
                    We believe in the power of connection.
                </p>
            </div>

            {/* Mission Section */}
            <div className="max-w-6xl mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg"
                    >
                        <FaUsers className="text-5xl text-blue-500 mx-auto mb-4" />
                        <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">Community First</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            We prioritize building strong, supportive networks where everyone feels welcome.
                        </p>
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg"
                    >
                        <FaRegHandshake className="text-5xl text-blue-500 mx-auto mb-4" />
                        <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">Social Impact</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            Our events are designed to leave a positive footprint on society and the environment.
                        </p>
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg"
                    >
                        <FaGlobeAmericas className="text-5xl text-blue-500 mx-auto mb-4" />
                        <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">Global Reach</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            Connecting people from different backgrounds to share culture and ideas.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Team Section (Optional) */}
            <div className="bg-white dark:bg-gray-800 py-16">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-10 text-gray-800 dark:text-white">Meet Our Team</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {/* Team Member 1 */}
                        <div className="card bg-base-100 shadow-xl border dark:border-gray-700">
                            <figure className="px-10 pt-10">
                                <img src="https://i.ibb.co/Zz85P2d/placeholder.png" alt="Member" className="rounded-full w-32 h-32 object-cover border-4 border-blue-500" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">John Doe</h2>
                                <p>Founder & CEO</p>
                            </div>
                        </div>
                        {/* Team Member 2 */}
                        <div className="card bg-base-100 shadow-xl border dark:border-gray-700">
                            <figure className="px-10 pt-10">
                                <img src="https://i.ibb.co/Zz85P2d/placeholder.png" alt="Member" className="rounded-full w-32 h-32 object-cover border-4 border-blue-500" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Jane Smith</h2>
                                <p>Event Manager</p>
                            </div>
                        </div>
                        {/* Team Member 3 */}
                        <div className="card bg-base-100 shadow-xl border dark:border-gray-700">
                            <figure className="px-10 pt-10">
                                <img src="https://i.ibb.co/Zz85P2d/placeholder.png" alt="Member" className="rounded-full w-32 h-32 object-cover border-4 border-blue-500" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Mike Johnson</h2>
                                <p>Tech Lead</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;