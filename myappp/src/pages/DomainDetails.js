import React from "react";
import {
  useNavigate,
  useParams,
} from "react-router-dom";

function DomainDetails() {
  const { domain } = useParams();
  const navigate = useNavigate();

  const title = domain
    ? domain
        .replace(/-/g, " ")
        .replace(/\b\w/g, (letter) =>
          letter.toUpperCase()
        )
    : "Domain";

  return (
    <div className="domain-page">

      <div className="domain-card">

        <h1>
          {title}
        </h1>

        <p>
          Explore this career domain and understand
          the required skills and career opportunities.
        </p>

        <h2>
          Skills
        </h2>

        <div className="skills">
          <span>Programming</span>
          <span>Problem Solving</span>
          <span>Communication</span>
          <span>Technical Skills</span>
        </div>

        <h2>
          Career Opportunities
        </h2>

        <ul>
          <li>Developer</li>
          <li>Analyst</li>
          <li>Engineer</li>
          <li>Specialist</li>
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

export default DomainDetails;