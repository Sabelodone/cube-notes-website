import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';

const Header = () => {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check the saved preference for dark mode
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    setIsDarkMode(savedDarkMode);
  }, []);

  useEffect(() => {
    // Update the document's class to apply dark mode
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');  // Save the user's preference
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');  // Save the user's preference
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <header className="fixed w-full z-50 transition-all duration-300 bg-white shadow-md dark:bg-gray-800">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center text-2xl font-bold text-purple-600 dark:text-purple-400">
          <img
            src="/CubeNotes.jpg" // Replace with the actual path to your logo
            alt="CubeNotes Logo"
            className="w-10 h-10 mr-2"
          />
          CubeNotes
        </Link>

        <div className="hidden md:flex space-x-4">
          <a href="#courses" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400">Subjects</a>
          <a href="#get-a-tutor" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400">Get a Tutor</a>
          <a href="#pricing" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400">Pricing</a>
          <a href="#game" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400">Learning Game</a>
        </div>

        <div className="flex items-center space-x-4">
          <button onClick={toggleDarkMode} className="focus:outline-none">
            {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
          </button>
          <button className="md:hidden focus:outline-none" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 md:hidden">
          <div className="fixed top-0 right-0 w-3/4 max-w-[300px] h-full bg-gradient-to-r from-purple-500 to-purple-700 text-white shadow-xl transform transition-transform duration-300 ease-in-out">
            <div className="flex justify-between items-center p-6 border-b border-purple-600 bg-white">
              <Link to="/" className="flex items-center space-x-2">
                <img
                  src="/CubeNotes.jpg" // Replace with the actual path to your logo
                  alt="CubeNotes Logo"
                  className="w-10 h-10"
                />
                <span className="text-2xl font-bold text-purple-600">CubeNotes</span>
              </Link>
              <button onClick={() => setIsMenuOpen(false)}>
                <X size={24} color="purple" />
              </button>
            </div>

            {/* Menu Links */}
            <div className="flex flex-col space-y-4 px-6 mt-6">
              <a href="#courses" className="text-lg font-semibold hover:text-purple-200" onClick={() => setIsMenuOpen(false)}>Subjects</a>
              <a href="#get-a-tutor" className="text-lg font-semibold hover:text-purple-200" onClick={() => setIsMenuOpen(false)}>Get a Tutor</a>
              <a href="#pricing" className="text-lg font-semibold hover:text-purple-200" onClick={() => setIsMenuOpen(false)}>Pricing</a>
              <a href="#game" className="text-lg font-semibold hover:text-purple-200" onClick={() => setIsMenuOpen(false)}>Learning Game</a>
            </div>

            {/* Search Bar */}
            <div className="px-6 mt-4">
              <input
                type="text"
                placeholder="Search courses or tutors..."
                className="w-full p-2 rounded-md bg-purple-800 text-white placeholder-gray-300"
              />
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 px-6 mt-6">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-purple-200">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-purple-200">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-purple-200">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
