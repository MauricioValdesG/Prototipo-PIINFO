import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="sidebar d-flex flex-column bg-dark text-white vh-100 text-start">
      <h2 className="p-3 text-start">CYBERVERSE SKILLS</h2>
      <ul className="nav flex-column">
        <li className="nav-item">
          <a href="/home" className="nav-link text-white">
            Inicio
          </a>
        </li>
        <li className="nav-item">
          <a href="/profile" className="nav-link text-white">
            Perfil
          </a>
        </li>
        <li className="nav-item">
          <a href="/subjects" className="nav-link text-white">
            Cursos
          </a>
        </li>
        <li className="nav-item">
          <a href="/" className="nav-link text-white">
            Cerrar sesión
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Dashboard;
