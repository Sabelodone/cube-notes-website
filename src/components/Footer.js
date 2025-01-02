import React, { useState } from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Set your app's root for accessibility

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const openModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent('');
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-3xl font-extrabold mb-4 text-gray-100">CubeNotes</h3>
            <p className="text-lg text-gray-400">Making learning fun and engaging for everyone!</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-6 text-gray-200">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <button
                  onClick={() => window.scrollTo(0, 0)} // Replace with your desired scroll or navigation logic
                  className="text-lg text-gray-400 hover:text-purple-500 transition duration-300"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('courses').scrollIntoView()}
                  className="text-lg text-gray-400 hover:text-purple-500 transition duration-300"
                >
                  Subjects
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('get-a-tutor').scrollIntoView()}
                  className="text-lg text-gray-400 hover:text-purple-500 transition duration-300"
                >
                  Get a Tutor
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('pricing').scrollIntoView()}
                  className="text-lg text-gray-400 hover:text-purple-500 transition duration-300"
                >
                  Pricing
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-6 text-gray-200">Support</h4>
            <ul className="space-y-4">
              <li>
                <button
                  onClick={() => openModal('FAQ Content Goes Here')}
                  className="text-lg text-gray-400 hover:text-purple-500 transition duration-300"
                >
                  FAQ
                </button>
              </li>
              <li>
                <button
                  onClick={() => openModal('Help Center Content Goes Here')}
                  className="text-lg text-gray-400 hover:text-purple-500 transition duration-300"
                >
                  Help Center
                </button>
              </li>
              <li>
                <button
                  onClick={() => openModal('Privacy Policy Content Goes Here')}
                  className="text-lg text-gray-400 hover:text-purple-500 transition duration-300"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => openModal('Terms of Service Content Goes Here')}
                  className="text-lg text-gray-400 hover:text-purple-500 transition duration-300"
                >
                  Terms of Service
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-6 text-gray-200">Connect With Us</h4>
            <div className="flex space-x-6">
              <a
                href="https://www.instagram.com/cubenotes1?igsh=NDJleDc3eDhsNHVo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-500 transition duration-300"
              >
                <Instagram size={32} />
              </a>
              <a
                href="https://www.facebook.com/cubenotes?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-500 transition duration-300"
              >
                <Facebook size={32} />
              </a>
              <a
                href="https://x.com/i/flow/login?redirect_after_login=%2Fcubenotes"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-500 transition duration-300"
              >
                <Twitter size={32} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-12 border-t border-gray-700 text-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} TechArtistryDesigns💜. All rights reserved.</p>
        </div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Support Modal"
        className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg mx-auto mt-24 max-w-lg"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
      >
        <h2 className="text-2xl font-extrabold mb-6 text-gray-800 dark:text-white">Support</h2>
        <div className="text-lg text-gray-600 dark:text-gray-300">
          {modalContent === 'FAQ Content Goes Here' && (
            <div>
              <h3 className="text-xl font-semibold mb-4 text-purple-600">Frequently Asked Questions</h3>
              <ul className="space-y-6">
                <li>
                  <strong className="text-gray-800">Q: What is CubeNotes?</strong>
                  <p className="text-gray-600">CubeNotes is an online platform offering personalized tutoring and learning resources to help students succeed in their studies.</p>
                </li>
                <li>
                  <strong className="text-gray-800">Q: How do I get a tutor?</strong>
                  <p className="text-gray-600">Browse our tutor listings or submit a request form to find a tutor best suited to your needs.</p>
                </li>
                <li>
                  <strong className="text-gray-800">Q: Can I cancel my subscription?</strong>
                  <p className="text-gray-600">Yes, you can cancel your subscription at any time via your account settings or by contacting support.</p>
                </li>
              </ul>
            </div>
          )}
          {modalContent === 'Help Center Content Goes Here' && (
            <div>
              <h3 className="text-xl font-semibold mb-4 text-purple-600">Help Center</h3>
              <p>Here are some useful resources to assist you:</p>
              <ul className="space-y-4">
                <li><a href="#" className="text-blue-500 hover:text-blue-700">How to Get Started</a></li>
                <li><a href="#" className="text-blue-500 hover:text-blue-700">Troubleshooting Guide</a></li>
                <li><a href="#" className="text-blue-500 hover:text-blue-700">Contact Support</a></li>
              </ul>
            </div>
          )}
          {modalContent === 'Privacy Policy Content Goes Here' && (
            <div>
              <h3 className="text-xl font-semibold mb-4 text-purple-600">Privacy Policy</h3>
              <p>At CubeNotes, your privacy is important to us. Here's how we collect and protect your personal data:</p>
              <ul className="space-y-6">
                <li><strong>Information Collection:</strong> We gather personal details such as name, email, and payment information to process your account.</li>
                <li><strong>Data Usage:</strong> Your data is used to improve our services and communicate with you.</li>
                <li><strong>Security:</strong> We employ industry-standard security measures, including encryption, to protect your data.</li>
              </ul>
            </div>
          )}
          {modalContent === 'Terms of Service Content Goes Here' && (
            <div>
              <h3 className="text-xl font-semibold mb-4 text-purple-600">Terms of Service</h3>
              <p>By using CubeNotes, you agree to the following terms:</p>
              <ul className="space-y-6">
                <li><strong>Account Creation:</strong> You must provide accurate information when registering.</li>
                <li><strong>Subscription Fees:</strong> All services require a subscription, which is billed periodically based on your plan.</li>
                <li><strong>Termination:</strong> We may suspend or terminate your account for any violation of our terms.</li>
              </ul>
              <p className="text-gray-600">By continuing, you acknowledge that you have read and agree to our Terms of Service.</p>
            </div>
          )}
        </div>
        <button
          onClick={closeModal}
          className="mt-6 w-full bg-purple-600 text-white py-3 rounded hover:bg-purple-700 transition duration-300"
        >
          Close
        </button>
      </Modal>
    </footer>
  );
};

export default Footer;
