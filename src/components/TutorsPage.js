import React from 'react';

const tutors = [
  {
    id: 1,
    name: 'John Doe',
    bio: 'Experienced tutor in Mathematics with over 10 years of teaching experience. Passionate about helping students achieve academic excellence.',
    subjects: ['Math', 'Physics'],
    experience: '10 years of tutoring experience in both high school and university-level courses.',
    image: '/amanda.jpg',
    rating: 4.8,
  },
  {
    id: 2,
    name: 'Jane Smith',
    bio: 'A passionate English tutor who helps students with reading, writing, and literature comprehension. I focus on making learning engaging and fun!',
    subjects: ['English', 'Literature'],
    experience: '8 years of experience teaching English as a second language and preparing students for exams.',
    image: '/IMG_6067.JPG',
    rating: 4.5,
  },
  {
    id: 3,
    name: 'Michael Johnson',
    bio: 'Chemistry and Biology tutor with a focus on preparing students for exams with a hands-on approach and easy-to-understand explanations.',
    subjects: ['Chemistry', 'Biology'],
    experience: '6 years of tutoring experience, specializing in AP and IB Chemistry & Biology.',
    image: '/mom.jpg',
    rating: 4.9,
  },
];

const TutorsPage = () => {
  return (
    <section className="bg-gradient-to-b from-blue-100 to-purple-100 dark:from-gray-900 dark:to-purple-900 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-purple-600 dark:text-purple-400 mb-12">
          Meet Our Tutors
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {tutors.map((tutor) => (
            <div
              key={tutor.id}
              className="relative rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              {/* Card with Image and Parallax Effect */}
              <div className="relative flex flex-col md:flex-row items-center bg-gradient-to-b from-purple-300 to-blue-500 p-4 rounded-lg overflow-hidden">
                {/* Tutor Image with Parallax Effect */}
                <div className="w-full md:w-1/2 relative">
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 transform hover:scale-110" style={{ backgroundImage: `url(${tutor.image})`, backgroundAttachment: 'fixed', height: '100%' }}></div>
                  {/* Displaying Tutor Image */}
                  <img
                    src={tutor.image}
                    alt={tutor.name}
                    className="w-full h-80 object-cover rounded-lg shadow-lg"
                  />
                </div>

                {/* Tutor Details */}
                <div className="w-full md:w-1/2 p-6 text-center md:text-left z-10 relative">
                  <h3 className="text-3xl font-semibold text-white mb-2">{tutor.name}</h3>
                  <div className="text-yellow-400 font-bold mb-4">
                    {tutor.rating} <span>★</span>
                  </div>
                  <p className="text-white text-lg mb-4">{tutor.bio}</p>

                  <div className="mb-4">
                    <p className="text-sm font-semibold text-white">Subjects:</p>
                    <ul className="list-disc list-inside text-white">
                      {tutor.subjects.map((subject, index) => (
                        <li key={index}>{subject}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-white">Experience:</p>
                    <p className="text-white">{tutor.experience}</p>
                  </div>

                  {/* Call to Action */}
                  <a
                    href="#"
                    className="block mt-6 py-2 text-lg text-purple-600 bg-white rounded-lg hover:bg-purple-600 hover:text-white transition duration-300"
                  >
                    View Profile
                  </a>
                </div>
              </div>

              {/* Hover Effect: Split animation */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-400 opacity-0 group-hover:opacity-50 rounded-lg transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TutorsPage;
