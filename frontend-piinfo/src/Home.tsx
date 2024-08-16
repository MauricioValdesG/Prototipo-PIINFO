import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./components/Dashboard";
import "./Profile.css";

const Home = () => {
  return (
    <div className="home-container d-flex flex-column vh-100 bg-light">
      <div className="d-flex flex-grow-1 overflow-auto">
        <Dashboard />
        <div className="content p-4 flex-grow-1">
          <h1>Hola, ¡bienvenido de vuelta!</h1>
          <button className="btn btn-dark mt-3">Acceder al metaverso</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
