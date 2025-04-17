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
import JournalDashboard from "./components/JournalDashboard";
import JournalManager from "./Journal/JournalManager";

const App = () => {
  return (
    <Router>
      <Navbar />
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
        <Route path="/dashboard" element={<JournalDashboard />} />
        <Route path="/newEntry" element={<JournalManager />} />
      </Routes>
      <ToastContainer theme="dark" position="top-center" />
    </Router>
  );
};

export default App;
