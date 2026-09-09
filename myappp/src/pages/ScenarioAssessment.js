import React, { useState } from "react";
import {
  useLocation,
  useNavigate,
} from "react-router-dom";

function ScenarioAssessment() {
  const location = useLocation();
  const navigate = useNavigate();

  const field =
    location.state?.field || "Career";

  const questions = [
    {
      question:
        "You are working on a team project. What would you do when your team faces a difficult problem?",
      options: [
        "Analyze the problem and find a solution",
        "Communicate with the team",
        "Research the problem",
        "Take responsibility and lead",
      ],
    },
    {
      question:
        "You are given a task you have never done before. What would you do?",
      options: [
        "Break the task into smaller parts",
        "Discuss it with others",
        "Research and learn",
        "Take the lead and start",
      ],
    },
    {
      question:
        "Your team members have different opinions. What would you do?",
      options: [
        "Compare the ideas logically",
        "Help everyone communicate",
        "Research the best option",
        "Make a final decision",
      ],
    },
    {
      question:
        "You need to learn something new quickly. What would you prefer?",
      options: [
        "Practice by doing",
        "Learn with a team",
        "Read and research",
        "Follow a structured course",
      ],
    },
    {
      question:
        "A project is not working properly. What would you do first?",
      options: [
        "Find the problem",
        "Discuss it with the team",
        "Research possible causes",
        "Manage the situation",
      ],
    },
    {
      question:
        "Which type of work interests you most?",
      options: [
        "Problem solving",
        "Working with people",
        "Analyzing information",
        "Managing tasks",
      ],
    },
    {
      question:
        "You receive a large amount of information. What would you do?",
      options: [
        "Find useful patterns",
        "Discuss it with others",
        "Research it deeply",
        "Organize it",
      ],
    },
    {
      question:
        "Your team needs someone to handle an important task. What would you do?",
      options: [
        "Work on the solution",
        "Coordinate the team",
        "Collect information",
        "Take responsibility",
      ],
    },
    {
      question:
        "What motivates you when learning something new?",
      options: [
        "Building something",
        "Sharing ideas",
        "Discovering information",
        "Achieving a goal",
      ],
    },
    {
      question:
        "Which work environment would you prefer?",
      options: [
        "Technical and problem-solving",
        "Team-based",
        "Research and analytical",
        "Leadership-based",
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] =
    useState(0);

  const [selectedAnswer, setSelectedAnswer] =
    useState("");

  const question =
    questions[currentQuestion];

  const handleNext = () => {
    if (!selectedAnswer) {
      alert("Please select an answer.");
      return;
    }

    if (
      currentQuestion <
      questions.length - 1
    ) {
      setCurrentQuestion(
        currentQuestion + 1
      );

      setSelectedAnswer("");
    } else {
      alert(
        `Scenario assessment completed for ${field}.`
      );

      navigate("/career");
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(
        currentQuestion - 1
      );

      setSelectedAnswer("");
    }
  };

  return (
    <div className="scenario-page">

      <div className="scenario-card">

        <div className="scenario-icon">
          💡
        </div>

        <h1>
          Scenario Assessment
        </h1>

        <p>
          Answer the following scenario-based
          questions to find your best fit.
        </p>

        <div className="field-display">
          Field: <strong>{field}</strong>
        </div>

        <div className="progress">
          {currentQuestion + 1} /{" "}
          {questions.length}
        </div>

        <div className="question-card">

          <h2>
            {currentQuestion + 1}.{" "}
            {question.question}
          </h2>

          {question.options.map(
            (option, index) => (
              <label
                className="option"
                key={index}
              >
                <input
                  type="radio"
                  name="answer"
                  checked={
                    selectedAnswer === option
                  }
                  onChange={() =>
                    setSelectedAnswer(option)
                  }
                />

                {option}
              </label>
            )
          )}

        </div>

        <div className="assessment-buttons">

          <button
            className="previous-button"
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
          >
            ← Previous
          </button>

          <button
            className="next-button"
            onClick={handleNext}
          >
            {currentQuestion ===
            questions.length - 1
              ? "Finish"
              : "Next →"}
          </button>

        </div>

      </div>

    </div>
  );
}

export default ScenarioAssessment;