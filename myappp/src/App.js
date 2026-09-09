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
import SelectFields from "./pages/SelectFields";

import Assessment from "./pages/assesment";
import ScenarioAssessment from "./pages/ScenarioAssessment.js";

import Career from "./pages/career";
import DomainDetails from "./pages/DomainDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Login */}
        <Route
          path="/login"
          element={<Login />}
        />

        {/* Register */}
        <Route
          path="/register"
          element={<Register />}
        />

        {/* Home */}
        <Route
          path="/home"
          element={<Home />}
        />

        {/* Select Field */}
        <Route
          path="/select-field"
          element={<SelectFields />}
        />

        {/* Normal Assessment */}
        <Route
          path="/assessment"
          element={<Assessment />}
        />

        {/* Scenario Assessment */}
        <Route
          path="/scenario-assessment"
          element={<ScenarioAssessment />}
        />

        {/* Career */}
        <Route
          path="/career"
          element={<Career />}
        />

        {/* Domain Details */}
        <Route
          path="/domain/:domain"
          element={<DomainDetails />}
        />

        {/* Default */}
        <Route
          path="/"
          element={<Navigate to="/login" />}
        />

        {/* Invalid URL */}
        <Route
          path="*"
          element={<Navigate to="/login" />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;