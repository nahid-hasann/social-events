import React from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaRegHandshake, FaGlobeAmericas, FaLightbulb, FaRocket, FaCode, FaLinkedin, FaTwitter } from 'react-icons/fa';

const AboutUs = () => {

    
    const teamMembers = [
        {
            name: "John Doe",
            role: "Founder & CEO",
            initials: "JD",
            icon: <FaLightbulb />,
            color: "bg-blue-100 text-blue-600",
            desc: "Visionary leader with 10+ years of experience in community building."
        },
        {
            name: "Jane Smith",
            role: "Event Manager",
            initials: "JS",
            icon: <FaRocket />,
            color: "bg-purple-100 text-purple-600",
            desc: "Expert in organizing seamless and memorable social gatherings."
        },
        {
            name: "Mike Johnson",
            role: "Tech Lead",
            initials: "MJ",
            icon: <FaCode />,
            color: "bg-green-100 text-green-600",
            desc: "Ensuring our platform runs smoothly with the latest technology."
        }
    ];

    return (
        <div className="bg-gray-50 dark:bg-gray-900 min-h-screen font-sans">

          
            <div className="relative bg-gradient-to-r from-blue-700 to-blue-500 py-24 text-center text-white overflow-hidden">
               
                <div className="absolute top-0 left-0 w-full h-full opacity-10">
                    <FaGlobeAmericas className="w-96 h-96 absolute -top-20 -left-20 animate-pulse" />
                    <FaUsers className="w-96 h-96 absolute -bottom-20 -right-20 animate-pulse" />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="relative z-10 px-4"
                >
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
                        About <span className="text-yellow-300">SocialEvents</span>
                    </h1>
                    <p className="text-lg md:text-xl max-w-2xl mx-auto text-blue-100 leading-relaxed">
                        We are on a mission to bring communities together through meaningful events.
                        Connecting people, creating memories.
                    </p>
                </motion.div>
            </div>

          
            <div className="max-w-7xl mx-auto px-4 py-20">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Our Core Values</h2>
                    <div className="w-24 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  
                    <motion.div
                        whileHover={{ y: -10 }}
                        className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border-b-4 border-blue-500 text-center"
                    >
                        <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">
                            <FaUsers />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">Community First</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            Building strong, supportive networks is at the heart of everything we do.
                        </p>
                    </motion.div>

                  
                    <motion.div
                        whileHover={{ y: -10 }}
                        className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border-b-4 border-purple-500 text-center"
                    >
                        <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">
                            <FaRegHandshake />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">Trust & Safety</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            We ensure a secure environment where genuine connections can flourish.
                        </p>
                    </motion.div>

                   
                    <motion.div
                        whileHover={{ y: -10 }}
                        className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border-b-4 border-green-500 text-center"
                    >
                        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">
                            <FaGlobeAmericas />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">Global Impact</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            From local meetups to global conferences, we bridge the gap.
                        </p>
                    </motion.div>
                </div>
            </div>

           
            <div className="bg-white dark:bg-gray-800 py-20">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Meet The Minds</h2>
                        <p className="text-gray-500 mt-2">The passionate people behind SocialEvents</p>
                    </div>

                    <div classN
                               ame="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {teamMembers.map((member, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.02 }}
                                className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group"
                            >
                                {/* Decorative circle */} <div className="absolute top-0 right-0 w-20 h-20 bg-gray-200 dark:bg-gray-600 rounded-bl-full -mr-10 -mt-10 opacity-50 group-hover:scale-150 transition-transform duration-500"></div>

                                {/* Initials Avatar */}
                                <div className={`w-24 h-24 mx-auto ${member.color} rounded-full flex items-center justify-center text-3xl font-bold mb-6 shadow-inner relative z-10`}>
                                    {member.initials}
                                    <div className="absolute -bottom-2 -right-2 bg-white dark:bg-gray-800 p-2 rounded-full text-sm shadow">
                                        {member.icon}
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-gray-800 dark:text-white">{member.name}</h3>
                                <p className="text-blue-600 font-medium text-sm mb-4 uppercase tracking-wider">{member.role}</p>

                                <p className="text-gray-500 dark:text-gray-300 text-sm mb-6">
                                    {member.desc}
                                </p>

                                {/* Social Links (Optional) */}
                                <div className="flex justify-center gap-4 text-gray-400">
                                    <FaLinkedin className="hover:text-blue-600 cursor-pointer text-xl transition-colors" />
                                    <FaTwitter className="hover:text-blue-400 cursor-pointer text-xl transition-colors" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* 4. Call to Action */}
            <div className="bg-blue-600 py-16 text-center text-white">
                <h2 className="text-3xl font-bold mb-4">Ready to Join the Community?</h2>
                <p className="mb-8 opacity-90">Start hosting or joining events today.</p>
                <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors shadow-lg">
                    Get Started
                </button>
            </div>

        </div>
    );
};

export default AboutUs;