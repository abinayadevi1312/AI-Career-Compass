import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      alert("Please fill all fields.");
      return;
    }

    localStorage.setItem(
      "user",
      JSON.stringify({
        name,
        email,
        password,
      })
    );

    alert("Registration successful!");

    navigate("/login");
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
          Create your career journey
        </p>

        <h2>Create Account</h2>

        <form onSubmit={handleRegister}>

          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
          />

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
            Register
          </button>

        </form>

        <p className="register-text">
          Already have an account?{" "}
          <span onClick={() => navigate("/login")}>
            Login
          </span>
        </p>

      </div>

    </div>
  );
}

export default Register;