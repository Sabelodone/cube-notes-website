import React, { useState } from 'react';
import { Check } from 'lucide-react';

const pricingPlans = [
  {
    name: 'Saturday Classes',
    price: 'R500',
    features: [
      'In-person group sessions',
      'Expert tutors',
      'Interactive learning environment',
      'Access to study materials',
      'Progress tracking',
    ],
  },
  {
    name: 'Online One-on-One',
    price: 'R200',
    features: [
      'Personalized attention',
      'Flexible scheduling',
      'Video conferencing',
      'Screen sharing',
      'Recorded sessions for review',
    ],
  },
];

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handleChoosePlan = (plan) => {
    setSelectedPlan(plan);
  };

  const handleCloseModal = () => {
    setSelectedPlan(null);
  };

  return (
    <section id="pricing" className="container mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">Our Pricing</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {pricingPlans.map((plan) => (
          <div
            key={plan.name}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">{plan.name}</h3>
            <p className="text-4xl font-bold mb-6 text-purple-600 dark:text-purple-400">{plan.price}</p>
            <ul className="space-y-4 mb-8">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center text-gray-600 dark:text-gray-300">
                  <Check className="w-5 h-5 mr-2 text-green-500" />
                  {feature}
                </li>
              ))}
            </ul>
            <button
              onClick={() => handleChoosePlan(plan)}
              className="w-full bg-purple-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-purple-700 transition duration-300"
            >
              Choose Plan
            </button>
          </div>
        ))}
      </div>

      {selectedPlan && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={handleCloseModal}
        >
          <div
            className="bg-white dark:bg-gray-800 rounded-lg p-6 w-11/12 md:w-1/2 lg:w-1/3"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
              Confirm Your Choice
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              You have selected the <strong>{selectedPlan.name}</strong> plan for{' '}
              <strong>{selectedPlan.price}</strong>.
            </p>
            <div className="flex justify-end gap-4">
              <button
                onClick={handleCloseModal}
                className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white font-bold py-2 px-4 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition duration-300"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  alert(`You have chosen the ${selectedPlan.name} plan.`);
                  handleCloseModal();
                }}
                className="bg-purple-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-purple-700 transition duration-300"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Pricing;
