import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import CourseCatalog from './components/CourseCatalog';
import GetATutor from './components/GetATutor';
import Pricing from './components/Pricing';
import LearningGame from './components/LearningGame';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: 'ease-in-out', // Animation easing
      once: true, // Animations trigger only once
      mirror: false, // Disable animations on scrolling back
    });
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-blue-100 to-purple-100 dark:from-gray-900 dark:to-purple-900">
        <Header />
        <main className="pt-16">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Features />
                  <CourseCatalog />
                  <GetATutor />
                 
                  <Pricing />
                  <LearningGame />
                  <Testimonials />
                </>
              }
            />
            {/* Add more routes here if needed */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
