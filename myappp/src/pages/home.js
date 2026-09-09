import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  // ================= STATES =================

  const [selectedField, setSelectedField] = useState(null);

  const [showFieldPopup, setShowFieldPopup] = useState(false);
  const [showPreferencePopup, setShowPreferencePopup] = useState(false);
  const [showDomainPopup, setShowDomainPopup] = useState(false);

  const [enteredDomain, setEnteredDomain] = useState("");
  const [domainError, setDomainError] = useState("");

  // ================= CAREER FIELDS =================

  const careerFields = [
    {
      name: "IT & Software",
      icon: "💻",
      description:
        "Explore software technologies, IT domains, skills and career opportunities.",
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
        "Explore healthcare, medical technology and health-related career opportunities.",
      domains: [
        "Medical",
        "Nursing",
        "Pharmacy",
        "Medical Laboratory",
      ],
    },

    {
      name: "Agriculture",
      icon: "🌱",
      description:
        "Explore modern farming, agricultural technology and career opportunities.",
      domains: [
        "Agricultural Engineering",
        "Horticulture",
        "Agronomy",
        "Agricultural Technology",
      ],
    },

    {
      name: "Finance & Banking",
      icon: "🏦",
      description:
        "Explore banking, finance, investment and financial technology careers.",
      domains: [
        "Banking",
        "Accounting",
        "Financial Analysis",
        "Investment",
      ],
    },

    {
      name: "Manufacturing & Automation",
      icon: "🏭",
      description:
        "Explore manufacturing, robotics, automation and industrial technologies.",
      domains: [
        "Industrial Engineering",
        "Robotics",
        "Automation",
        "Production Management",
      ],
    },
  ];

  // ================= SELECT FIELD =================

  const handleSelectField = () => {
    setShowFieldPopup(true);
  };

  // ================= FIELD CLICK =================

  const handleFieldClick = (field) => {
    setSelectedField(field);

    setShowFieldPopup(false);

    setEnteredDomain("");
    setDomainError("");

    // After selecting field,
    // directly show Choose Domain popup
    setShowPreferencePopup(true);
  };

  // ================= CHOOSE DOMAIN CARD =================

  const handleChooseDomain = () => {
    // If field is not selected
    if (!selectedField) {
      setShowFieldPopup(true);
      return;
    }

    // If field already selected
    setShowPreferencePopup(true);
  };

  // ================= YES =================

  const handlePreferenceYes = () => {
    setShowPreferencePopup(false);

    setEnteredDomain("");
    setDomainError("");

    setShowDomainPopup(true);
  };

  // ================= NO =================

  const handlePreferenceNo = () => {
    if (!selectedField) {
      setShowPreferencePopup(false);
      setShowFieldPopup(true);
      return;
    }

    setShowPreferencePopup(false);

    navigate("/scenario-assessment", {
      state: {
        field: selectedField.name,
      },
    });
  };

  // ================= DOMAIN BUTTON =================

  const handleDomainClick = (domain) => {
    setEnteredDomain(domain);
    setDomainError("");
  };

  // ================= DOMAIN CONTINUE =================

  const handleDomainSubmit = () => {
    if (!selectedField) {
      setDomainError("Please select a career field first.");
      return;
    }

    if (!enteredDomain.trim()) {
      setDomainError("Please select a domain.");
      return;
    }

    const matchedDomain = selectedField.domains.find(
      (domain) =>
        domain.toLowerCase() ===
        enteredDomain.trim().toLowerCase()
    );

    if (!matchedDomain) {
      setDomainError(
        `Please select a valid domain from ${selectedField.name}.`
      );
      return;
    }

    setDomainError("");

    setShowDomainPopup(false);

    navigate("/assessment", {
      state: {
        field: selectedField.name,
        domain: matchedDomain,
        assessmentType: "preferred-domain",
      },
    });
  };

  // ================= CLOSE POPUPS =================

  const closeFieldPopup = () => {
    setShowFieldPopup(false);
  };

  const closePreferencePopup = () => {
    setShowPreferencePopup(false);
  };

  const closeDomainPopup = () => {
    setShowDomainPopup(false);
    setEnteredDomain("");
    setDomainError("");
  };

  // ================= GO RECOMMENDATION =================

  const handleRecommendation = () => {
    if (!selectedField) {
      setShowFieldPopup(true);
      return;
    }

    navigate("/scenario-assessment", {
      state: {
        field: selectedField.name,
      },
    });
  };

  // ================= JSX =================

  return (
    <div className="home-page">

      {/* ================= NAVBAR ================= */}

      <nav className="navbar">

        <h2 className="logo">
          <span>AI</span> Career Compass
        </h2>

        <div className="nav-links">

          <span
            className="nav-click"
            onClick={() => navigate("/home")}
          >
            Home
          </span>

          <span
            className="nav-click"
            onClick={() => navigate("/assessment")}
          >
            Assessment
          </span>

          <span
            className="nav-click"
            onClick={handleRecommendation}
          >
            Recommendation
          </span>

          <span className="nav-click">
            Profile
          </span>

        </div>

      </nav>


      {/* ================= JOURNEY SECTION ================= */}

      <section className="journey-section">

        <p className="journey-small-title">
          YOUR CAREER JOURNEY
        </p>

        <h1>
          How <span>AI Career Compass</span> Works
        </h1>


        {/* ================= FOUR CARDS ================= */}

        <div className="journey-cards">

          {/* 01 */}

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
              Choose a career field that
              interests you.
            </p>

          </div>


          {/* 02 */}

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
              Explore popular domains within
              the selected field.
            </p>

          </div>


          {/* 03 */}

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
              Complete interest and domain
              assessments.
            </p>

          </div>


          {/* 04 */}

          <div
            className="journey-card clickable-card"
            onClick={handleRecommendation}
          >

            <div className="number-circle">
              04
            </div>

            <h3>
              Get Recommendation
            </h3>

            <p>
              Receive a personalized career
              domain recommendation.
            </p>

          </div>

        </div>

      </section>


      {/* ================= SELECTED FIELD ================= */}

      {selectedField && (

        <div className="selected-field">

          <p>
            Selected Career Field
          </p>

          <h2>
            {selectedField.icon}{" "}
            {selectedField.name}
          </h2>

        </div>

      )}


      {/* ================= FOOTER ================= */}

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


      {/* =================================================
          FIELD POPUP
      ================================================= */}

      {showFieldPopup && (

        <div className="popup-overlay">

          <div className="popup-box field-popup">

            <button
              className="close-button"
              onClick={closeFieldPopup}
            >
              ×
            </button>

            <div className="popup-icon">
              💼
            </div>

            <h2>
              Choose Your Career Field
            </h2>

            <p className="popup-subtitle">
              Select the field you are
              interested in.
            </p>


            <div className="field-options">

              {careerFields.map((field, index) => (

                <button
                  type="button"
                  key={index}
                  className="field-option"
                  onClick={() =>
                    handleFieldClick(field)
                  }
                >

                  <span className="field-icon">
                    {field.icon}
                  </span>

                  <span className="field-name">
                    {field.name}
                  </span>

                  <span className="arrow">
                    →
                  </span>

                </button>

              ))}

            </div>

          </div>

        </div>

      )}


      {/* =================================================
          CHOOSE DOMAIN PREFERENCE POPUP
      ================================================= */}

      {showPreferencePopup && selectedField && (

        <div className="popup-overlay">

          <div className="popup-box preference-popup">

            <button
              className="close-button"
              onClick={closePreferencePopup}
            >
              ×
            </button>


            <div className="popup-icon">
              🎯
            </div>


            <h2>
              Choose Your Domain
            </h2>


            <p className="popup-subtitle">
              Do you have a preferred domain?
            </p>


            {/* Selected field */}

            <div className="selected-field-popup">

              <span>
                {selectedField.icon}
              </span>

              <div>

                <small>
                  Selected Field
                </small>

                <strong>
                  {selectedField.name}
                </strong>

              </div>

            </div>


            {/* YES */}

            <label className="radio-option">

              <input
                type="radio"
                name="domainPreference"
                onChange={handlePreferenceYes}
              />

              <div>

                <strong>
                  Yes, I have a preferred domain
                </strong>

                <small>
                  I already know which domain
                  I want to choose.
                </small>

              </div>

            </label>


            {/* NO */}

            <label className="radio-option">

              <input
                type="radio"
                name="domainPreference"
                onChange={handlePreferenceNo}
              />

              <div>

                <strong>
                  No, I don't have a
                  preferred domain
                </strong>

                <small>
                  Take me to scenario-based
                  questions.
                </small>

              </div>

            </label>

          </div>

        </div>

      )}


      {/* =================================================
          PREFERRED DOMAIN POPUP
      ================================================= */}

      {showDomainPopup && selectedField && (

        <div className="popup-overlay">

          <div className="popup-box domain-popup">

            <button
              className="close-button"
              onClick={closeDomainPopup}
            >
              ×
            </button>


            <div className="popup-icon">
              🎓
            </div>


            <h2>
              Enter Your Preferred Domain
            </h2>


            <p className="popup-subtitle">
              Choose a domain from{" "}
              <strong>
                {selectedField.name}
              </strong>
            </p>


            {/* INPUT */}

            <input
              type="text"
              value={enteredDomain}
              onChange={(e) => {
                setEnteredDomain(e.target.value);
                setDomainError("");
              }}
              placeholder="Enter your preferred domain"
              className="domain-input"
            />


            {/* AVAILABLE DOMAINS */}

            <div className="available-domains">

              <p className="available-title">
                Available Domains
              </p>


              <div className="domain-options">

                {selectedField.domains.map(
                  (domain, index) => (

                    <button
                      type="button"
                      key={index}
                      className={
                        enteredDomain === domain
                          ? "domain-button selected-domain"
                          : "domain-button"
                      }
                      onClick={() =>
                        handleDomainClick(domain)
                      }
                    >
                      {domain}
                    </button>

                  )
                )}

              </div>

            </div>


            {/* ERROR */}

            {domainError && (

              <p className="domain-error">
                {domainError}
              </p>

            )}


            {/* BUTTONS */}

            <div className="popup-buttons">

              <button
                type="button"
                className="cancel-button"
                onClick={closeDomainPopup}
              >
                Cancel
              </button>


              <button
                type="button"
                className="continue-button"
                onClick={handleDomainSubmit}
              >
                Continue
              </button>

            </div>

          </div>

        </div>

      )}

    </div>
  );
}

export default Home;


/* =========================================================
   CSS
========================================================= */

const style = document.createElement("style");

style.innerHTML = `

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: #ffffff;
}

.home-page {
  min-height: 100vh;
  background: #ffffff;
  display: flex;
  flex-direction: column;
}


/* ================= NAVBAR ================= */

.navbar {
  height: 80px;
  padding: 0 7%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #e5e7eb;
  background: #ffffff;
}

.logo {
  margin: 0;
  font-size: 27px;
  font-weight: 700;
  color: #111827;
}

.logo span {
  color: #2563eb;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 42px;
  color: #1e293b;
  font-size: 16px;
}

.nav-click {
  cursor: pointer;
  transition: 0.2s;
}

.nav-click:hover {
  color: #2563eb;
}


/* ================= JOURNEY ================= */

.journey-section {
  text-align: center;
  padding: 55px 6% 75px;
}

.journey-small-title {
  color: #2563eb;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 3px;
  margin: 0 0 12px;
}

.journey-section h1 {
  color: #111827;
  font-size: 38px;
  margin: 0 0 55px;
}

.journey-section h1 span {
  color: #2563eb;
}


/* ================= CARDS ================= */

.journey-cards {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px;
}

.journey-card {
  min-height: 225px;
  padding: 30px 22px;
  border: 1px solid #dbe3ef;
  border-radius: 18px;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: 0.3s;
}

.clickable-card {
  cursor: pointer;
}

.clickable-card:hover {
  transform: translateY(-6px);
  box-shadow:
    0 12px 30px rgba(0,0,0,0.08);
  border-color: #bfdbfe;
}

.number-circle {
  width: 62px;
  height: 62px;
  border-radius: 50%;
  background: #eff6ff;
  color: #2563eb;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 17px;
  font-weight: 700;
  margin-bottom: 17px;
}

.journey-card h3 {
  color: #111827;
  font-size: 20px;
  margin: 0 0 10px;
}

.journey-card p {
  color: #64748b;
  font-size: 15px;
  line-height: 1.5;
  margin: 0;
}


/* ================= SELECTED FIELD ================= */

.selected-field {
  width: 90%;
  max-width: 600px;
  margin: -20px auto 45px;
  padding: 20px;
  text-align: center;
  border-radius: 15px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
}

.selected-field p {
  margin: 0 0 5px;
  color: #64748b;
  font-size: 14px;
}

.selected-field h2 {
  margin: 0;
  color: #2563eb;
  font-size: 22px;
}


/* ================= FOOTER ================= */

footer {
  margin-top: auto;
  background: #0f172a;
  color: #ffffff;
  text-align: center;
  padding: 45px 20px;
}

footer h3 {
  margin: 0 0 10px;
  font-size: 24px;
}

footer p {
  margin: 7px;
  color: #cbd5e1;
}

footer .copyright {
  margin-top: 25px;
  color: #94a3b8;
  font-size: 14px;
}


/* ================= POPUP ================= */

.popup-overlay {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: rgba(15, 23, 42, 0.55);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.popup-box {
  width: 520px;
  max-width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  background: #ffffff;
  border-radius: 20px;
  padding: 35px;
  position: relative;
  box-shadow:
    0 20px 50px rgba(0,0,0,0.2);
}

.field-popup {
  width: 570px;
}

.preference-popup {
  width: 530px;
}

.domain-popup {
  width: 620px;
}


/* ================= CLOSE ================= */

.close-button {
  position: absolute;
  top: 12px;
  right: 17px;
  width: 35px;
  height: 35px;
  border: none;
  background: transparent;
  color: #64748b;
  font-size: 28px;
  cursor: pointer;
  line-height: 30px;
}

.close-button:hover {
  color: #111827;
}


/* ================= POPUP TITLE ================= */

.popup-icon {
  text-align: center;
  font-size: 45px;
  margin-bottom: 8px;
}

.popup-box h2 {
  text-align: center;
  margin: 0 0 10px;
  color: #111827;
  font-size: 25px;
}

.popup-subtitle {
  text-align: center;
  color: #64748b;
  line-height: 1.5;
  margin: 0 0 25px;
}


/* ================= FIELD OPTIONS ================= */

.field-options {
  display: flex;
  flex-direction: column;
  gap: 11px;
}

.field-option {
  width: 100%;
  min-height: 62px;
  padding: 12px 15px;
  background: #ffffff;
  border: 1px solid #dbe3ef;
  border-radius: 12px;
  display: flex;
  align-items: center;
  text-align: left;
  cursor: pointer;
  transition: 0.2s;
}

.field-option:hover {
  background: #f8fbff;
  border-color: #2563eb;
  transform: translateX(3px);
}

.field-icon {
  font-size: 28px;
  margin-right: 14px;
}

.field-name {
  flex: 1;
  color: #1e293b;
  font-size: 16px;
  font-weight: 600;
}

.arrow {
  color: #2563eb;
  font-size: 22px;
}


/* ================= SELECTED FIELD IN POPUP ================= */

.selected-field-popup {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 15px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  margin-bottom: 20px;
}

.selected-field-popup > span {
  font-size: 30px;
}

.selected-field-popup div {
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.selected-field-popup small {
  color: #64748b;
  font-size: 12px;
}

.selected-field-popup strong {
  color: #1e293b;
  font-size: 16px;
}


/* ================= RADIO ================= */

.radio-option {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 17px;
  margin-bottom: 13px;
  border: 1px solid #dbe3ef;
  border-radius: 12px;
  cursor: pointer;
  transition: 0.2s;
}

.radio-option:hover {
  border-color: #2563eb;
  background: #f8fbff;
}

.radio-option input {
  margin-top: 3px;
  accent-color: #2563eb;
  width: 17px;
  height: 17px;
  cursor: pointer;
}

.radio-option div {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.radio-option strong {
  color: #1e293b;
  font-size: 15px;
}

.radio-option small {
  color: #64748b;
  line-height: 1.4;
}


/* ================= DOMAIN INPUT ================= */

.domain-input {
  width: 100%;
  height: 50px;
  padding: 0 15px;
  border: 1px solid #cbd5e1;
  border-radius: 9px;
  font-size: 15px;
  outline: none;
}

.domain-input:focus {
  border-color: #2563eb;
  box-shadow:
    0 0 0 3px rgba(37,99,235,0.1);
}


/* ================= AVAILABLE DOMAINS ================= */

.available-domains {
  margin-top: 22px;
}

.available-title {
  margin: 0 0 12px;
  color: #1e293b;
  font-size: 15px;
  font-weight: 700;
}

.domain-options {
  display: flex;
  flex-wrap: wrap;
  gap: 9px;
}

.domain-button {
  padding: 9px 12px;
  border-radius: 8px;
  border: 1px solid #2563eb;
  background: #ffffff;
  color: #2563eb;
  cursor: pointer;
  font-size: 13px;
  transition: 0.2s;
}

.domain-button:hover {
  background: #eff6ff;
}

.selected-domain {
  background: #2563eb;
  color: #ffffff;
}


/* ================= ERROR ================= */

.domain-error {
  color: #dc2626;
  background: #fef2f2;
  border: 1px solid #fecaca;
  padding: 10px;
  border-radius: 8px;
  font-size: 13px;
  margin-top: 15px;
}


/* ================= POPUP BUTTONS ================= */

.popup-buttons {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin-top: 25px;
}

.cancel-button,
.continue-button {
  padding: 11px 22px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
}

.cancel-button {
  background: #ffffff;
  border: 1px solid #cbd5e1;
  color: #475569;
}

.cancel-button:hover {
  background: #f8fafc;
}

.continue-button {
  background: #2563eb;
  border: 1px solid #2563eb;
  color: #ffffff;
}

.continue-button:hover {
  background: #1d4ed8;
}


/* ================= RESPONSIVE ================= */

@media (max-width: 950px) {

  .journey-cards {
    grid-template-columns: repeat(2, 1fr);
  }

  .navbar {
    padding: 0 4%;
  }

  .nav-links {
    gap: 20px;
  }

}


@media (max-width: 600px) {

  .navbar {
    height: auto;
    padding: 20px;
    flex-direction: column;
    gap: 18px;
  }

  .nav-links {
    gap: 15px;
    flex-wrap: wrap;
    justify-content: center;
  }

  .journey-section {
    padding: 40px 20px 60px;
  }

  .journey-section h1 {
    font-size: 30px;
  }

  .journey-cards {
    grid-template-columns: 1fr;
  }

  .popup-box {
    padding: 30px 20px;
  }

}

`;

document.head.appendChild(style);