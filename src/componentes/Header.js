import React from "react";
import logo from "../images/logo.png";
import carrito from "../images/carrito.png";
import login from "../images/login.png";
import "../hojas-estilos/header.css";


function Header() {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="Logo de la tienda" />
        <h1>Yonan</h1>
      </div>

      <nav>
        <ul>
          <li>
          
          </li>

          <li>
            <div className="logo">
              <img src={login} alt="Logo de la carrito" />
              <button>Iniciar Seccion</button>
            </div>
          </li>

          <li>
            <div className="logo">
              <img src={carrito} alt="Logo de la carrito" />
              <button>Carrito</button>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
