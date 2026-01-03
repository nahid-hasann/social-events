import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { toast } from 'react-toastify';

const ContactUs = () => {

    const handleSendMessage = (e) => {
        e.preventDefault();
        // আপাতত টোস্ট দেখাচ্ছি, পরে ব্যাকএন্ডে কানেক্ট করতে পারেন
        toast.success("Message sent successfully! We will contact you soon.");
        e.target.reset();
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Contact Us</h1>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                        Have questions? We'd love to hear from you.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">

                    {/* Left Side: Contact Info */}
                    <div className="bg-blue-600 p-10 text-white flex flex-col justify-between">
                        <div>
                            <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
                            <p className="mb-8 text-blue-100">
                                Fill out the form and our team will get back to you within 24 hours.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <FaPhoneAlt className="text-xl" />
                                    <span>+880 1712 345 678</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <FaEnvelope className="text-xl" />
                                    <span>support@socialevents.com</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <FaMapMarkerAlt className="text-xl" />
                                    <span>123, Street Name, Dhaka, Bangladesh</span>
                                </div>
                            </div>
                        </div>

                        <div className="mt-10">
                            {/* Social Icons Placeholder */}
                            <div className="flex gap-4">
                                <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center hover:bg-white hover:text-blue-600 transition cursor-pointer">F</div>
                                <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center hover:bg-white hover:text-blue-600 transition cursor-pointer">T</div>
                                <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center hover:bg-white hover:text-blue-600 transition cursor-pointer">I</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Contact Form */}
                    <div className="p-10">
                        <form onSubmit={handleSendMessage} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Your Name</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                    placeholder="John Doe"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email Address</label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                    placeholder="john@example.com"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
                                <textarea
                                    rows="4"
                                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                    placeholder="How can we help you?"
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition duration-300"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ContactUs;