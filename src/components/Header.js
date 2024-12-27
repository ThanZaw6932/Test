/**
 * Header Component
 * Displays navigation links for the application.
 */
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-blue-600 p-4">
            <div className="logo text-white font-bold text-3xl">
                <h1>Developer Zone</h1>
            </div>
            <nav className="mt-4">
                <Link to="/" className="text-white hover:text-yellow-500 mx-4">Home</Link>
                <Link to="/api-docs" className="text-white hover:text-yellow-500 mx-4">API Documentation</Link>
                <Link to="/test-environment" className="text-white hover:text-yellow-500 mx-4">Test Environment</Link>
                <Link to="/logs" className="text-white hover:text-yellow-500 mx-4">API Logs</Link>
                <Link to="/status" className="text-white hover:text-yellow-500 mx-4">System Status</Link>
            </nav>
        </header>
    );
};

export default Header;
