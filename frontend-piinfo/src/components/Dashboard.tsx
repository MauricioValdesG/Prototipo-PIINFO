import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Dashboard.css";

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard">
        <aside className="sidebar">
          <h2>CYBERVERSE SKILLS</h2>
          <nav>
            <ul>
              <li>
                <a href="/main">Inicio</a>
              </li>
              <li>
                <a href="/profile">Perfil</a>
              </li>
              <li>
                <a href="/subjects">Cursos</a>
              </li>
              <li>
                <a href="/">Cerrar sesión</a>
              </li>
            </ul>
          </nav>
        </aside>
        <main className="content">
          <Container>
            <Row>
              <Col>
                <h1>Hola, ¡bienvenido de vuelta!</h1>
                <Button variant="dark" href="http://localhost:5174/">
                  Acceder al metaverso
                </Button>
              </Col>
            </Row>
          </Container>
          <footer>
            <p>Copyright © Cyberprev 2024</p>
          </footer>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
