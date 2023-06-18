import React, { useState } from 'react';
import './searchBar.css'; // Importa un archivo de CSS donde definiremos los estilos

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Realizar búsqueda aquí
  };

  return (
    <form onSubmit={handleSubmit} className="search-bar">
      <input type="text" value={searchTerm} onChange={handleInputChange} />
      <button type="submit" className="search-button">
        <span>Buscar</span>
      </button>
    </form>
  );
}

export default SearchBar;
