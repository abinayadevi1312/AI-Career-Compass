import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SelectFields.css";

function SelectFields() {
  const navigate = useNavigate();

  const [fieldInput, setFieldInput] = useState("");
  const [message, setMessage] = useState("");

  const validFields = [
    "IT & Software",
    "Healthcare",
    "Agriculture",
    "Finance & Banking",
    "Manufacturing & Automation",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    const enteredField = fieldInput.trim();

    const matchedField = validFields.find(
      (field) =>
        field.toLowerCase() === enteredField.toLowerCase()
    );

    if (matchedField) {
      setMessage(`✓ Correct! You selected ${matchedField}`);

      // Next card
      setTimeout(() => {
        navigate("/choose-domain", {
          state: {
            field: matchedField,
          },
        });
      }, 800);
    } else {
      setMessage(
        "✕ Please enter one of the displayed career fields."
      );
    }
  };

  return (
    <div className="select-field-page">

      <div className="select-field-card">

        <div className="select-field-icon">
          🎯
        </div>

        <h1>Select a Field</h1>

        <p className="instruction">
          Enter any one of the career fields given below.
        </p>

        {/* FIVE FIELDS */}

        <div className="field-options">

          {validFields.map((field) => (
            <div
              className="field-option"
              key={field}
              onClick={() => setFieldInput(field)}
            >
              {field}
            </div>
          ))}

        </div>

        {/* INPUT */}

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Enter your field..."
            value={fieldInput}
            onChange={(e) => {
              setFieldInput(e.target.value);
              setMessage("");
            }}
          />

          <button type="submit">
            Continue →
          </button>

        </form>

        {/* MESSAGE */}

        {message && (
          <p
            className={
              message.startsWith("✓")
                ? "success-message"
                : "error-message"
            }
          >
            {message}
          </p>
        )}

        {/* BACK */}

        <button
          className="back-button"
          onClick={() => navigate("/home")}
        >
          ← Back to Home
        </button>

      </div>

    </div>
  );
}

export default SelectFields;