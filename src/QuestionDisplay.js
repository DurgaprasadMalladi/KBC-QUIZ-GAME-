import React from 'react';
import { QRCodeCanvas } from 'qrcode.react'; // Import the QRCodeCanvas component

const QuestionDisplay = ({ question, playerName, isCorrect }) => {
  return (
    <div style={{ padding: '20px' }}>
      {/* Current Question Heading */}
      <h2 className="sub-heading">Current Question</h2>
      <p>{question}</p>

      {/* QR Code Display */}
      <QRCodeCanvas value="http://192.168.0.187:3000/player" size={256} />

      {isCorrect !== null && (
        <p style={{ color: isCorrect ? 'green' : 'red' }}>
          {isCorrect
            ? `Congratulations, ${playerName}! That's the correct answer.`
            : `Sorry, ${playerName}, that's the wrong answer.`}
        </p>
      )}
    </div>
  );
};

export default QuestionDisplay;
