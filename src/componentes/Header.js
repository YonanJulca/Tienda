import React from "react";
import logo from "../images/logo.png";
import carrito from "../images/carrito.png";
import login from "../images/login.png";
import "../hojas-estilos/header.css";

function Header() {
  return (
    <header>
      {/* Contenedor del logo */}
      <div className="logo">
        <img src={logo} alt="Logo de la tienda" />
        <h1>Yonan</h1> 
      </div>

      <nav>
        <ul>
          {/* Elemento de inicio de sesión */}
          <li>
            <div className="logo">
              <img src={login} alt="Logo de inicio de sesión" />
              <button>Iniciar Sesión</button> 
            </div>
          </li>

          {/* Elemento del carrito */}
          <li>
            <div className="logo">
              <img src={carrito} alt="Logo del carrito" />
              <button>Carrito</button> 
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
