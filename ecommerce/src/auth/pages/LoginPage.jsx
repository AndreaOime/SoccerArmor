import React, { useContext, useState } from "react";
import {
  Button,
  Card,
  Col,
  Form,
  Row,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../context/AuthContext";

const initialLoginForm = {
  username: '',
  password: ''
}

export default function LoginPage() {
  const { handlerLogin } = useContext(AuthContext);
  const [loginForm, setLoginForm] = useState(initialLoginForm)
  const { username, password } = loginForm;
  const navigate = useNavigate();

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setLoginForm({
      ...loginForm,
      [name]: value
    });
  }

  const onSubmit = (event) => {
    event.preventDefault();

    if (!username || !password) {
      console.log("Campos vacíos")
      Swal.fire(
        "Error de validación",
        "Usuario y contraseña requeridos",
        "error"
      )
      return;
    }

    handlerLogin({ username, password })
    // Acá implementamos el login

    setLoginForm(initialLoginForm);
  }

  return (
    <Card >
      <Form onSubmit={onSubmit}>
        <Card.Body>
          <Card.Title>Inicio de sesión</Card.Title>
          <Form.Group>
            <Form.Control
              className="my-3"
              placeholder="Nombre de usuario"
              name="username"
              value={username}
              onChange={onInputChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              className="my-3"
              type="password"
              placeholder="Contraseña"
              name="password"
              value={password}
              onChange={onInputChange}
            />
          </Form.Group>
        </Card.Body>
        <Card.Footer>
          <Row>
            <Col>
              <Button type="submit" variant="primary">
                Iniciar sesión
              </Button>
            </Col>
            <Col>
              <Button type="button" variant="link" onClick={() => navigate("/register")}>
                Registrar
              </Button>
            </Col>
          </Row>
        </Card.Footer>
      </Form>
    </Card>
  );
}
