import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WorkoutSessions from "./components/WorkoutSessions";
import Footer from "./components/Footer";
import AuthPage from "./components/AuthPage";
import ContactPage from "./components/Contact";
import Dashboard from './components/Dashboard/Dashboard';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <WorkoutSessions />
                  <Footer />
                </>
              }
            />
            <Route path="/login" element={<AuthPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </main>
        <ToastContainer theme="dark" position="top-center" />
      </div>
    </Router>
  );
};

export default App;
