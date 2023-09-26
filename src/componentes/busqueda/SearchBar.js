import React, { useState } from 'react';
import './searchBar.css'; 

function SearchBar() {
  // Estado para almacenar el término de búsqueda
  const [searchTerm, setSearchTerm] = useState('');

  // Función para manejar cambios en el campo de búsqueda
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Función para manejar el envío del formulario (aunque no contiene lógica de envío)
  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí podrías realizar acciones al enviar el formulario, si fuera necesario
  };

  return (
    <form onSubmit={handleSubmit} className="search-bar">
      {/* Campo de entrada de texto */}
      <input type="text" value={searchTerm} onChange={handleInputChange} />
      {/* Botón de búsqueda */}
      <button type="submit" className="search-button">
        <span>Buscar</span>
      </button>
    </form>
  );
}

export default SearchBar;
