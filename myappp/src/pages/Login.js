import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (!savedUser) {
      alert("No account found. Please register first.");
      navigate("/register");
      return;
    }
    if (
      login.email === savedUser.email &&
      login.password === savedUser.password
    ) {
      alert("Login Successful!");
      localStorage.setItem("isLoggedIn", "true");

      navigate("/home");
    } else {
      alert("Invalid Email or Password");
    }
  };
  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1>Welcome Back</h1>
        <p style={styles.subtitle}>
          Sign in to continue your career journey
        </p>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={login.email}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={login.password}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <button type="submit" style={styles.loginButton}>
            Login
          </button>
        </form>
        <p style={styles.registerText}>
          Don't have an account?
        </p>
        <button
          type="button"
          onClick={() => navigate("/register")}
          style={styles.registerButton}
        >
          Register
        </button>
      </div>
    </div>
  );
}

const styles = {page: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #111827, #1f2937, #374151)",
    fontFamily: "Arial, sans-serif",
  },

  card: {
    width: "380px",
    padding: "35px",
    borderRadius: "20px",
    background: "rgba(255,255,255,0.12)",
    backdropFilter: "blur(15px)",
    boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
    textAlign: "center",
  },

  subtitle: {
    color: "#ddd",
    marginBottom: "25px",
  },

  input: {
    width: "100%",
    padding: "14px",
    marginBottom: "15px",
    border: "none",
    borderRadius: "10px",
    boxSizing: "border-box",
    fontSize: "15px",
    outline: "none",
  },

  loginButton: {
    width: "100%",
    padding: "14px",
    border: "none",
    borderRadius: "10px",
    background: "#ff9800",
    color: "white",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
  },

  registerText: {
    color: "white",
    marginTop: "20px",
  },

  registerButton: {
    width: "100%",
    padding: "12px",
    border: "none",
    borderRadius: "10px",
    background: "white",
    color: "black",
    fontSize: "15px",
    fontWeight: "bold",
    cursor: "pointer",
  },
};

export default Login;