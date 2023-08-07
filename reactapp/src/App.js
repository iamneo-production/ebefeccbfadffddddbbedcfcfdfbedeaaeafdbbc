import React, { useState } from 'react';
import Button from './components/UI/Button/Button';
import Card from './components/UI/Card/Card';
import './App.css';

function App() {
  const questionData = [
    // Your questionData array here
  ];

  const [startFlag, setStartFlag] = useState(false);
  const [buttonText, setButtonText] = useState('Start Quiz');
  // ... other state variables

  // ... your handleStart and other functions

  let qCards = null;
  let startBtn = null;
  let resultBtn = null;

  if (startFlag) {
    qCards = (
      <div>
        {questionData.map((data) => (
          <Card
            question={data.question}
            options={{
              option1: data.options.option1,
              option2: data.options.option2,
              option3: data.options.option3,
              option4: data.options.option4,
            }}
          />
        ))}
      </div>
    );

    startBtn = null; // If you don't want to show any button after starting the quiz
  } else {
    startBtn = <Button onClick={handleStart}>Start Quiz</Button>;
  }

  return (
    <div className="App">
      <h1>Quizz App</h1>
      {qCards}
      {startBtn}
    </div>
  );
}

export default App;
