import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50 md:hidden">
            <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">

                {/* Logo */}
                <img
                    src="/Image/logo (2).png"
                    alt="LAND Interiors Logo"
                    className="h-16 w-auto"
                />

                {/* Desktop Menu */}
                <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
                    <li className="cursor-pointer hover:text-purple-900">Home</li>
                    <li className="cursor-pointer hover:text-purple-900">Services</li>
                    <li className="cursor-pointer hover:text-purple-900">Projects</li>
                    <li className="cursor-pointer hover:text-purple-900">Contact</li>
                </ul>

                {/* Toggle Button */}
                <button
                    className="md:hidden text-2xl text-gray-700"
                    onClick={() => setOpen(!open)}>
                    {open ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Mobile Menu */}
            {open && (
                <ul className="md:hidden bg-white shadow-md flex flex-col gap-6 py-6 px-6 text-gray-700 font-medium">
                    <li className="cursor-pointer hover:text-purple-600">Home</li>
                    <li className="cursor-pointer hover:text-purple-600">Services</li>
                    <li className="cursor-pointer hover:text-purple-600">Projects</li>
                    <li className="cursor-pointer hover:text-purple-600">Contact</li>
                </ul>
            )}
        </nav>
    );
};

export default Navbar;
