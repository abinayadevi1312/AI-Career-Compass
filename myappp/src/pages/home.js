import React, { useState } from "react";
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
      { name: "Web Development", id: "web-development" },
      { name: "Software Engineering", id: "software-engineering" },
      { name: "Data Science", id: "data-science" },
      { name: "Artificial Intelligence", id: "artificial-intelligence" },
      { name: "Machine Learning", id: "machine-learning" },
      { name: "Cybersecurity", id: "cybersecurity" },
      { name: "Cloud Computing", id: "cloud-computing" },
      { name: "DevOps", id: "devops" },
      { name: "UI/UX Design", id: "ui-ux-design" },
      { name: "Mobile App Development", id: "mobile-app-development" },
    ],
  },

  {
    id: 2,
    name: "Healthcare",
    icon: "🏥",
    description:
      "Discover technology and professional careers in healthcare.",
    domains: [
      { name: "Medical Coding", id: "medical-coding" },
      { name: "Health Informatics", id: "health-informatics" },
      {
        name: "Healthcare Data Analytics",
        id: "healthcare-data-analytics",
      },
      { name: "Medical Imaging", id: "medical-imaging" },
      { name: "Clinical Research", id: "clinical-research" },
      {
        name: "Hospital Administration",
        id: "hospital-administration",
      },
      {
        name: "Biomedical Engineering",
        id: "biomedical-engineering",
      },
      { name: "Healthcare AI", id: "healthcare-ai" },
      {
        name: "Pharmacy Technology",
        id: "pharmacy-technology",
      },
      { name: "Public Health", id: "public-health" },
    ],
  },

  {
    id: 3,
    name: "Agriculture",
    icon: "🌾",
    description:
      "Explore modern agriculture and AgriTech career opportunities.",
    domains: [
      {
        name: "Precision Agriculture",
        id: "precision-agriculture",
      },
      { name: "AgriTech", id: "agritech" },
      { name: "Smart Farming", id: "smart-farming" },
      {
        name: "Agricultural Data Analytics",
        id: "agricultural-data-analytics",
      },
      {
        name: "Agricultural IoT",
        id: "agricultural-iot",
      },
      { name: "Drone Technology", id: "drone-technology" },
      { name: "Soil Science", id: "soil-science" },
      { name: "Crop Management", id: "crop-management" },
      {
        name: "Agricultural Biotechnology",
        id: "agricultural-biotechnology",
      },
      { name: "Food Technology", id: "food-technology" },
    ],
  },

  {
    id: 4,
    name: "Finance & Banking",
    icon: "💰",
    description:
      "Explore careers in banking, finance and financial technology.",
    domains: [
      {
        name: "Banking Operations",
        id: "banking-operations",
      },
      {
        name: "Financial Analysis",
        id: "financial-analysis",
      },
      {
        name: "Investment Banking",
        id: "investment-banking",
      },
      { name: "Accounting", id: "accounting" },
      { name: "FinTech", id: "fintech" },
      {
        name: "Risk Management",
        id: "risk-management",
      },
      { name: "Digital Banking", id: "digital-banking" },
      { name: "Insurance", id: "insurance" },
      {
        name: "Credit Analysis",
        id: "credit-analysis",
      },
      {
        name: "Financial Data Analytics",
        id: "financial-data-analytics",
      },
    ],
  },

  {
    id: 5,
    name: "Manufacturing & Automation",
    icon: "🏭",
    description:
      "Discover careers in manufacturing, robotics and automation.",
    domains: [
      {
        name: "Industrial Automation",
        id: "industrial-automation",
      },
      { name: "Robotics", id: "robotics" },
      {
        name: "Manufacturing Engineering",
        id: "manufacturing-engineering",
      },
      {
        name: "Mechanical Design",
        id: "mechanical-design",
      },
      {
        name: "Quality Control",
        id: "quality-control",
      },
      {
        name: "Supply Chain Management",
        id: "supply-chain-management",
      },
      {
        name: "Production Management",
        id: "production-management",
      },
      {
        name: "IoT & Smart Manufacturing",
        id: "iot-smart-manufacturing",
      },
      { name: "CAD/CAM", id: "cad-cam" },
      {
        name: "Industrial Data Analytics",
        id: "industrial-data-analytics",
      },
    ],
  },
];

function Home() {
  const navigate = useNavigate();

  const [selectedField, setSelectedField] = useState(null);

  // =====================================
  // FIELD CLICK
  // =====================================

  const handleFieldClick = (field) => {
    setSelectedField(field);

    setTimeout(() => {
      const section = document.getElementById("domains-section");

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);
  };

  // =====================================
  // DOMAIN CLICK
  // =====================================

  const handleDomainClick = (domainId) => {
    navigate(`/domain/${domainId}`);
  };

  return (
    <div className="home-page">

      {/* =====================================
          NAVBAR
      ===================================== */}

      <nav className="navbar">

        <div className="logo">
          AI <span>Career Compass</span>
        </div>

        <div className="nav-links">

          <button onClick={() => navigate("/home")}>
            Home
          </button>

          <button onClick={() => navigate("/assessment")}>
            Assessment
          </button>

          <button
            onClick={() => navigate("/recommendation")}
          >
            Recommendation
          </button>

          <button
            onClick={() => navigate("/profile")}
          >
            Profile
          </button>

        </div>

      </nav>


      {/* =====================================
          HERO SECTION
      ===================================== */}

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
            Explore different career fields, discover
            popular domains, assess your interests and
            find the career path that matches your
            skills and interests.
          </p>

          <button
            className="start-btn"
            onClick={() => {
              document
                .getElementById("career-fields")
                ?.scrollIntoView({
                  behavior: "smooth",
                });
            }}
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


      {/* =====================================
          CAREER FIELDS
      ===================================== */}

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
            Select a field that interests you and explore
            the career domains available within it.
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
              onClick={() => handleFieldClick(field)}
            >

              <div className="field-icon">
                {field.icon}
              </div>

              <h3>
                {field.name}
              </h3>

              <p>
                {field.description}
              </p>

              <button
                type="button"
                className="view-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  handleFieldClick(field);
                }}
              >
                View Domains →
              </button>

            </div>

          ))}

        </div>

      </section>


      {/* =====================================
          SELECTED FIELD DOMAINS
      ===================================== */}

      {selectedField && (

        <section
          className="domains-section"
          id="domains-section"
        >

          <div className="domain-heading">

            <div className="large-icon">
              {selectedField.icon}
            </div>

            <div>

              <h2>
                {selectedField.name}
              </h2>

              <p>
                Explore the popular domains available
                in this field.
              </p>

            </div>

          </div>


          {/* =====================================
              DOMAIN CARDS
          ===================================== */}

          <div className="domains-grid">

            {selectedField.domains.map(
              (domain, index) => (

                <div
                  className="domain-card"
                  key={domain.id}
                  onClick={() =>
                    handleDomainClick(domain.id)
                  }
                >

                  <div className="domain-number">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="domain-info">

                    <h3>
                      {domain.name}
                    </h3>

                    <p>
                      Explore skills, assessments
                      and career opportunities in{" "}
                      {domain.name}.
                    </p>

                  </div>

                  <div className="domain-arrow">
                    →
                  </div>

                </div>

              )
            )}

          </div>


          {/* =====================================
              ASSESSMENT BOX
          ===================================== */}

          <div className="assessment-box">

            <h2>
              Ready to find your best-fit domain?
            </h2>

            <p>
              Take our interest assessment and domain
              assessment. Your scores will be analysed
              to recommend suitable career domains.
            </p>

            <button
              onClick={() =>
                navigate("/assessment")
              }
            >
              Start Assessment →
            </button>

          </div>

        </section>

      )}


      {/* =====================================
          HOW IT WORKS
      ===================================== */}

      <section className="how-section">

        <div className="section-heading">

          <p>
            YOUR CAREER JOURNEY
          </p>

          <h2>
            How <span>AI Career Compass</span> Works
          </h2>

        </div>


        <div className="steps-container">

          <div className="step">

            <div>01</div>

            <h3>
              Select a Field
            </h3>

            <p>
              Choose a career field that interests you.
            </p>

          </div>


          <div className="step">

            <div>02</div>

            <h3>
              Choose a Domain
            </h3>

            <p>
              Explore popular domains within the
              selected field.
            </p>

          </div>


          <div className="step">

            <div>03</div>

            <h3>
              Take Assessment
            </h3>

            <p>
              Complete interest and domain assessments.
            </p>

          </div>


          <div className="step">

            <div>04</div>

            <h3>
              Get Recommendation
            </h3>

            <p>
              Receive a personalized career domain
              recommendation.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================
          FOOTER
      ===================================== */}

      <footer>

        <h3>
          AI Career Compass
        </h3>

        <p>
          Find your direction. Build your future.
        </p>

        <p className="copyright">
          © 2026 AI Career Compass.
          All rights reserved.
        </p>

      </footer>

    </div>
  );
}

export default Home;