import React, { useState } from 'react';
import QuestionDisplay from './QuestionDisplay';
import PlayerScreen from './PlayerScreen';
import './App.css';

const App = () => {
  const questions = [
    {
      question: 'What is the capital of France?',
      options: ['Paris', 'London', 'Berlin', 'Madrid'],
      correctAnswer: 'Paris',
    },
    {
      question: 'What is the largest planet in our solar system?',
      options: ['Earth', 'Jupiter', 'Mars', 'Saturn'],
      correctAnswer: 'Jupiter',
    },
    {
      question: 'Who wrote "Hamlet"?',
      options: ['Shakespeare', 'Homer', 'Tolkien', 'Rowling'],
      correctAnswer: 'Shakespeare',
    },
    {
      question: 'Which element has the chemical symbol "O"?',
      options: ['Oxygen', 'Gold', 'Silver', 'Helium'],
      correctAnswer: 'Oxygen',
    },
    {
      question: 'What is the square root of 64?',
      options: ['6', '7', '8', '9'],
      correctAnswer: '8',
    },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [playerName, setPlayerName] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);
  const [showPopup, setShowPopup] = useState(false); // Popup when all questions are done

  const currentQuestion = questions[currentQuestionIndex];

  const submitAnswer = (name, answer) => {
    setPlayerName(name);
    if (answer === currentQuestion.correctAnswer) {
      setIsCorrect(true);
      // Correct answer, move to next question after 2 seconds
      setTimeout(() => {
        if (currentQuestionIndex + 1 < questions.length) {
          setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
          setIsCorrect(null); // Reset isCorrect state for next question
        } else {
          // All questions are answered, show popup
          setShowPopup(true);
        }
      }, 2000);
    } else {
      // Wrong answer, allow retry
      setIsCorrect(false);
    }
  };

  const closePopup = () => {
    setShowPopup(false);
    setCurrentQuestionIndex(0); // Optional: Reset quiz to start over
    setIsCorrect(null); // Reset isCorrect
  };

  return (
    <div style={{ backgroundColor: 'skyblue',  padding: '20px' , textAlign:'center' }}>
      <h1 className="main-heading">KBC Quiz Game</h1>
      {showPopup ? (
        <div className="popup">
          <h2>All questions are done!</h2>
          <button onClick={closePopup}>Close</button>
        </div>
      ) : (
        <>
          <QuestionDisplay
            question={currentQuestion.question}
            playerName={playerName}
            isCorrect={isCorrect}
          />
          <PlayerScreen
            question={currentQuestion.question}
            options={currentQuestion.options}
            submitAnswer={submitAnswer}
            isCorrect={isCorrect}
          />
        </>
      )}
    </div>
  );
};

export default App;
