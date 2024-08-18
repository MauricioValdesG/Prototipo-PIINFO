import Accordion from "./components/Accordion";
import "./Subject.css";
import courses from "./components/Courses";
import Dashboard from "./components/Dashboard";

const Subject = () => {
  return (
    <div className="subject-container d-flex flex-column vh-100">
      <div className="d-flex flex-grow-1">
        <Dashboard />
        <div className="content p-4 flex-grow-1">
          <h4>Cursos actuales</h4>
          <Accordion items={courses} />
        </div>
        <footer className="footer mt-auto py-3">
          Copyright © Cyberprev SpA 2024
        </footer>
      </div>
    </div>
  );
};

export default Subject;
