import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App.tsx";
import Login from "./Login.tsx";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./components/Dashboard.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/main" element={<Dashboard />} />
      </Routes>
    </Router>
  </StrictMode>
);
