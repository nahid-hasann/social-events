import React from 'react';
import { motion } from "framer-motion";
import FeatureSection from '../FeatureSection';
import { FaCalendarCheck, FaMapMarkedAlt, FaShieldAlt, FaUserFriends } from "react-icons/fa";
import { FaQuoteLeft, FaStar } from "react-icons/fa";


const Home = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           
            <section className="relative flex flex-col justify-center items-center text-center text-white rounded-xl overflow-hidden my-10">
                <img
                    src="https://i.ibb.co.com/gM8HJ2YR/banner-view-of-sustainability-expressed-by-green-environment-and-seedlings-in-hands-photo.jpg"
                    alt="banner"
                    className="absolute inset-0 w-full h-full object-cover brightness-50"
                />
                <div className="relative z-10 py-20 sm:py-28 md:py-40">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                        Build a Better Community
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
                        Join and create events that make a difference in your area!
                    </p>
                    <button className="mt-6 bg-blue-600 hover:bg-blue-700 px-6 py-2 sm:px-8 sm:py-3 rounded-lg text-sm sm:text-base font-semibold transition">
                        Explore Events
                    </button>
                </div>
            </section>

         
            <section className="my-16 text-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8">
                    Why Join Us?
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        {
                            title: "Create Events",
                            text: "Organize social activities and inspire others.",
                            icon: "🌱",
                        },
                        {
                            title: "Join Activities",
                            text: "Participate in cleanup, donation, or plantation programs.",
                            icon: "🤝",
                        },
                        {
                            title: "Track Progress",
                            text: "Stay updated with local community projects.",
                            icon: "📊",
                        },
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="p-6 border rounded-lg shadow hover:shadow-lg transition bg-white dark:text-black flex flex-col items-center"
                        >
                            <div className="text-4xl mb-3">{item.icon}</div>
                            <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
                            <p className="text-gray-600">{item.text}</p>
                        </div>
                    ))}
                </div>
            </section>

           
            <section className="my-20 px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
                        Platform Features
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Everything you need to organize and join impactful events seamlessly.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        {
                            title: "Easy Scheduling",
                            desc: "Create and schedule events in just a few clicks with our intuitive tools.",
                            icon: <FaCalendarCheck className="text-4xl text-blue-500" />,
                            bg: "bg-blue-50 dark:bg-gray-800"
                        },
                        {
                            title: "Location Tracking",
                            desc: "Find events near you easily with integrated map and location services.",
                            icon: <FaMapMarkedAlt className="text-4xl text-green-500" />,
                            bg: "bg-green-50 dark:bg-gray-800"
                        },
                        {
                            title: "Verified Organizers",
                            desc: "Join events hosted by trusted and verified community leaders.",
                            icon: <FaShieldAlt className="text-4xl text-purple-500" />,
                            bg: "bg-purple-50 dark:bg-gray-800"
                        },
                        {
                            title: "Community Chat",
                            desc: "Connect with other volunteers and participants before the event.",
                            icon: <FaUserFriends className="text-4xl text-orange-500" />,
                            bg: "bg-orange-50 dark:bg-gray-800"
                        },
                    ].map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            className={`${feature.bg} p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700`}
                        >
                            <div className="mb-6 flex justify-center">{feature.icon}</div>
                            <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white text-center">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 text-center text-sm leading-relaxed">
                                {feature.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </section>
            

         
            <section className="my-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8">
                    Event Gallery
                </h2>
                <motion.div

                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                    {[
                        "https://i.ibb.co.com/4gwpLY69/amonwat-dumkrut-Ih-Vom0-Ksu-OM-unsplash.jpg",
                        "https://i.ibb.co.com/mrB9Sj64/cleaning.jpg",
                        "https://i.ibb.co.com/whH4z5H2/comunity.jpg",
                        "https://i.ibb.co.com/4ZBxmKt7/donation.jpg",
                        "https://i.ibb.co.com/39zbKtJf/help-1265227.jpg",
                        "https://i.ibb.co.com/PXpZnZj/treeplantation.jpg",
                    ].map((src, i) => (
                        <motion.img
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                            key={i}
                            src={src}
                            alt={`gallery-${i}`}
                            className="rounded-lg w-full h-40 sm:h-48 md:h-56 object-cover hover:scale-105 transition-transform"
                        />
                    ))}
                </motion.div>
            </section>

        
            <section className="my-20 bg-blue-50 p-6 sm:p-10 rounded-lg text-center">
                <h2 className="text-2xl dark:text-black sm:text-3xl font-bold mb-3">
                    Subscribe to Our Newsletter
                </h2>
                <p className="text-gray-600  mb-6 max-w-xl mx-auto">
                    Get updates on upcoming community events and volunteering
                    opportunities.
                </p>
                <form
                    onSubmit={(e) => e.preventDefault()}
                    className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-0"
                >
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="border border-gray-300 rounded-lg sm:rounded-l-lg p-3 w-full sm:w-64 focus:outline-none"
                    />
                    <button className="bg-blue-600 text-white px-6 py-3 sm:rounded-r-lg rounded-lg sm:rounded-l-none w-full sm:w-auto font-medium hover:bg-blue-700 transition">
                        Subscribe
                    </button>
                </form>
            </section>
        </div>
    );
};

export default Home;