import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            Sistemas de Información Geográfica
          </NavLink>
          <div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Inicio
                  <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/About">
                  SIG
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Componentes
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Aplicaciones">
                  Aplicaciones
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Actualidad">
                  Actualidad
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Galeria">
                  Galeria
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
