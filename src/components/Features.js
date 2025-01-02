import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BookOpen, Users, Zap, Target, Smile, Award } from 'lucide-react';

const features = [
  { icon: BookOpen, title: 'Expert Tutors', description: 'Learn from the best in various subjects' },
  { icon: Users, title: 'Small Groups', description: 'Personalized attention in small group settings' },
  { icon: Zap, title: 'Interactive Learning', description: 'Engage with fun and interactive lessons' },
  { icon: Target, title: 'Goal-Oriented', description: 'Set and achieve your learning objectives' },
  { icon: Smile, title: 'Enjoyable Experience', description: 'Make learning a fun and rewarding journey' },
  { icon: Award, title: 'Earn Achievements', description: 'Get recognized for your progress and skills' },
];

const Features = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // Duration of the animations
      easing: 'ease-in-out', // Easing function for smooth animations
      once: false, // Ensure animations replay every time the element scrolls into view
      mirror: true, // Animation happens on scroll out
    });

    // Refresh animations on component updates or route changes
    AOS.refresh();
  }, []);

  return (
    <section id="features" className="container mx-auto px-6 py-16">
      <h2
        className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white"
        data-aos="fade-up"
      >
        Why Choose CubeNotes?
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
            data-aos="zoom-in"
            data-aos-delay={index * 100} // Delay to stagger animations for each feature
          >
            <feature.icon
              className="w-12 h-12 mx-auto mb-4 text-purple-600 dark:text-purple-400"
              data-aos="flip-up"
            />
            <h3
              className="text-xl font-semibold mb-2 text-gray-800 dark:text-white"
              data-aos="fade-up"
            >
              {feature.title}
            </h3>
            <p
              className="text-gray-600 dark:text-gray-300"
              data-aos="fade-up"
              data-aos-delay={index * 150} // Slight additional delay for the description
            >
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
