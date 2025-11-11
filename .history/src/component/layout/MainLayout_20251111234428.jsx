import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";



const MainLayout = () => {
    return (
        <div>
            <div className="min-h-screen flex flex-col bg-white text-black dark:bg-gray-950 dark:text-white transition-colors duration-300">
                <Navbar />
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="flex-grow">
                    <Outlet />
                </motion.div>
                <footer className="text-center dark:text-black py-4 bg-gray-100 mt-10">
                    © 2025 SocialEvents Platform
                </footer>
                <ToastContainer position="top-center" />
            </div>
        </div>
    );
};

export default MainLayout;