import { useState } from "react";
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
  };

  function func(correct) {
    if (correct === true) {
      setQuestionsCorrect((prevCorrect) => prevCorrect + 1);
    }
  }

  function showResults() {
    setStart(false);
    setEnd(true);
  }

  // Helper function to split questions into groups of 3, 4, or 5
  function splitQuestionsIntoRows(questions, rowSize) {
    const rows = [];
    for (let i = 0; i < questions.length; i += rowSize) {
      const row = questions.slice(i, i + rowSize);
      rows.push(row);
    }
    return rows;
  }

  return (
    <div className="app">
      <h1>Quizz App</h1>
      {start ? (
        <div className="container">
          <div className="card-container">
            {splitQuestionsIntoRows(questions, 3).map((row, rowIndex) => (
              <div key={rowIndex} className="question-row">
                {row.map(
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
            ))}
          </div>
          <Button onClick={showResults}>{"Show results"}</Button>
        </div>
      ) : (
        <div className="end">
          {end && (
            <Banner>You have answered {questionsCorrect} / 5 Correctly</Banner>
          )}
          <Button onClick={startTest}>{"Start Quiz"}</Button>
        </div>
      )}
    </div>
  );
}

export default App;
