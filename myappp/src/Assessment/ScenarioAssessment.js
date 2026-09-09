import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// Import questions for all fields
import itSoftwareQuestions from "../data/scenarios/itSoftwareScenarioQuestions";
import healthcareQuestions from "../data/scenarios/healthcareScenarioQuestions";
import agricultureQuestions from "../data/scenarios/agricultureScenarioQuestions";
import financeBankingQuestions from "../data/scenarios/financeBankingScenarioQuestions";
import manufacturingAutomationQuestions from "../data/scenarios/manufacturingAutomationScenarioQuestions";

function ScenarioAssessment() {
  const location = useLocation();
  const navigate = useNavigate();

  // Get selected field from Home.js
  const selectedField = location.state?.field;

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);

  // Select questions based on the selected field
  let questions = [];

  if (selectedField === "IT & Software") {
    questions = itSoftwareQuestions;
  } else if (selectedField === "Healthcare") {
    questions = healthcareQuestions;
  } else if (selectedField === "Agriculture") {
    questions = agricultureQuestions;
  } else if (selectedField === "Finance & Banking") {
    questions = financeBankingQuestions;
  } else if (selectedField === "Manufacturing & Automation") {
    questions = manufacturingAutomationQuestions;
  }

  // If field is missing
  if (!selectedField) {
    return (
      <div style={{ textAlign: "center", padding: "50px" }}>
        <h2>No Field Selected</h2>
        <p>Please select a career field first.</p>

        <button onClick={() => navigate("/home")}>
          Back to Home
        </button>
      </div>
    );
  }

  // If questions are not available
  if (questions.length === 0) {
    return (
      <div style={{ textAlign: "center", padding: "50px" }}>
        <h2>No Questions Available</h2>

        <p>
          Scenario questions are not available for{" "}
          <strong>{selectedField}</strong>.
        </p>

        <button onClick={() => navigate("/home")}>
          Back to Home
        </button>
      </div>
    );
  }

  const currentQuestionData = questions[currentQuestion];

  // Select answer
  const handleAnswerSelect = (option) => {
    const updatedAnswers = [...answers];

    updatedAnswers[currentQuestion] = option;

    setAnswers(updatedAnswers);
  };

  // Next question
  const handleNext = () => {
    if (!answers[currentQuestion]) {
      alert("Please select an answer.");
      return;
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      alert("Scenario Assessment Completed!");

      console.log("Selected Field:", selectedField);
      console.log("Answers:", answers);

      // Recommendation logic can be added here later
    }
  };

  // Previous question
  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f8fafc",
        padding: "50px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "850px",
          margin: "auto",
          background: "white",
          padding: "40px",
          borderRadius: "20px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
        }}
      >
        <h1 style={{ textAlign: "center" }}>
          Scenario-Based Assessment
        </h1>

        <p
          style={{
            textAlign: "center",
            marginTop: "10px",
            marginBottom: "30px",
          }}
        >
          Selected Field: <strong>{selectedField}</strong>
        </p>

        <p
          style={{
            color: "#2563eb",
            fontWeight: "bold",
          }}
        >
          Question {currentQuestion + 1} of {questions.length}
        </p>

        <h2
          style={{
            marginTop: "20px",
            marginBottom: "30px",
          }}
        >
          {currentQuestionData.question}
        </h2>

        <div>
          {currentQuestionData.options.map((option) => (
            <label
              key={option}
              style={{
                display: "block",
                padding: "15px",
                marginBottom: "15px",
                border: "1px solid #dbe3ef",
                borderRadius: "10px",
                cursor: "pointer",
              }}
            >
              <input
                type="radio"
                name={`question-${currentQuestion}`}
                checked={answers[currentQuestion] === option}
                onChange={() => handleAnswerSelect(option)}
              />

              <span style={{ marginLeft: "10px" }}>
                {option}
              </span>
            </label>
          ))}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "30px",
          }}
        >
          <button
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
          >
            ← Previous
          </button>

          <button onClick={handleNext}>
            {currentQuestion === questions.length - 1
              ? "Finish Assessment"
              : "Next →"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ScenarioAssessment;