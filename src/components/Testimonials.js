import React from 'react';

const testimonials = [
  { name: 'Takatso Mabine.', quote: 'TutorFun helped me ace my exams!', image: '/placeholder.svg?height=100&width=100' },
  { name: 'Vusi Mkhize.', quote: 'The tutors are amazing and so supportive.', image: '/placeholder.svg?height=100&width=100' },
  { name: 'Emma Zondo.', quote: 'Learning has never been this enjoyable!', image: '/placeholder.svg?height=100&width=100' },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="container mx-auto px-6 py-16 bg-purple-100 dark:bg-purple-900">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">What Our Students Say</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center"
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <p className="text-gray-600 dark:text-gray-300 mb-4">"{testimonial.quote}"</p>
            <p className="font-semibold text-gray-800 dark:text-white">{testimonial.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;

