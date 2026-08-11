import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Name validation - alphabets and spaces only
    const namePattern = /^[A-Za-z ]+$/;

    // Email validation - must contain @
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Password validation
    // Minimum 6 characters
    // At least one alphabet
    // At least one number
    // At least one special character
    const passwordPattern =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

    // Check empty fields
    if (
      !user.name ||
      !user.email ||
      !user.password ||
      !user.confirmPassword
    ) {
      alert("Please fill all fields");
      return;
    }

    // Name validation
    if (!namePattern.test(user.name)) {
      alert("Name should contain alphabets only");
      return;
    }

    // Email validation
    if (!emailPattern.test(user.email)) {
      alert("Please enter a valid email address containing @");
      return;
    }

    // Password validation
    if (!passwordPattern.test(user.password)) {
      alert(
        "Password must contain at least 6 characters, one alphabet, one number and one special character"
      );
      return;
    }

    // Confirm password validation
    if (user.password !== user.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // Save user details
    localStorage.setItem("user", JSON.stringify(user));

    alert("Registration Successful!");

    // Go to login page
    navigate("/");
  };

  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          font-family: Arial, sans-serif;
          background: linear-gradient(
            135deg,
            #111827,
            #1f2937,
            #374151
          );
          min-height: 100vh;
        }

        .register-page {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 20px;
        }

        .register-card {
          width: 420px;
          padding: 35px;
          border-radius: 20px;
          background: rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
        }

        .register-card h1 {
          text-align: center;
          color: white;
          margin-bottom: 8px;
          font-size: 32px;
        }

        .subtitle {
          text-align: center;
          color: #ddd;
          margin-bottom: 25px;
          font-size: 14px;
        }

        .input-box {
          margin-bottom: 18px;
        }

        .input-box input {
          width: 100%;
          padding: 14px;
          border: none;
          outline: none;
          border-radius: 10px;
          background: white;
          font-size: 15px;
        }

        .input-box input:focus {
          border: 2px solid #ff9800;
        }

        .register-submit {
          width: 100%;
          padding: 14px;
          background: #ff9800;
          color: white;
          border: none;
          border-radius: 10px;
          font-size: 16px;
          font-weight: bold;
          cursor: pointer;
        }

        .register-submit:hover {
          background: #f57c00;
        }

        .login-text {
          text-align: center;
          color: white;
          margin-top: 20px;
          margin-bottom: 10px;
        }

        .login-btn {
          width: 100%;
          padding: 12px;
          border: none;
          border-radius: 10px;
          background: white;
          color: black;
          font-size: 15px;
          font-weight: bold;
          cursor: pointer;
        }

        .login-btn:hover {
          background: #e0e0e0;
        }
      `}</style>

      <div className="register-page">
        <div className="register-card">

          <h1>Create Account</h1>

          <p className="subtitle">
            Register to start your career journey
          </p>

          <form onSubmit={handleSubmit}>

            {/* Name */}
            <div className="input-box">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={user.name}
                onChange={handleChange}
                required
              />
            </div>

            {/* Email */}
            <div className="input-box">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={user.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* Password */}
            <div className="input-box">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={user.password}
                onChange={handleChange}
                required
              />
            </div>

            {/* Confirm Password */}
            <div className="input-box">
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={user.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>

            <button
              className="register-submit"
              type="submit"
            >
              Register
            </button>

          </form>

          <p className="login-text">
            Already have an account?
          </p>

          <button
            className="login-btn"
            onClick={() => navigate("/")}
          >
            Back to Login
          </button>

        </div>
      </div>
    </>
  );
}

export default Register;