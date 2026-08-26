import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import domainData from "../Data/domainData";
import "./DomainDetails.css";

function DomainDetails() {
  const { domain } = useParams();
  const navigate = useNavigate();

  const data = domainData[domain];

  // Domain not found
  if (!data) {
    return (
      <div className="domain-not-found">
        <h1>Domain Not Found</h1>

        <p>
          Sorry, this domain details are not available.
        </p>

        <button onClick={() => navigate("/home")}>
          ← Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="domain-details-page">

      {/* =========================
          BACK BUTTON
      ========================= */}

      <button
        className="back-button"
        onClick={() => navigate("/home")}
      >
        ← Back to Domains
      </button>


      {/* =========================
          HERO
      ========================= */}

      <section className="domain-hero">

        <div className="domain-icon">
          {data.icon}
        </div>

        <span className="domain-label">
          {data.category || "CAREER DOMAIN"}
        </span>

        <h1>{data.title}</h1>

        <p>
          {data.short}
        </p>

      </section>


      {/* =========================
          INTRODUCTION
      ========================= */}

      {data.introduction && (
        <section className="detail-section">

          <h2>
            📖 What is {data.title}?
          </h2>

          <p>
            {data.introduction}
          </p>

        </section>
      )}


      {/* =========================
          WHY LEARN
      ========================= */}

      {data.whyLearn && (
        <section className="detail-section">

          <h2>
            ⭐ Why Learn {data.title}?
          </h2>

          <p>
            {data.whyLearn}
          </p>

        </section>
      )}


      {/* =========================
          FRONTEND
      ========================= */}

      {data.frontend && (
        <section className="detail-section">

          <h2>
            🎨 Front-End Development
          </h2>

          <p>
            {data.frontend}
          </p>

        </section>
      )}


      {/* =========================
          BACKEND
      ========================= */}

      {data.backend && (
        <section className="detail-section">

          <h2>
            ⚙️ Back-End Development
          </h2>

          <p>
            {data.backend}
          </p>

        </section>
      )}


      {/* =========================
          ROADMAP
      ========================= */}

      {data.roadmap && (
        <section className="detail-section">

          <h2>
            🚀 Learning Roadmap
          </h2>

          <p>
            Follow these steps to learn {data.title}
            from beginner to advanced level.
          </p>

          <div className="roadmap-container">

            {data.roadmap.map((item) => (

              <div
                className="roadmap-card"
                key={item.step}
              >

                <div className="roadmap-number">
                  {String(item.step).padStart(2, "0")}
                </div>

                <div className="roadmap-content">

                  <h3>
                    {item.icon} {item.title}
                  </h3>

                  <p>
                    {item.description}
                  </p>

                  {item.topics && (
                    <>
                      <h4>
                        📚 Topics to Learn
                      </h4>

                      <div className="topic-list">

                        {item.topics.map((topic) => (

                          <span
                            className="topic-tag"
                            key={topic}
                          >
                            {topic}
                          </span>

                        ))}

                      </div>
                    </>
                  )}

                </div>

              </div>

            ))}

          </div>

        </section>
      )}


      {/* =========================
          SKILLS
      ========================= */}

      {data.skills && (
        <section className="detail-section">

          <h2>
            🛠️ Important Skills
          </h2>

          <div className="skills-container">

            {data.skills.map((skill) => (

              <span
                className="skill-tag"
                key={skill}
              >
                ✓ {skill}
              </span>

            ))}

          </div>

        </section>
      )}


      {/* =========================
          CAREERS
      ========================= */}

      {data.careers && (
        <section className="detail-section">

          <h2>
            💼 Career Opportunities
          </h2>

          <div className="career-grid">

            {data.careers.map((career) => (

              <div
                className="career-card"
                key={career}
              >
                ✓ {career}
              </div>

            ))}

          </div>

        </section>
      )}


      {/* =========================
          LEARNING LEVELS
      ========================= */}

      <section className="detail-section">

        <h2>
          🎯 Learning Levels
        </h2>

        <div className="levels-grid">

          <div className="level-card">

            <h3>
              🌱 Beginner
            </h3>

            <p>
              {data.beginner ||
                `Start with basic concepts and understand the foundation of ${data.title}.`}
            </p>

          </div>


          <div className="level-card">

            <h3>
              ⚡ Intermediate
            </h3>

            <p>
              {data.intermediate ||
                "Build practical projects and improve your technical knowledge."}
            </p>

          </div>


          <div className="level-card">

            <h3>
              🏆 Advanced
            </h3>

            <p>
              {data.advanced ||
                "Explore advanced concepts and industry-level technologies."}
            </p>

          </div>

        </div>

      </section>


      {/* =========================
          CTA
      ========================= */}

      <section className="domain-cta">

        <h2>
          Ready to explore {data.title}?
        </h2>

        <p>
          Learn the required skills, build projects
          and discover your career path.
        </p>

        <button
          onClick={() => navigate("/home")}
        >
          ← Explore More Domains
        </button>

      </section>

    </div>
  );
}

export default DomainDetails;