import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
// import Footer from './Footer';

const MainLayout = () => {
    return (
        <div>
            <div className="min-h-screen flex flex-col">
                <Navbar />
                <div className="flex-grow">
                    <Outlet />
                </div>
                <footer className="text-center py-4 bg-gray-100 mt-10">
                    © 2025 SocialEvents Platform
                </footer>
            </div>
        </div>
    );
};

export default MainLayout;