import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className="bg-white text-black sticky top-0 z-50 shadow-md ">
            <div className="container mx-auto flex items-center justify-between p-4 ">
                {/* Logo Section */}
                <div className="text-2xl font-bold">
                    <h1>Developer Zone</h1>
                </div>

                {/* Hamburger Menu for Small Screens */}
                <button
                    className="sm:hidden block"
                    onClick={toggleMenu}
                    aria-label="Toggle Menu"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-8 h-8"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>

                {/* Navigation Links */}
                <nav
                    className={`${
                        isMenuOpen ? 'block md:shadow-lg' : 'hidden'
                    } absolute sm:static left-0 right-0 top-[70px] bg-white sm:flex sm:items-center sm:gap-8 sm:mt-0 p-4 sm:p-0`}
                >
                    <Link
                        to="/"
                        onClick={closeMenu}
                        className="block py-2 sm:py-0 text-lg hover:text-yellow-400"
                    >
                        Home
                    </Link>
                    <Link
                        to="/api-docs"
                        onClick={closeMenu}
                        className="block py-2 sm:py-0 text-lg hover:text-yellow-400"
                    >
                        API Documentation
                    </Link>
                    <Link
                        to="/test-environment"
                        onClick={closeMenu}
                        className="block py-2 sm:py-0 text-lg hover:text-yellow-400"
                    >
                        Test Environment
                    </Link>
                    <Link
                        to="/logs"
                        onClick={closeMenu}
                        className="block py-2 sm:py-0 text-lg hover:text-yellow-400"
                    >
                        API Logs
                    </Link>
                    <Link
                        to="/status"
                        onClick={closeMenu}
                        className="block py-2 sm:py-0 text-lg hover:text-yellow-400"
                    >
                        System Status
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
