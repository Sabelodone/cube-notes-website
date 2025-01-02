import React, { useState } from 'react';
import { User, Calendar, Video } from 'lucide-react';
import emailjs from 'emailjs-com';

const GetATutor = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Use environment variables for EmailJS credentials
    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,  // Get the service ID from the .env file
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,  // Get the template ID from the .env file
        formData,
        process.env.REACT_APP_EMAILJS_USER_ID     // Get the user ID from the .env file
      )
      .then(() => {
        alert('Your request has been sent successfully!');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      })
      .catch((error) => {
        alert('Failed to send the request. Please try again.');
        console.error(error);
      });
  };

  return (
    <section id="get-a-tutor" className="container mx-auto px-6 py-16 bg-purple-100 dark:bg-purple-900 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">Get a Tutor</h2>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <p className="text-lg mb-6 text-gray-600 dark:text-gray-300">
            Our experienced tutors are here to help you succeed. Choose from in-person Saturday classes or one-on-one online sessions.
          </p>
          <ul className="space-y-4">
            <li className="flex items-center text-gray-700 dark:text-gray-200">
              <User className="w-6 h-6 mr-2 text-purple-600 dark:text-purple-400" />
              Expert tutors in all subjects
            </li>
            <li className="flex items-center text-gray-700 dark:text-gray-200">
              <Calendar className="w-6 h-6 mr-2 text-purple-600 dark:text-purple-400" />
              Flexible scheduling options
            </li>
            <li className="flex items-center text-gray-700 dark:text-gray-200">
              <Video className="w-6 h-6 mr-2 text-purple-600 dark:text-purple-400" />
              In-person and online sessions available
            </li>
          </ul>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Request a Tutor</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-2">Name</label>
              <input type="text" id="name" className="w-full px-3 py-2 border rounded-lg text-gray-700 dark:text-gray-300 dark:bg-gray-700" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2">Email</label>
              <input type="email" id="email" className="w-full px-3 py-2 border rounded-lg text-gray-700 dark:text-gray-300 dark:bg-gray-700" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block text-gray-700 dark:text-gray-300 mb-2">Phone Number</label>
              <input type="tel" id="phone" className="w-full px-3 py-2 border rounded-lg text-gray-700 dark:text-gray-300 dark:bg-gray-700" value={formData.phone} onChange={handleChange} required />
            </div>
            <div className="mb-4">
              <label htmlFor="subject" className="block text-gray-700 dark:text-gray-300 mb-2">Subject</label>
              <select id="subject" className="w-full px-3 py-2 border rounded-lg text-gray-700 dark:text-gray-300 dark:bg-gray-700" value={formData.subject} onChange={handleChange} required>
                <option value="">Select a subject</option>
                <option value="Mathematics">Mathematics</option>
                <option value="Physical Sciences">Physical Sciences</option>
                <option value="Accounting">Accounting</option>
                <option value="English">English</option>
                <option value="Life Sciences">Life Sciences</option>
                <option value="Mathematical Literacy">Mathematical Literacy</option>
                <option value="Business Studies">Business Studies</option>
                <option value="Economics">Economics</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-2">Additional Message</label>
              <textarea id="message" className="w-full px-3 py-2 border rounded-lg text-gray-700 dark:text-gray-300 dark:bg-gray-700" rows="4" value={formData.message} onChange={handleChange}></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-purple-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-purple-700 transition duration-300"
            >
              Request Tutor
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default GetATutor;
