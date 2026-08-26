import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import DomainDetails from "./pages/DomainDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* =========================
            REGISTER PAGE
        ========================= */}
        <Route
          path="/register"
          element={<Register />}
        />

        {/* =========================
            LOGIN PAGE
        ========================= */}
        <Route
          path="/login"
          element={<Login />}
        />

        {/* =========================
            HOME PAGE
        ========================= */}
        <Route
          path="/home"
          element={<Home />}
        />

        {/* =========================
            DOMAIN DETAILS PAGE
            Example:
            /domain/web-development
            /domain/cybersecurity
            /domain/data-science
        ========================= */}
        <Route
          path="/domain/:domain"
          element={<DomainDetails />}
        />

        {/* =========================
            DEFAULT PAGE
        ========================= */}
        <Route
          path="/"
          element={
            <Navigate
              to="/login"
              replace
            />
          }
        />

        {/* =========================
            INVALID URL
        ========================= */}
        <Route
          path="*"
          element={
            <Navigate
              to="/login"
              replace
            />
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;