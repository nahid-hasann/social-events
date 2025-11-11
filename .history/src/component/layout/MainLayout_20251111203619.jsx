import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


const MainLayout = () => {
    return (
        <div>
            <div className="min-h-screen flex flex-col bg-white text-black dark:bg-red-500 dark:text-white transition-colors duration-300">
                <Navbar />
                <div className="flex-grow">
                    <Outlet />
                </div>
                <footer className="text-center py-4 bg-gray-100 mt-10">
                    © 2025 SocialEvents Platform
                </footer>
                <ToastContainer position="top-center" />
            </div>
        </div>
    );
};

export default MainLayout;