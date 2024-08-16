import React, { useState } from "react";
import Dashboard from "./components/Dashboard";
import "./Profile.css"; // Importar los estilos

const Profile = () => {
  // Estados para los valores mostrados
  const [displayNombre, setDisplayNombre] = useState("Ricardo");
  const [displayApellido, setDisplayApellido] = useState("Lagos");

  // Estados para los valores de entrada
  const [nombre, setNombre] = useState("Ricardo");
  const [apellido, setApellido] = useState("Lagos");

  // Manejadores de cambio para los campos de entrada
  const handleNombreChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNombre(e.target.value);
  };

  const handleApellidoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setApellido(e.target.value);
  };

  // Manejador para el botón de guardar
  const handleGuardarClick = (e: React.FormEvent) => {
    e.preventDefault();
    setDisplayNombre(nombre);
    setDisplayApellido(apellido);
  };

  return (
    <div className="profile-container d-flex flex-column vh-100 ">
      <div className="d-flex flex-grow-1">
        <Dashboard />
        <div className="content p-4 flex-grow-1">
          <div className="card shadow-sm mb-4">
            <div className="card-body text-left">
              <img
                src="https://bootdey.com/img/Content/avatar/avatar1.png"
                alt="User Avatar"
                className="rounded-circle mb-3"
              />
              <h2>{`${displayNombre} ${displayApellido}`}</h2>
            </div>
          </div>
          <div className="card shadow-sm">
            <div className="card-header bg-light">
              <h4>Configuración</h4>
            </div>
            <div className="card-body">
              <form onSubmit={handleGuardarClick}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="ricardo.lagos@universidad.cl"
                  />
                </div>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <label htmlFor="nombre" className="form-label">
                      Nombre
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="nombre"
                      value={nombre}
                      onChange={handleNombreChange}
                      placeholder="Ricardo"
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="apellido" className="form-label">
                      Apellido
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="apellido"
                      value={apellido}
                      onChange={handleApellidoChange}
                      placeholder="Lagos"
                    />
                  </div>
                </div>
                <button type="submit" className="btn btn-dark">
                  Guardar
                </button>
              </form>
            </div>
          </div>
          <footer className="footer mt-auto py-3">
            Copyright © Cyberprev SpA 2024
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Profile;
