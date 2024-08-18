import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App.tsx";
import Login from "./Login.tsx";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home.tsx";
import Profile from "./Profile.tsx";
import Subject from "./Subject.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/subjects" element={<Subject />} />
      </Routes>
    </Router>
  </StrictMode>
);
