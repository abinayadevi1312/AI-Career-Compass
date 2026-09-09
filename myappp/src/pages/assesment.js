import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Assessment() {
  const location = useLocation();
  const navigate = useNavigate();

  const field = location.state?.field || "";
  const domain = location.state?.domain || "";

  return (
    <div className="assessment-page">

      <div className="assessment-card">

        <div className="assessment-icon">
          📋
        </div>

        <h1>
          Take Assessment
        </h1>

        <p>
          Welcome to the assessment page!
        </p>

        <p>
          Answer the questions to discover
          <br />
          your best career domain.
        </p>


        {field && (
          <div className="assessment-info">

            <strong>
              Field: {field}
            </strong>

            {domain && (
              <strong>
                Domain: {domain}
              </strong>
            )}

          </div>
        )}


        <p className="assessment-message">
          Your assessment questions will appear here.
        </p>

        <button
          onClick={() => navigate("/home")}
        >
          Back to Home
        </button>

      </div>

    </div>
  );
}

export default Assessment;