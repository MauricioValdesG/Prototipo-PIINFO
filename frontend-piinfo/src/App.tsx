import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import "./App.css";

function App() {
  const handleLoginClick = () => {
    window.location.href = "/login";
  };
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <div className="content">
          <h1>Cyberverse Skills</h1>
          <p>El metaverso de la ciberseguridad</p>
          <button className="btn btn-dark btn-small" onClick={handleLoginClick}>
            Iniciar sesión
          </button>
        </div>
      </header>
      <footer className="App-footer mt-auto py-3">
        Copyright © Cyberprev SpA 2024
      </footer>
    </div>
  );
}

export default App;
