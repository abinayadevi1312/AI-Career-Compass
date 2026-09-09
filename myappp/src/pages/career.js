import React from "react";
import { useNavigate } from "react-router-dom";

function Career() {
  const navigate = useNavigate();

  return (
    <div className="career-page">

      <div className="career-card">

        <div className="trophy">
          🏆
        </div>

        <h1>
          Your Career Recommendation
        </h1>

        <div className="recommendation-box">

          <p>
            Top Domain Match
          </p>

          <h2>
            Web Development
          </h2>

          <span>
            90% Match
          </span>

        </div>


        <h3>
          Why this suits you:
        </h3>

        <ul>
          <li>
            ✓ Strong problem-solving skills
          </li>

          <li>
            ✓ Enjoys working with technology
          </li>

          <li>
            ✓ Good analytical thinking
          </li>

          <li>
            ✓ Creative and innovative mindset
          </li>
        </ul>


        <button
          onClick={() => navigate("/home")}
        >
          Back to Home
        </button>

      </div>

    </div>
  );
}

export default Career;