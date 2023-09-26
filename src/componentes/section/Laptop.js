import React from 'react';
import './section-estilos/laptop.css';

function Laptop(props) {
  return (
    <div className="laptop-container">
      {/* Contenedor de la laptop */}
      <div className="laptop">
        {/* Imagen de la laptop */}
        <img src={props.image} alt={props.name} />
        {/* Nombre de la laptop */}
        <h3>{props.name}</h3>
        {/* Descripción de la laptop */}
        <p>{props.description}</p>
        {/* Precio de la laptop */}
        <p>Precio: {props.price}</p>
        {/* Botón para agregar al carrito */}
        <button>Agregar al carrito</button>
      </div>
    </div>
  );
}

export default Laptop;
