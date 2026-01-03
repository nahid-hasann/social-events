import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { toast } from 'react-toastify';

const ContactUs = () => {

    const handleSendMessage = (e) => {
        e.preventDefault();
        toast.success("Thank you! Your message has been sent.");
        e.target.reset();
    };

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center p-4 sm:p-6 lg:p-8">

            <div className="max-w-6xl w-full bg-white dark:bg-gray-800 shadow-2xl rounded-3xl overflow-hidden flex flex-col md:flex-row">

                {/* Left Side: Contact Information (Blue Section) */}
                <div className="md:w-5/12 bg-gradient-to-br from-blue-700 to-blue-500 p-10 text-white flex flex-col justify-between">
                    <div>
                        <h2 className="text-3xl font-extrabold mb-4">Contact Information</h2>
                        <p className="mb-8 text-blue-100 leading-relaxed">
                            Fill up the form and our Team will get back to you within 24 hours. We are here to help you host your best events!
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="bg-blue-600 p-3 rounded-full shadow-lg">
                                    <FaPhoneAlt className="text-lg" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg">Phone</h4>
                                    <p className="text-blue-100">+880 1234 567 890</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-blue-600 p-3 rounded-full shadow-lg">
                                    <FaEnvelope className="text-lg" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg">Email</h4>
                                    <p className="text-blue-100">hello@socialevents.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-blue-600 p-3 rounded-full shadow-lg">
                                    <FaMapMarkerAlt className="text-lg" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg">Location</h4>
                                    <p className="text-blue-100">Banani, Dhaka-1213, Bangladesh</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Social Icons */}
                    <div className="mt-12">
                        <p className="mb-4 font-semibold text-blue-100">Follow us on:</p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-blue-600 hover:bg-white hover:text-blue-600 flex items-center justify-center transition-all duration-300 shadow-md">
                                <FaFacebookF />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-blue-600 hover:bg-white hover:text-blue-600 flex items-center justify-center transition-all duration-300 shadow-md">
                                <FaTwitter />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-blue-600 hover:bg-white hover:text-blue-600 flex items-center justify-center transition-all duration-300 shadow-md">
                                <FaInstagram />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-blue-600 hover:bg-white hover:text-blue-600 flex items-center justify-center transition-all duration-300 shadow-md">
                                <FaLinkedinIn />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right Side: Contact Form (White Section) */}
                <div className="md:w-7/12 p-10 md:p-14 bg-white dark:bg-gray-800">
                    <h2 className="text-3xl font-bold text-blue-600 dark:text-white mb-2">Get in Touch</h2>
                    <p className="text-gray-500 dark:text-gray-400 mb-8">Feel free to drop us a line below!</p>

                    <form onSubmit={handleSendMessage} className="space-y-6">

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {/* Name Input */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold text-gray-700 dark:text-gray-300">Your Name</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="John Doe"
                                    className="input input-bordered w-full bg-gray-50 dark:bg-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-lg"
                                    required
                                />
                            </div>

                            {/* Email Input */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold text-gray-700 dark:text-gray-300">Email Address</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="example@email.com"
                                    className="input input-bordered w-full bg-gray-50 dark:bg-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-lg"
                                    required
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {/* Phone Input */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold text-gray-700 dark:text-gray-300">Phone Number</span>
                                </label>
                                <input
                                    type="tel"
                                    placeholder="+880 1XXX XXX XXX"
                                    className="input input-bordered w-full bg-gray-50 dark:bg-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-lg"
                                />
                            </div>

                            {/* Subject Input */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold text-gray-700 dark:text-gray-300">Subject</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Event Inquiry"
                                    className="input input-bordered w-full bg-gray-50 dark:bg-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-lg"
                                    required
                                />
                            </div>
                        </div>

                        {/* Message Textarea */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold text-gray-700 dark:text-gray-300">Message</span>
                            </label>
                            <textarea
                                className="textarea textarea-bordered h-32 w-full bg-gray-50 dark:bg-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-lg resize-none"
                                placeholder="Write your message here..."
                                required
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <div className="form-control mt-6">
                            <button className="btn bg-blue-600 hover:bg-blue-700 text-white w-full py-3 rounded-lg text-lg font-bold shadow-lg transform transition hover:scale-[1.02] border-none">
                                Send Message
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;