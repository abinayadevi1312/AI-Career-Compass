import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const careerFields = [
  {
    id: 1,
    name: "IT & Software",
    icon: "💻",
    description:
      "Explore technology and software-based career opportunities.",
    domains: [
      "Web Development",
      "Software Engineering",
      "Data Science",
      "Artificial Intelligence",
      "Machine Learning",
      "Cybersecurity",
      "Cloud Computing",
      "DevOps",
      "UI/UX Design",
      "Mobile App Development",
    ],
  },

  {
    id: 2,
    name: "Healthcare",
    icon: "🏥",
    description:
      "Discover technology and professional careers in healthcare.",
    domains: [
      "Medical Coding",
      "Health Informatics",
      "Healthcare Data Analytics",
      "Medical Imaging",
      "Clinical Research",
      "Hospital Administration",
      "Biomedical Engineering",
      "Healthcare AI",
      "Pharmacy Technology",
      "Public Health",
    ],
  },

  {
    id: 3,
    name: "Agriculture",
    icon: "🌾",
    description:
      "Explore modern agriculture and AgriTech career opportunities.",
    domains: [
      "Precision Agriculture",
      "AgriTech",
      "Smart Farming",
      "Agricultural Data Analytics",
      "Agricultural IoT",
      "Drone Technology",
      "Soil Science",
      "Crop Management",
      "Agricultural Biotechnology",
      "Food Technology",
    ],
  },

  {
    id: 4,
    name: "Finance & Banking",
    icon: "💰",
    description:
      "Explore careers in banking, finance and financial technology.",
    domains: [
      "Banking Operations",
      "Financial Analysis",
      "Investment Banking",
      "Accounting",
      "FinTech",
      "Risk Management",
      "Digital Banking",
      "Insurance",
      "Credit Analysis",
      "Financial Data Analytics",
    ],
  },

  {
    id: 5,
    name: "Manufacturing & Automation",
    icon: "🏭",
    description:
      "Discover careers in manufacturing, robotics and automation.",
    domains: [
      "Industrial Automation",
      "Robotics",
      "Manufacturing Engineering",
      "Mechanical Design",
      "Quality Control",
      "Supply Chain Management",
      "Production Management",
      "IoT & Smart Manufacturing",
      "CAD/CAM",
      "Industrial Data Analytics",
    ],
  },
];

function Home() {
  const navigate = useNavigate();

  const [selectedField, setSelectedField] = useState(null);

  // 🔐 Login Protection
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (isLoggedIn !== "true") {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="home-page">

      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          AI <span>Career Compass</span>
        </div>

        <div className="nav-links">
          <a href="/home">Home</a>
          <a href="/assessment">Assessment</a>
          <a href="/recommendation">Recommendation</a>
          <a href="/profile">Profile</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">

        <div className="hero-content">
          <p className="welcome-text">
            WELCOME TO AI CAREER COMPASS
          </p>

          <h1>
            Discover Your
            <span> Perfect Career Path</span>
          </h1>

          <p>
            Explore different career fields, discover popular domains,
            assess your interests and find the career path that matches
            your skills and interests.
          </p>

          <button
            className="start-btn"
            onClick={() =>
              document
                .getElementById("career-fields")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Explore Career Fields →
          </button>
        </div>

        <div className="hero-image">
          <div className="compass">
            🧭
          </div>
        </div>

      </section>

      {/* Career Fields */}
      <section
        className="fields-section"
        id="career-fields"
      >

        <div className="section-heading">
          <p>EXPLORE YOUR OPTIONS</p>

          <h2>
            Choose Your <span>Career Field</span>
          </h2>

          <p>
            Select a field that interests you and explore the career
            domains available within it.
          </p>
        </div>

        <div className="fields-container">

          {careerFields.map((field) => (

            <div
              className={`field-card ${
                selectedField?.id === field.id
                  ? "selected"
                  : ""
              }`}
              key={field.id}
              onClick={() => setSelectedField(field)}
            >

              <div className="field-icon">
                {field.icon}
              </div>

              <h3>{field.name}</h3>

              <p>{field.description}</p>

              <button className="view-btn">
                View Domains →
              </button>

            </div>

          ))}

        </div>
      </section>

      {/* Selected Field Domains */}

      {selectedField && (

        <section className="domains-section">

          <div className="domain-heading">

            <div className="large-icon">
              {selectedField.icon}
            </div>

            <div>
              <h2>{selectedField.name}</h2>

              <p>
                Explore the popular domains available in this field.
              </p>
            </div>

          </div>

          <div className="domains-grid">

            {selectedField.domains.map((domain, index) => (

              <div
                className="domain-card"
                key={domain}
              >

                <div className="domain-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div>
                  <h3>{domain}</h3>

                  <p>
                    Explore skills, assessments and career
                    opportunities in {domain}.
                  </p>
                </div>

              </div>

            ))}

          </div>

          <div className="assessment-box">

            <h2>
              Ready to find your best-fit domain?
            </h2>

            <p>
              Take our interest assessment and domain assessment.
              Your scores will be analysed to recommend suitable
              career domains.
            </p>

            <button
              onClick={() =>
                (window.location.href = "/assessment")
              }
            >
              Start Assessment →
            </button>

          </div>

        </section>

      )}

      {/* How It Works */}

      <section className="how-section">

        <div className="section-heading">

          <p>YOUR CAREER JOURNEY</p>

          <h2>
            How <span>AI Career Compass</span> Works
          </h2>

        </div>

        <div className="steps-container">

          <div className="step">
            <div>01</div>

            <h3>Select a Field</h3>

            <p>
              Choose a career field that interests you.
            </p>
          </div>

          <div className="step">
            <div>02</div>

            <h3>Choose a Domain</h3>

            <p>
              Explore popular domains within the selected field.
            </p>
          </div>

          <div className="step">
            <div>03</div>

            <h3>Take Assessment</h3>

            <p>
              Complete interest and domain assessments.
            </p>
          </div>

          <div className="step">
            <div>04</div>

            <h3>Get Recommendation</h3>

            <p>
              Receive a personalized career domain recommendation.
            </p>
          </div>

        </div>

      </section>

      {/* Footer */}

      <footer>

        <h3>AI Career Compass</h3>

        <p>
          Find your direction. Build your future.
        </p>

        <p className="copyright">
          © 2026 AI Career Compass. All rights reserved.
        </p>

      </footer>

    </div>
  );
}

export default Home;