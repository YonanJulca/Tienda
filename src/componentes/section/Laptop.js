import React from 'react';
import './section-estilos/laptop.css';

function Laptop(props) {
  return (

   
  <div className="laptop-container">
    <div className="laptop">
      <img src={props.image} alt={props.name} />
      <h3>{props.name}</h3>
      <p>{props.description}</p>
      <p>Precio: {props.price}</p>
      <button>Agregar al carrito</button>
    </div>

    </div>
  );
}

export default Laptop;