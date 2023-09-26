import React from "react";
import "../hojas-estilos/navbar.css";
import Search from "./busqueda/SearchBar";

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {/* Elemento de Inicio */}
        <li className="navbar-item">
          <button className="navbar-button">Inicio</button>
        </li>

        {/* Elemento de Categorías */}
        <li className="navbar-item">
          <button className="navbar-button">Categorías</button>
          <ul className="navbar-submenu">
            {/* Subelementos de Categorías */}
            <li className="navbar-submenu-item">
              <button className="navbar-submenu-button">Computadoras</button>
            </li>
            <li className="navbar-submenu-item">
              <button className="navbar-submenu-button">Televisores</button>
            </li>
            <li className="navbar-submenu-item">
              <button className="navbar-submenu-button">Smartphones</button>
            </li>
            <li className="navbar-submenu-item">
              <button className="navbar-submenu-button">Audio</button>
            </li>
            <li className="navbar-submenu-item">
              <button className="navbar-submenu-button">Hogar inteligente</button>
            </li>
          </ul>
        </li>

        {/* Elemento de Promociones */}
        <li className="navbar-item">
          <button className="navbar-button">Promociones</button>
        </li>

        {/* Elemento de Marcas */}
        <li className="navbar-item">
          <button className="navbar-button">Marcas</button>
          <ul className="navbar-submenu">
            {/* Subelementos de Marcas */}
            <li className="navbar-submenu-item">
              <button className="navbar-submenu-button">Phone</button>
            </li>
            <li className="navbar-submenu-item">
              <button className="navbar-submenu-button">Huawei</button>
            </li>
            <li className="navbar-submenu-item">
              <button className="navbar-submenu-button">Samsung</button>
            </li>
            <li className="navbar-submenu-item">
              <button className="navbar-submenu-button">Sonic</button>
            </li>
            <li className="navbar-submenu-item">
              <button className="navbar-submenu-button">Smart home</button>
            </li>
          </ul>
        </li>
      </ul>

      {/* Componente de búsqueda */}
      <Search />
    </nav>
  );
}

export default Navbar;
