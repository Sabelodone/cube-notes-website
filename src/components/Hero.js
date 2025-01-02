import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Sparkles, User, GamepadIcon } from 'lucide-react';

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: 'ease-in-out',
      once: true, // Animation will only happen once
    });
  }, []);

  return (
    <section className="container mx-auto px-6 py-32 text-center relative overflow-hidden">
      <div className="relative z-10">
        <h1
          className="text-5xl md:text-7xl font-bold mb-6 text-gray-800 dark:text-white"
          data-aos="fade-up"
        >
          Excel in Your Studies with{' '}
          <span className="text-purple-600 dark:text-purple-400">CubeNotes</span>!
        </h1>
        <p
          className="text-xl mb-8 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Get expert tutoring in Mathematics, Sciences, Commerce, and Languages. Join our interactive lessons, play educational games, and boost your grades!
        </p>
        <div
          className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <a
            href="#get-a-tutor"
            className="bg-purple-600 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-purple-700 transition duration-300 dark:bg-purple-500 dark:hover:bg-purple-600 flex items-center"
          >
            Get a Tutor <User className="ml-2" />
          </a>
          <a
            href="#courses"
            className="bg-white text-purple-600 font-bold py-3 px-8 rounded-full text-lg border-2 border-purple-600 hover:bg-purple-100 transition duration-300 dark:bg-gray-800 dark:text-purple-400 dark:border-purple-400 dark:hover:bg-gray-700 flex items-center"
          >
            Explore Subjects <Sparkles className="ml-2" />
          </a>
          <a
            href="#game"
            className="bg-green-500 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-green-600 transition duration-300 dark:bg-green-600 dark:hover:bg-green-700 flex items-center"
          >
            Play & Learn <GamepadIcon className="ml-2" />
          </a>
        </div>
      </div>
      <div className="mt-16 relative" data-aos="fade-up" data-aos-delay="600">
        <img
          src="/Screenshot 2024-10-23 202854.png"
          alt="Students excelling in their studies"
          className="rounded-lg shadow-2xl mx-auto"
        />
        <div
          className="absolute top-0 left-0 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md"
          data-aos="fade-right"
        >
          <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">8+</p>
          <p className="text-gray-600 dark:text-gray-300">Subjects</p>
        </div>
        <div
          className="absolute top-0 right-0 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md"
          data-aos="fade-left"
        >
          <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">Expert</p>
          <p className="text-gray-600 dark:text-gray-300">Tutors</p>
        </div>
        <div
         className="absolute bottom-4 left-[calc(50%-4rem)] transform bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md"
  data-aos="fade-up"
        >
          <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">Interactive</p>
          <p className="text-gray-600 dark:text-gray-300">Learning Games</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
