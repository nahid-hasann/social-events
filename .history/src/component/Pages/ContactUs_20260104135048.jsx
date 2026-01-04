import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaLinkedinIn, FaPaperPlane } from 'react-icons/fa';
import { toast } from 'react-toastify';

const ContactUs = () => {

    const handleSendMessage = (e) => {
        e.preventDefault();
        
        toast.success("Message sent successfully! We'll get back to you soon.");
        e.target.reset();
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
            <div className="max-w-5xl w-full bg-white dark:bg-gray-800 shadow-xl rounded-2xl overflow-hidden flex flex-col md:flex-row">

                <div className="md:w-2/5 bg-blue-600 dark:bg-blue-700 p-8 text-white flex flex-col justify-between relative overflow-hidden">
                  
                    <div className="absolute -top-10 -left-10 w-32 h-32 bg-blue-500 rounded-full opacity-50 blur-2xl"></div>
                    <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-500 rounded-full opacity-50 blur-2xl"></div>

                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold mb-2">Let's get in touch</h2>
                        <p className="text-blue-100 mb-8 text-sm">
                            We're open for any suggestion or just to have a chat.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-blue-500/50 rounded-lg flex items-center justify-center shrink-0">
                                    <FaMapMarkerAlt className="text-xl" />
                                </div>
                                <div>
                                    <p className="font-semibold text-sm uppercase tracking-wider text-blue-200 mb-1">Address:</p>
                                    <p className="text-base font-medium">123 Street, Dhaka, Bangladesh</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-blue-500/50 rounded-lg flex items-center justify-center shrink-0">
                                    <FaPhoneAlt className="text-xl" />
                                </div>
                                <div>
                                    <p className="font-semibold text-sm uppercase tracking-wider text-blue-200 mb-1">Phone:</p>
                                    <p className="text-base font-medium">+880 1234 567890</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-blue-500/50 rounded-lg flex items-center justify-center shrink-0">
                                    <FaEnvelope className="text-xl" />
                                </div>
                                <div>
                                    <p className="font-semibold text-sm uppercase tracking-wider text-blue-200 mb-1">Email:</p>
                                    <p className="text-base font-medium">info@yoursite.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                  
                    <div className="relative z-10 mt-10">
                        <p className="text-blue-200 text-sm font-semibold mb-4 uppercase tracking-wider">Connect with us:</p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 bg-blue-500/50 hover:bg-white hover:text-blue-600 rounded-full flex items-center justify-center transition-all duration-300">
                                <FaFacebookF />
                            </a>
                            <a href="#" className="w-10 h-10 bg-blue-500/50 hover:bg-white hover:text-blue-600 rounded-full flex items-center justify-center transition-all duration-300">
                                <FaTwitter />
                            </a>
                            <a href="#" className="w-10 h-10 bg-blue-500/50 hover:bg-white hover:text-blue-600 rounded-full flex items-center justify-center transition-all duration-300">
                                <FaLinkedinIn />
                            </a>
                        </div>
                    </div>
                </div>

             
                <div className="md:w-3/5 p-8 sm:p-12">
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Send us a Message</h3>
                    <form onSubmit={handleSendMessage} className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Your Name</label>
                                <input type="text" id="name" name="name" className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 border-transparent focus:border-blue-500 focus:bg-white dark:focus:bg-gray-600 focus:ring-0 text-gray-800 dark:text-white text-sm transition duration-300 outline-none" placeholder="John Doe" required />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
                                <input type="email" id="email" name="email" className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 border-transparent focus:border-blue-500 focus:bg-white dark:focus:bg-gray-600 focus:ring-0 text-gray-800 dark:text-white text-sm transition duration-300 outline-none" placeholder="john@example.com" required />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Subject</label>
                            <input type="text" id="subject" name="subject" className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 border-transparent focus:border-blue-500 focus:bg-white dark:focus:bg-gray-600 focus:ring-0 text-gray-800 dark:text-white text-sm transition duration-300 outline-none" placeholder="Project Inquiry" required />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                            <textarea id="message" name="message" rows="4" className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 border-transparent focus:border-blue-500 focus:bg-white dark:focus:bg-gray-600 focus:ring-0 text-gray-800 dark:text-white text-sm transition duration-300 resize-none outline-none" placeholder="Write your message here..." required></textarea>
                        </div>
                        <div>
                            <button type="submit" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                                <FaPaperPlane /> Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;