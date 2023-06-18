import React from 'react';
import Header from "./componentes/Header";
import Navbar from './componentes/Navbar';
import Footer from './componentes/Footer';
import LaptopStore from './componentes/section/LaptopStore';


function Venta() {
  return (
    <React.Fragment>
      <Header />
      <Navbar/>
      <LaptopStore/>
      <Footer />
    </React.Fragment>
  );
}

export default Venta;