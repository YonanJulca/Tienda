// Importaciones de módulos y componentes necesarios
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from "react";
import Venta from '../src/Venta.js';  
import ContactForm from "./componentes/ContactForm";  
import Navbar from './componentes/Navbar'; 

// Definición del componente funcional App
function App() {
  return (
    <Router> {/* Configura el enrutador para la aplicación */}
      <div className="App"> {/* Crea un contenedor con la clase 'App' */}
        <Routes> {/* Define las rutas de la aplicación */}
          <Route path="*" element={<Venta />} /> {/* Define una ruta por defecto que renderiza el componente Venta */}
          <Route path="/contact" element={<ContactForm />} /> {/* Define una ruta '/contact' que renderiza el componente ContactForm */}
          <Route path="/navegacion" element={<Navbar />} /> {/* Define una ruta '/navegacion' que renderiza el componente Navbar */}
        </Routes>
      </div>
    </Router>
  );
}

export default App; 
