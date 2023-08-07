import React, { useState } from "react";
import "./App.css";
import Banner from "./components/UI/Banner/Banner";
import Button from "./components/UI/Button/Button";
import Card from "./components/UI/Card/Card";
import questions from "./Data/data";

function App() {
  const [start, setStart] = useState(false);
  const [end, setEnd] = useState(false);
  const [questionsCorrect, setQuestionsCorrect] = useState(0);

  const startTest = () => {
    setQuestionsCorrect(0);
    setStart(true);
    setEnd(false); // Make sure 'end' is reset when starting the quiz
  };

  function func(correct) {
    if (correct === true) {
      setQuestionsCorrect((prev) => prev + 1); // Use the function form to ensure correct state updates
    }
  }

  function showResults() {
    setStart(false);
    setEnd(true);
  }

  return (
    <div className="app" data-testid="app-container">
      <h1>Quizz App</h1>

      {start ? (
        <div className="container">
          <div className="card-container">
            {questions.slice(0, 2).map(
              ({
                questionId,
                question,
                option1,
                option2,
                option3,
                option4,
                answer,
              }) => (
                <Card
                  key={questionId}
                  question={question}
                  correctAnswerMarkUpdate={func}
                  attempt={func}
                  options={{
                    option1: option1,
                    option2: option2,
                    option3: option3,
                    option4: option4,
                  }}
                  answer={answer}
                />
              )
            )}
          </div>
          <div className="row">
            {/* Render questions 3, 4, and 5 in separate cards */}
            {questions.slice(2, 5).map(
              ({
                questionId,
                question,
                option1,
                option2,
                option3,
                option4,
                answer,
              }) => (
                <Card
                  key={questionId}
                  question={question}
                  correctAnswerMarkUpdate={func}
                  attempt={func}
                  options={{
                    option1: option1,
                    option2: option2,
                    option3: option3,
                    option4: option4,
                  }}
                  answer={answer}
                />
              )
            )}
          </div>
          <Button onClick={showResults} data-testid="show-results-btn">
            {"Show results"}
          </Button>
        </div>
      ) : (
        <div className="end">
          {end && (
            <Banner data-testid="result-banner">
              You have answered {questionsCorrect} / {questions.length} Correctly
            </Banner>
          )}
          <Button onClick={startTest} data-testid="start-quiz-btn">
            {"Start Quiz"}
          </Button>
        </div>
      )}
    </div>
  );
}

export default App;
