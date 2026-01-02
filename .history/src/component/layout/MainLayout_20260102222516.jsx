import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";




const MainLayout = () => {
    return (
        <div>
            <div className="min-h-screen flex flex-col bg-white text-black dark:bg-gray-950 dark:text-white transition-colors duration-300">
                <Navbar />
                <div
                    className="flex-grow">
                    <Outlet />
                </div>
                <Footer></Footer>
                <ToastContainer position="top-center" />
            </div>
        </div>
    );
};

export default MainLayout;