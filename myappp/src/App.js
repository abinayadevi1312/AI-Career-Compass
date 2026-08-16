import React from "react";
import { BrowserRouter, Routes, Route, Navigate }from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
function App()
 {
  return (
    <BrowserRouter>
      <Routes>

        {/* Register Page */}
        <Route path="/register" element={<Register />} />

        {/* Login Page */}
        <Route path="/login" element={<Login />} />

        {/* Home Page */}
        <Route path="/home" element={<Home />} />

        {/* Default Page */}
        <Route path="/" element={<Navigate to="/login" />} />

        {/* Invalid URL */}
        <Route path="*" element={<Navigate to="/login" />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;