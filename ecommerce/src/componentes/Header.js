import React from 'react';
import logo from '../componentes/logo.jpeg'

function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid" id="navbar1">
        <a className="navbar-brand" href="#">
          <img src={logo} width="50" height="44" alt="Logo" className="d-inline-block align-text-top" />
          Soccer Armor
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="main_nsav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="home.html">Home</a>
            </li>
            <li className="nav-item dropdown" id="myDropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Perfil
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">Mi Perfil</a>
                <a className="dropdown-item" href="#">Configuración</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="index2.html">Cerrar Sesión</a>
              </div>
            </li>
            <li className="nav-item dropdown" id="myDropdown">
              <a className="nav-link" href="#" id="Carrito" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
                Carrito
              </a>
            </li>
            <li className="nav-item dropdown" id="myDropdown">
              <a className="nav-link" href="#">Historial de Compras</a>
            </li>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
