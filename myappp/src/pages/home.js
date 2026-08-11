import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div style={styles.page}>
      <nav style={styles.navbar}>
        <h2>AI Career Compass</h2>

        <button
          style={styles.logoutBtn}
          onClick={() => navigate("/")}
        >
          Logout
        </button>
      </nav>

      <div style={styles.hero}>
        <div>
          <h1>Find Your Perfect IT Career</h1>

          <p>
            Discover your interests, assess your skills, and get
            personalized IT career recommendations.
          </p>

          <button
            style={styles.startBtn}
            onClick={() => navigate("/assessment")}
          >
            Start Assessment
          </button>
        </div>
      </div>

      <div style={styles.cards}>
        <div style={styles.card}>
          <h3>🎯 Career Assessment</h3>
          <p>
            Identify the IT domain that best matches your interests
            and abilities.
          </p>
        </div>

        <div style={styles.card}>
          <h3>📊 Skill Analysis</h3>
          <p>
            Analyze your assessment scores and understand your
            strengths.
          </p>
        </div>

        <div style={styles.card}>
          <h3>🚀 Career Recommendation</h3>
          <p>
            Get personalized career recommendations based on your
            assessment results.
          </p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #111827, #1f2937, #374151)",
    color: "white",
    fontFamily: "Arial, sans-serif",
  },

  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 50px",
    background: "rgba(0,0,0,0.25)",
  },

  logoutBtn: {
    padding: "10px 20px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },

  hero: {
    textAlign: "center",
    padding: "80px 20px 50px",
  },

  startBtn: {
    marginTop: "20px",
    padding: "14px 30px",
    border: "none",
    borderRadius: "10px",
    background: "#ff9800",
    color: "white",
    fontSize: "17px",
    fontWeight: "bold",
    cursor: "pointer",
  },

  cards: {
    display: "flex",
    justifyContent: "center",
    gap: "25px",
    padding: "30px 50px",
    flexWrap: "wrap",
  },

  card: {
    width: "280px",
    padding: "25px",
    borderRadius: "15px",
    background: "rgba(255,255,255,0.12)",
    border: "1px solid rgba(255,255,255,0.2)",
  },
};

export default Home;