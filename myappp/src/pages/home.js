
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  // ==========================================
  // CAREER FIELDS
  // ==========================================

  const careerFields = [
    {
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
      name: "Healthcare",
      icon: "🏥",
      description:
        "Discover technology and professional careers in healthcare.",
      domains: [
        "Health Informatics",
        "Medical Imaging",
        "Public Health",
        "Pharmacy Technology",
      ],
    },

    {
      name: "Agriculture",
      icon: "🌾",
      description:
        "Explore modern agriculture and AgriTech career opportunities.",
      domains: [
        "AgriTech",
        "Precision Agriculture",
        "Agricultural Engineering",
        "Food Technology",
      ],
    },

    {
      name: "Finance & Banking",
      icon: "💰",
      description:
        "Explore careers in banking, finance and financial technology.",
      domains: [
        "Financial Technology",
        "Investment Banking",
        "Financial Analysis",
        "Digital Banking",
      ],
    },

    {
      name: "Manufacturing & Automation",
      icon: "🏭",
      description:
        "Discover careers in manufacturing, robotics and automation.",
      domains: [
        "Robotics",
        "Industrial Automation",
        "Manufacturing Engineering",
        "Quality Control",
      ],
    },
  ];

  // ==========================================
  // STATES
  // ==========================================

  const [selectedField, setSelectedField] = useState(null);

  // Field popup
  const [showFieldPopup, setShowFieldPopup] = useState(false);
  const [enteredField, setEnteredField] = useState("");
  const [fieldError, setFieldError] = useState("");

  // Domain popup
  const [showDomainPopup, setShowDomainPopup] = useState(false);
  const [enteredDomain, setEnteredDomain] = useState("");
  const [domainError, setDomainError] = useState("");

  // ==========================================
  // SELECT A FIELD CARD
  // ==========================================

  const handleSelectField = () => {
    setEnteredField("");
    setFieldError("");
    setShowFieldPopup(true);
  };

  // ==========================================
  // FIELD VALIDATION
  // ==========================================

  const handleFieldSubmit = () => {
    const userField = enteredField.trim().toLowerCase();

    const validField = careerFields.find(
      (field) => field.name.toLowerCase() === userField
    );

    if (validField) {
      setSelectedField(validField);

      setShowFieldPopup(false);
      setEnteredField("");
      setFieldError("");

      // Scroll to career fields
      setTimeout(() => {
        const fieldsSection =
          document.querySelector(".fields-section");

        if (fieldsSection) {
          fieldsSection.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 100);
    } else {
      setFieldError(
        "Please enter a valid field from the displayed fields."
      );
    }
  };

  // ==========================================
  // CLICKING DISPLAYED FIELD
  // ==========================================

  const handleFieldClick = (field) => {
    setSelectedField(field);

    setEnteredDomain("");
    setDomainError("");

    setTimeout(() => {
      const domainsSection =
        document.querySelector(".domains-section");

      if (domainsSection) {
        domainsSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);
  };

  // ==========================================
  // CHOOSE A DOMAIN CARD
  // ==========================================

  const handleChooseDomain = () => {
    // If no field has been selected
    if (!selectedField) {
      setShowFieldPopup(true);
      setFieldError("");
      setEnteredField("");
      return;
    }

    setEnteredDomain("");
    setDomainError("");
    setShowDomainPopup(true);
  };

  // ==========================================
  // DOMAIN VALIDATION
  // ==========================================

  const handleDomainSubmit = () => {
    const userDomain = enteredDomain.trim().toLowerCase();

    if (!userDomain) {
      setDomainError("Please enter a domain.");
      return;
    }

    const validDomain = selectedField.domains.find(
      (domain) => domain.toLowerCase() === userDomain
    );

    if (validDomain) {
      setShowDomainPopup(false);

      // Navigate to Assessment
      navigate("/assessment", {
        state: {
          field: selectedField.name,
          domain: validDomain,
        },
      });
    } else {
      setDomainError(
        "Please enter a valid domain from the displayed domains."
      );
    }
  };

  // ==========================================
  // SELECT DOMAIN FROM POPUP TAG
  // ==========================================

  const handleDomainTagClick = (domain) => {
    setEnteredDomain(domain);
    setDomainError("");
  };

  // ==========================================
  // SELECT FIELD FROM POPUP TAG
  // ==========================================

  const handleFieldTagClick = (field) => {
    setEnteredField(field.name);
    setFieldError("");
  };

  return (
    <div className="home-page">

      {/* ==========================================
          NAVBAR
      ========================================== */}

      <nav className="navbar">

        <h2 className="logo">
          <span>AI</span> Career Compass
        </h2>

        <div className="nav-links">
          <span>Home</span>
          <span>Assessment</span>
          <span>Recommendation</span>
          <span>Profile</span>
        </div>

      </nav>


      {/* ==========================================
          CAREER JOURNEY
      ========================================== */}

      <section className="journey-section">

        <p className="journey-small-title">
          YOUR CAREER JOURNEY
        </p>

        <h1>
          How <span>AI Career Compass</span> Works
        </h1>


        <div className="journey-cards">

          {/* ======================================
              01 SELECT A FIELD
          ====================================== */}

          <div
            className="journey-card clickable-card"
            onClick={handleSelectField}
          >

            <div className="number-circle">
              01
            </div>

            <h3>
              Select a Field
            </h3>

            <p>
              Choose a career field that interests you.
            </p>

          </div>


          {/* ======================================
              02 CHOOSE A DOMAIN
          ====================================== */}

          <div
            className="journey-card clickable-card"
            onClick={handleChooseDomain}
          >

            <div className="number-circle">
              02
            </div>

            <h3>
              Choose a Domain
            </h3>

            <p>
              Enter one of the domains displayed below.
            </p>

          </div>


          {/* ======================================
              03 TAKE ASSESSMENT
          ====================================== */}

          <div
            className="journey-card clickable-card"
            onClick={() => navigate("/assessment")}
          >

            <div className="number-circle">
              03
            </div>

            <h3>
              Take Assessment
            </h3>

            <p>
              Complete interest and domain assessments.
            </p>

          </div>


          {/* ======================================
              04 RECOMMENDATION
          ====================================== */}

          <div className="journey-card">

            <div className="number-circle">
              04
            </div>

            <h3>
              Get Recommendation
            </h3>

            <p>
              Receive a personalized career recommendation.
            </p>

          </div>

        </div>

      </section>


      {/* ==========================================
          CAREER FIELDS
      ========================================== */}

      <section className="fields-section">

        <h1>
          Choose Your <span>Career Field</span>
        </h1>

        <p>
          Select a field that interests you and explore
          the career domains available within it.
        </p>


        <div className="fields-container">

          {careerFields.map((field, index) => (

            <div
              key={index}
              className={`field-card ${
                selectedField?.name === field.name
                  ? "active-field"
                  : ""
              }`}
              onClick={() => handleFieldClick(field)}
            >

              <div className="field-icon">
                {field.icon}
              </div>

              <h2>
                {field.name}
              </h2>

              <p>
                {field.description}
              </p>

              <button
                type="button"
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


      {/* ==========================================
          DISPLAY DOMAINS
      ========================================== */}

      {selectedField && (

        <section className="domains-section">

          <div className="domain-heading">

            <div className="domain-main-icon">
              {selectedField.icon}
            </div>

            <div>

              <h1>
                {selectedField.name}
              </h1>

              <p>
                Explore the popular domains available
                in this field.
              </p>

            </div>

          </div>


          <div className="domains-grid">

            {selectedField.domains.map(
              (domain, index) => (

                <div
                  className="domain-item"
                  key={index}
                >

                  <span className="domain-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>

                    <h3>
                      {domain}
                    </h3>

                    <p>
                      Explore skills, assessments and
                      career opportunities in {domain}.
                    </p>

                  </div>

                </div>

              )
            )}

          </div>

        </section>

      )}


      {/* ==========================================
          FIELD POPUP
      ========================================== */}

      {showFieldPopup && (

        <div
          className="popup-overlay"
          onClick={() => setShowFieldPopup(false)}
        >

          <div
            className="domain-popup"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="close-popup"
              type="button"
              onClick={() => setShowFieldPopup(false)}
            >
              ×
            </button>


            <h2>
              Select a Field
            </h2>


            <p className="popup-description">
              Enter the field you wish to choose
            </p>


            <input
              type="text"
              placeholder="Example: IT & Software"
              value={enteredField}
              onChange={(e) => {
                setEnteredField(e.target.value);
                setFieldError("");
              }}
            />


            {fieldError && (

              <p className="error-message">
                ⚠ {fieldError}
              </p>

            )}


            <div className="popup-buttons">

              <button
                className="cancel-btn"
                type="button"
                onClick={() =>
                  setShowFieldPopup(false)
                }
              >
                Cancel
              </button>


              <button
                className="continue-btn"
                type="button"
                onClick={handleFieldSubmit}
              >
                Continue
              </button>

            </div>


            <div className="valid-domains">

              <p>
                Available Fields:
              </p>

              <div className="domain-tags">

                {careerFields.map(
                  (field, index) => (

                    <span
                      key={index}
                      onClick={() =>
                        handleFieldTagClick(field)
                      }
                    >
                      {field.name}
                    </span>

                  )
                )}

              </div>

            </div>

          </div>

        </div>

      )}


      {/* ==========================================
          DOMAIN POPUP
      ========================================== */}

      {showDomainPopup && selectedField && (

        <div
          className="popup-overlay"
          onClick={() => setShowDomainPopup(false)}
        >

          <div
            className="domain-popup"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="close-popup"
              type="button"
              onClick={() =>
                setShowDomainPopup(false)
              }
            >
              ×
            </button>


            <h2>
              Enter Domain
            </h2>


            <p className="popup-description">
              Enter the domain you wish to choose
            </p>


            <p className="current-field">
              Current Field:{" "}
              <strong>
                {selectedField.name}
              </strong>
            </p>


            <input
              type="text"
              placeholder="Example: Web Development"
              value={enteredDomain}
              onChange={(e) => {
                setEnteredDomain(e.target.value);
                setDomainError("");
              }}
            />


            {domainError && (

              <p className="error-message">
                ⚠ {domainError}
              </p>

            )}


            <div className="popup-buttons">

              <button
                className="cancel-btn"
                type="button"
                onClick={() =>
                  setShowDomainPopup(false)
                }
              >
                Cancel
              </button>


              <button
                className="continue-btn"
                type="button"
                onClick={handleDomainSubmit}
              >
                Continue
              </button>

            </div>


            {/* ======================================
                DISPLAY CURRENT FIELD DOMAINS
            ====================================== */}

            <div className="valid-domains">

              <p>
                Available Domains:
              </p>


              <div className="domain-tags">

                {selectedField.domains.map(
                  (domain, index) => (

                    <span
                      key={index}
                      onClick={() =>
                        handleDomainTagClick(domain)
                      }
                    >
                      {domain}
                    </span>

                  )
                )}

              </div>

            </div>

          </div>

        </div>

      )}


      {/* ==========================================
          FOOTER
      ========================================== */}

      <footer>

        <h2>
          AI Career Compass
        </h2>

        <p>
          Find your direction. Build your future.
        </p>

        <small>
          © 2026 AI Career Compass. All rights reserved.
        </small>

      </footer>

    </div>
  );
}

export default Home;
