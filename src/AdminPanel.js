import React from 'react';

const AdminPanel = ({ showNextQuestion, moveToNextQuestion }) => {
  return (
    <div>
      {showNextQuestion ? (
        <div>
          <h2>Correct Answer! Move to the next question.</h2>
          <button onClick={moveToNextQuestion}>Next Question</button>
        </div>
      ) : (
        <h2>Waiting for a correct answer...</h2>
      )}
    </div>
  );
};

export default AdminPanel;
