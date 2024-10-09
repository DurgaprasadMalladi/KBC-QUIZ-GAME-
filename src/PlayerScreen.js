import React, { useState } from 'react';
import './PlayerScreen.css';

const PlayerScreen = ({ question, options, correctAnswer, submitAnswer }) => {
  const [playerName, setPlayerName] = useState('');
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [isCorrect, setIsCorrect] = useState(null); // Track if the answer is correct

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Ensure playerName and selectedAnswer are not undefined or empty
    if (!playerName || !playerName.trim()) {
      alert("Please enter your name.");
      return;
    }
  
    if (!selectedAnswer || !selectedAnswer.trim()) {
      alert("Please select an answer.");
      return;
    }
  
    // If validation passes, submit the answer
    submitAnswer(playerName.trim(), selectedAnswer.trim());
  };
  

  const handleRetry = () => {
    // Reset the state for retrying the answer
    setIsCorrect(null);
    setSelectedAnswer('');
  };

  return (
    <div
      className={`player-screen ${isCorrect === true ? 'correct' : isCorrect === false ? 'wrong' : ''}`}
    >
      <h1>Join the Game!</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={playerName}
          onChange={(e) => setPlayerName(e.target.value)}
          required
        />
        <h2>{question}</h2>

        <div className="radio-group">
          {options.map((option, index) => (
            <div key={index} className="radio-option">
              <input
                type="radio"
                id={option}
                name="answer"
                value={option}
                checked={selectedAnswer === option}
                onChange={(e) => setSelectedAnswer(e.target.value)}
                required
              />
              <label htmlFor={option}>{option}</label>
            </div>
          ))}
        </div>

        {isCorrect === null && (
          <button type="submit">Submit Answer</button>
        )}

        {isCorrect === false && (
          <div>
            <p>Incorrect answer. Please try again.</p>
            <button type="button" onClick={handleRetry}>Retry</button>
          </div>
        )}

        {isCorrect === true && <p>Congratulations! Correct Answer.</p>}
      </form>
    </div>
  );
};

export default PlayerScreen;
