import React from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import "./Login.css";
import { ArrowLeft } from "react-bootstrap-icons";

const Login: React.FC = () => {
  const goBack = () => {
    window.location.href = "/";
  };
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const email = (document.getElementById("formEmail") as HTMLInputElement)
      .value;
    const password = (
      document.getElementById("formPassword") as HTMLInputElement
    ).value;

    if (email === "example@example.com" && password === "password") {
      window.location.href = "/home";
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <div className="login-container">
        <Row className="login-box">
          <div className="back-arrow" onClick={goBack}>
            <ArrowLeft size={40} />
          </div>
          <Col md={6} className="p-5">
            <h2>Ingresar</h2>
            <Form>
              <Form.Group controlId="formEmail" className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Email" />
              </Form.Group>

              <Form.Group controlId="formPassword" className="mb-3">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" placeholder="Contraseña" />
              </Form.Group>

              <Form.Group controlId="formCheckbox" className="mb-3">
                <Form.Check type="checkbox" label="No cerrar sesión" />
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                className="w-100"
                onClick={handleLogin}
              >
                Iniciar sesión
              </Button>

              <div className="mt-3 text-center">
                <a href="#">Olvidé mi contraseña</a>
              </div>
            </Form>
          </Col>
          <Col md={6} className="p-0">
            <img
              src="/src/assets/logologin.jfif"
              alt="Login"
              className="img-fluid rounded-end"
            />
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Login;
