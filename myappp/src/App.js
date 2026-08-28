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
import SelectFields from "./pages/SelectFields";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* =====================================
            REGISTER
        ===================================== */}

        <Route
          path="/register"
          element={<Register />}
        />


        {/* =====================================
            LOGIN
        ===================================== */}

        <Route
          path="/login"
          element={<Login />}
        />


        {/* =====================================
            HOME
        ===================================== */}

        <Route
          path="/home"
          element={<Home />}
        />


        {/* =====================================
            SELECT FIELD
        ===================================== */}

        <Route
          path="/select-field"
          element={<SelectFields />}
        />


        {/* =====================================
            DOMAIN DETAILS
            Example:
            /domain/web-development
        ===================================== */}

        <Route
          path="/domain/:domain"
          element={<DomainDetails />}
        />


        {/* =====================================
            DEFAULT
        ===================================== */}

        <Route
          path="/"
          element={
            <Navigate
              to="/login"
              replace
            />
          }
        />


        {/* =====================================
            INVALID URL
        ===================================== */}

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