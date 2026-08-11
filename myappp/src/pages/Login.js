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
      navigate("/home");
    } else {
      alert("Invalid Email or Password");
    }
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

        .login-page {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 20px;
        }

        .login-card {
          width: 380px;
          padding: 35px;
          border-radius: 25px;
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
        }

        .login-card h1 {
          text-align: center;
          color: white;
          margin-bottom: 10px;
          font-size: 34px;
        }

        .subtitle {
          text-align: center;
          color: #ddd;
          margin-bottom: 30px;
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
          border-radius: 12px;
          background: white;
          font-size: 15px;
        }

        .signin-btn {
          width: 100%;
          padding: 14px;
          border: none;
          border-radius: 12px;
          background: #ff8800;
          color: white;
          font-size: 17px;
          font-weight: bold;
          cursor: pointer;
        }

        .signin-btn:hover {
          background: #e67600;
        }

        .register-text {
          color: white;
          text-align: center;
          margin-top: 20px;
          margin-bottom: 10px;
        }

        .register-btn {
          width: 100%;
          padding: 12px;
          border: none;
          border-radius: 12px;
          background: #d9d9d9;
          color: black;
          font-size: 16px;
          cursor: pointer;
        }

        .register-btn:hover {
          background: white;
        }
      `}</style>

      <div className="login-page">
        <div className="login-card">

          <h1>Welcome Back</h1>

          <p className="subtitle">
            Sign in to continue to AI Career Compass
          </p>

          <form onSubmit={handleSubmit}>

            <div className="input-box">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={login.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-box">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={login.password}
                onChange={handleChange}
                required
              />
            </div>

            <button
              className="signin-btn"
              type="submit"
            >
              Login
            </button>

          </form>

          <p className="register-text">
            Don't have an account?
          </p>

          <button
            className="register-btn"
            onClick={() => navigate("/register")}
          >
            Register
          </button>

        </div>
      </div>
    </>
  );
}

export default Login;