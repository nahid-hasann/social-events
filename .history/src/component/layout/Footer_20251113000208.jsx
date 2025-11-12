import React from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 text-gray-700 dark:text-gray-300 mt-10 border-t border-gray-200 dark:border-gray-700">
            <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">

                {/* Left section */}
                <div>
                    <h2 className="text-2xl font-bold text-[#2563eb] dark:text-indigo-400">
                        SocialEvents
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed">
                        Join, create, and manage community-driven events that make a real
                        difference. Empowering people to create change — one event at a time.
                    </p>
                </div>

                {/* Middle section */}
                <div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
                        Quick Links
                    </h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="/" className="hover:text-indigo-500">Home</a></li>
                        <li><a href="/events" className="hover:text-indigo-500">Upcoming Events</a></li>
                        <li><a href="/create-event" className="hover:text-indigo-500">Create Event</a></li>
                        <li><a href="/joined" className="hover:text-indigo-500">Joined Events</a></li>
                    </ul>
                </div>

                {/* Right section */}
                <div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
                        Follow Us
                    </h3>
                    <div className="flex justify-center md:justify-start space-x-5 text-xl">
                        <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-blue-600 transition">
                            <FaFacebook />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-pink-500 transition">
                            <FaInstagram />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-sky-400 transition">
                            <FaTwitter />
                        </a>
                        <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-gray-400 transition">
                            <FaGithub />
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom */}
            <div className="text-center text-sm border-t border-gray-200 dark:border-gray-700 py-4">
                © {new Date().getFullYear()} <span className="font-semibold text-[">SocialEvents Platform</span>. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;