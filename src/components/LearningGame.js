import React, { useState, useEffect } from 'react';

const MathPuzzleGame = () => {
  const [question, setQuestion] = useState('');
  const [userAnswer, setUserAnswer] = useState('');
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [feedback, setFeedback] = useState('');
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(90); // Set timer for 1 minute and 30 seconds (90 seconds)
  const [timerRunning, setTimerRunning] = useState(false);

  // Instructions for the game
  const instructions = `Welcome to the Math Puzzle Game!\n\n1. Click "Generate Puzzle" to receive a new question.\n2. Solve the problem and enter your answer.\n3. You have 1 minute and 30 seconds to answer each question.\n4. Submit your answer to see if you're correct.\n5. Your score will increase for each correct answer.\n6. You can reset the game at any time.`;

  // Function to generate math puzzles for Grade 10 to 12
  const generateGrade10to12MathProblem = () => {
    const topics = ['Algebra', 'Geometry', 'Trigonometry', 'Calculus'];
    const topic = topics[Math.floor(Math.random() * topics.length)];
    let generatedQuestion = '';
    let generatedAnswer = '';

    switch (topic) {
      case 'Algebra':
        const a = Math.floor(Math.random() * 10) + 1;
        const b = Math.floor(Math.random() * 10) + 1;
        generatedQuestion = `Solve for x: ${a}x + ${b} = ${a * 5}`;
        generatedAnswer = '5'; // x = 5 for simplicity
        break;

      case 'Geometry':
        const base = Math.floor(Math.random() * 10) + 5;
        const height = Math.floor(Math.random() * 10) + 5;
        generatedQuestion = `Find the area of a triangle with base ${base} cm and height ${height} cm.`;
        generatedAnswer = (0.5 * base * height).toFixed(2); // Area formula
        break;

      case 'Trigonometry':
        const angle = 30; // Example angle
        generatedQuestion = `Find sin(${angle})`;
        generatedAnswer = Math.sin((angle * Math.PI) / 180).toFixed(2); // Trig values
        break;

      case 'Calculus':
        const coef = Math.floor(Math.random() * 10) + 1;
        const power = Math.floor(Math.random() * 3) + 1;
        generatedQuestion = `Find the derivative of ${coef}x^${power}`;
        generatedAnswer = `${coef * power}x^${power - 1}`; // Power rule
        break;

      default:
        generatedQuestion = 'Unknown topic';
        generatedAnswer = '0';
    }

    setQuestion(generatedQuestion);
    setCorrectAnswer(generatedAnswer);
    setUserAnswer('');
    setFeedback('');
    setTimeLeft(90); // Reset the timer to 90 seconds
    setTimerRunning(true); // Start the timer when a new question is generated
  };

  useEffect(() => {
    let timer;
    if (timerRunning && timeLeft > 0) {
      // Decrement timer every second
      timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setFeedback('Time is up! You did not answer in time.');
      setTimerRunning(false);
    }

    return () => clearInterval(timer); // Cleanup the timer on component unmount
  }, [timeLeft, timerRunning]);

  const handleSubmit = () => {
    if (!userAnswer.trim()) {
      setFeedback('Please enter an answer before submitting.');
      return;
    }

    // Convert both user answer and correct answer to floats and check equality with tolerance
    const userAnswerFloat = parseFloat(userAnswer.trim());
    const correctAnswerFloat = parseFloat(correctAnswer);

    // Check if the user's answer is within a small tolerance range of the correct answer
    if (Math.abs(userAnswerFloat - correctAnswerFloat) < 0.01) {
      setFeedback('Correct! Well done!');
      setScore(score + 1);
      // Wait for a moment before generating the next question
      setTimeout(generateGrade10to12MathProblem, 1500); // 1.5 seconds delay before generating the next puzzle
    } else {
      setFeedback(`Incorrect. The correct answer is ${correctAnswer}. Try again!`);
    }
    setTimerRunning(false); // Stop the timer after submission
};

  const handleReset = () => {
    setScore(0);
    setQuestion('');
    setUserAnswer('');
    setCorrectAnswer('');
    setFeedback('');
    setTimeLeft(90); // Reset timer
    setTimerRunning(false); // Stop the timer
  };

  // Convert timeLeft (in seconds) to mm:ss format
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <section className="container mx-auto px-6 py-16 bg-purple-100 dark:bg-purple-900 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white shadow-lg glow-text">Math Puzzle Game</h1>
      <p className="bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-4 rounded-lg shadow mb-6 text-center whitespace-pre-wrap">{instructions}</p>
      <div className="text-center">
        <button
          onClick={generateGrade10to12MathProblem} // Add this onClick handler
          className="bg-purple-600 text-white px-6 py-3 rounded-lg shadow-glow hover:bg-purple-700 transition"
        >
          Generate Puzzle
        </button>
      </div>
      {question && (
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-6 max-w-xl mx-auto">
          <p className="text-lg font-medium mb-4 text-gray-800 dark:text-white">{question}</p>
          <div className="flex items-center">
            <input
              type="text"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              placeholder="Enter your answer"
              className="w-full px-3 py-2 border rounded-lg text-gray-800 dark:text-gray-300 dark:bg-gray-700 mr-4 shadow-md glow-input"
            />
            <button
              onClick={handleSubmit}
              className="bg-green-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-700 transition glow-button"
            >
              Submit Answer
            </button>
          </div>
        </div>
      )}
      {feedback && (
        <p
          className={`mt-4 font-bold text-center ${feedback.includes('Correct') ? 'text-green-600' : 'text-red-600'} glow-text`}
        >
          {feedback}
        </p>
      )}
      <p className="mt-4 text-lg font-semibold text-center glow-text">
        Score: <span className="text-purple-600">{score}</span>
      </p>
      <p className="mt-4 text-lg font-semibold text-center glow-text">
        Time Left: <span className="text-red-600">{formatTime(timeLeft)}</span>
      </p>
      <div className="text-center">
        <button
          onClick={handleReset}
          className="bg-red-600 text-white px-6 py-3 mt-6 rounded-lg shadow-md hover:bg-red-700 transition glow-button"
        >
          Reset Game
        </button>
      </div>
    </section>
  );
};

export default MathPuzzleGame;
