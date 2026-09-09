import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter email and password.");
      return;
    }

    localStorage.setItem("loggedIn", "true");

    navigate("/home");
  };

  return (
    <div className="login-page">

      <div className="login-card">

        <div className="logo-circle">
          🧭
        </div>

        <h1>
          <span>AI</span> Career Compass
        </h1>

        <p className="login-subtitle">
          Find your direction. Build your future.
        </p>

        <h2>Welcome Back!</h2>

        <p className="small-text">
          Sign in to continue your journey
        </p>

        <form onSubmit={handleLogin}>

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />

          <button type="submit">
            Login
          </button>

        </form>

        <p className="register-text">
          Don't have an account?{" "}
          <span onClick={() => navigate("/register")}>
            Register
          </span>
        </p>

      </div>

    </div>
  );
}

export default Login;