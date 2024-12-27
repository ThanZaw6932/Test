import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ApiDocs from './pages/ApiDocs'; // Import the pages
import TestEnvironment from './pages/TestEnvironment';
import ApiLogs from './pages/ApiLogs';
import SystemStatus from './pages/SystemStatus';
import Home from './pages/Home';

function App() {
    return (
        <Router>
            <Header />
            <main style={{ padding: '1em' }}>
                <Routes>
                <Route path="/" element={<Home />} />
                    <Route path="/api-docs" element={<ApiDocs />} />
                    <Route path="/test-environment" element={<TestEnvironment />} />
                    <Route path="/logs" element={<ApiLogs />} />
                    <Route path="/status" element={<SystemStatus />} />
                </Routes>
            </main>
            <Footer />
        </Router>
    );
}

export default App;
