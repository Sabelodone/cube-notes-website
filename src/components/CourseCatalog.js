import React, { useState } from 'react';
import {
  Book,
  Calculator,
  BarChart as ChartBar,
  
  FlaskRound as Flask,
  PenTool,
  Briefcase,
  TrendingUp,
} from 'lucide-react';

const courses = [
  { id: 1, name: 'Mathematics', icon: Calculator, category: 'Mathematics', level: 'All Levels' },
  { id: 2, name: 'Physical Sciences', icon: Flask, category: 'Sciences', level: 'All Levels' },
  { id: 3, name: 'Accounting', icon: ChartBar, category: 'Commerce', level: 'All Levels' },
  { id: 4, name: 'English', icon: Book, category: 'Languages', level: 'All Levels' },
  { id: 5, name: 'Life Sciences', icon: Flask, category: 'Sciences', level: 'All Levels' },
  { id: 6, name: 'Mathematical Literacy', icon: PenTool, category: 'Mathematics', level: 'All Levels' },
  { id: 7, name: 'Business Studies', icon: Briefcase, category: 'Commerce', level: 'All Levels' },
  { id: 8, name: 'Economics', icon: TrendingUp, category: 'Commerce', level: 'All Levels' },
];

const categories = ['All', 'Mathematics', 'Sciences', 'Commerce', 'Languages'];

const CourseCatalog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredCourses =
    selectedCategory === 'All'
      ? courses
      : courses.filter((course) => course.category === selectedCategory);

  return (
    <section id="courses" className="container mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">
        Our Subjects
      </h2>
      <div className="mb-8">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full ${
                selectedCategory === category
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
              } transition-colors duration-300`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {filteredCourses.map((course) => (
          <div
            key={course.id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
          >
            <course.icon className="w-12 h-12 text-purple-600 dark:text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
              {course.name}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{course.category}</p>
            <span className="px-3 py-1 rounded-full text-sm font-medium bg-green-200 text-green-800">
              {course.level}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CourseCatalog;
