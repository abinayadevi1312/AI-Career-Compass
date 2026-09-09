import React from "react";
import { useNavigate } from "react-router-dom";

function SelectFields() {
  const navigate = useNavigate();

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

  // User field select pannumbothu Home-ku selected field send pannum
  const handleFieldClick = (field) => {
    navigate("/home", {
      state: {
        field: field,
      },
    });
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f8fafc",
        padding: "40px 20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {/* Heading */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "40px",
          }}
        >
          <h1
            style={{
              color: "#1e293b",
              fontSize: "36px",
              marginBottom: "10px",
            }}
          >
            Choose Your Career Field
          </h1>

          <p
            style={{
              color: "#64748b",
              fontSize: "17px",
            }}
          >
            Select the career field you are interested in.
          </p>
        </div>

        {/* Career Fields */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "25px",
          }}
        >
          {careerFields.map((field, index) => (
            <div
              key={index}
              onClick={() => handleFieldClick(field)}
              style={{
                background: "#ffffff",
                padding: "30px 20px",
                borderRadius: "18px",
                textAlign: "center",
                cursor: "pointer",
                boxShadow:
                  "0 8px 25px rgba(0, 0, 0, 0.08)",
                transition: "0.3s",
              }}
            >
              {/* Icon */}
              <div
                style={{
                  fontSize: "50px",
                  marginBottom: "15px",
                }}
              >
                {field.icon}
              </div>

              {/* Field Name */}
              <h2
                style={{
                  color: "#1e293b",
                  fontSize: "21px",
                  marginBottom: "12px",
                }}
              >
                {field.name}
              </h2>

              {/* Description */}
              <p
                style={{
                  color: "#64748b",
                  lineHeight: "1.5",
                  minHeight: "70px",
                }}
              >
                {field.description}
              </p>

              {/* Select Button */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleFieldClick(field);
                }}
                style={{
                  marginTop: "15px",
                  padding: "10px 22px",
                  border: "none",
                  borderRadius: "8px",
                  background: "#2563eb",
                  color: "#ffffff",
                  cursor: "pointer",
                  fontSize: "14px",
                  fontWeight: "600",
                }}
              >
                Select Field
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SelectFields;