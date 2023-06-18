import React, { useState } from 'react';
import Laptop from './Laptop';
import laptopData from './LaptopData';
import './section-estilos/laptopStore.css';

function LaptopStore() {
  const [laptops] = useState(laptopData);

  return (
    <div className="laptop-store">
      <h1 className="laptop-store__title">¡Bienvenido a nuestra tienda de laptops!</h1>
      <p className="laptop-store__intro">Estamos orgullosos de ofrecer una amplia variedad de laptops de alta calidad a precios asequibles. Echa un vistazo a nuestra selección:</p>
      <div className="laptop-list">
        {laptops.map(laptop => (
          <Laptop
            key={laptop.id}
            name={laptop.name}
            description={laptop.description}
            image={laptop.image}
            price={laptop.price}
          />
        ))}
      </div>
    </div>
  );
}

export default LaptopStore;
