import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Assessment() {
  const location = useLocation();
  const navigate = useNavigate();

  const selectedDomain = location.state?.domain;
  const selectedField = location.state?.field;

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial",
        background: "#f8fafc",
        textAlign: "center",
      }}
    >

      <div
        style={{
          background: "white",
          padding: "50px",
          borderRadius: "20px",
          boxShadow:
            "0 10px 30px rgba(0,0,0,0.1)",
          width: "500px",
          maxWidth: "90%",
        }}
      >

        <div
          style={{
            fontSize: "60px",
            marginBottom: "20px",
          }}
        >
          📋
        </div>

        <h1>
          Take Assessment
        </h1>

        <p
          style={{
            color: "#64748b",
            marginTop: "15px",
            lineHeight: "1.6",
          }}
        >
          Welcome to the assessment page!
        </p>

        <p
          style={{
            marginTop: "25px",
          }}
        >
          <strong>Selected Field:</strong>{" "}
          {selectedField || "Not Selected"}
        </p>

        <p
          style={{
            marginTop: "10px",
          }}
        >
          <strong>Selected Domain:</strong>{" "}
          {selectedDomain || "Not Selected"}
        </p>

        <button
          onClick={() => navigate("/home")}
          style={{
            marginTop: "30px",
            padding: "12px 25px",
            border: "none",
            borderRadius: "8px",
            background: "#2563eb",
            color: "white",
            cursor: "pointer",
          }}
        >
          Back to Home
        </button>

      </div>

    </div>
  );
}

export default Assessment;