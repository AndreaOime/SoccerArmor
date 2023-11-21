import React, { useContext } from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../auth/context/AuthContext';

export default function NavbarComponent() {
  const { login, handlerLogout } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand onClick={() => navigate("/")}>Soccer Armor</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className='justify-content-between' id="basic-navbar-nav">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            <NavLink className="nav-link" to="/">
              Inicio
            </NavLink>
            {!login.isAdmin ||
              <NavLink className="nav-link" to="/users">
                Usuarios
              </NavLink>
            }
          </Nav>
          <Nav className="justify-content-end gap-3">
            <NavLink className="nav-link" to="/perfil">
              {login?.user?.username}
            </NavLink>
            <Button type="button" variant="danger" onClick={handlerLogout}>
              Cerrar sesión
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
