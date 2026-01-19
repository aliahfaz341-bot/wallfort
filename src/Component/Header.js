import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="w-full bg-gray-100 pb-5">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
                {/* Logo */}
                <img
                    src="/Image/logo (2).png"
                    alt="LAND Interiors Logo"
                    className="h-16 w-auto"
                />

                {/* Right Options - hide on small screens */}
                <div className="hidden md:flex items-center gap-10 text-sm font-medium">
                    <p className="text-purple-900">Join as Design Expert</p>
                    <p className="text-purple-900">Partner with LAND Interiors</p>
                </div>
            </div>

            {/* Bottom Navigation - hide on small screens */}
            <div className="hidden md:block">
                <nav className="flex justify-center gap-20 w-50">
                    <Link to="/about">About</Link>
                    <Link to="/project">Projects</Link>
                    <Link to="/studio">Studio</Link>
                    <Link to="/blog">Blog</Link>
                    <Link to="/contact">Contact</Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
