import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from "react";
import Venta from '../src/Venta.js';
import ContactForm from "./componentes/ContactForm";
import Navbar from './componentes/Navbar';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="*" element={<Venta />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/navegacion" element={<Navbar />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;
