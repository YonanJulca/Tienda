import React from "react";
import '../hojas-estilos/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        {/* Primera fila de contenido */}
        <div className="footer__row">
          <div className="footer__col">
            <h3 className="footer__heading">Contacto</h3>
            <p className="footer__text">Correo electrónico: info@tutienda.com</p>
            <p className="footer__text">Teléfono: 555-555-5555</p>
            <p className="footer__text">Dirección: Calle 123, Ciudad, Estado, País</p>
          </div>
          <div className="footer__col">
            <h3 className="footer__heading">Enlaces útiles</h3>
            {/* Lista de enlaces */}
            <ul className="footer__list">
              <li className="footer__list-item">
                <a href="/politica-privacidad" className="footer__link">Política de privacidad</a>
              </li>
              <li className="footer__list-item">
                <a href="/terminos-condiciones" className="footer__link">Términos y condiciones</a>
              </li>
              <li className="footer__list-item">
                <a href="/preguntas-frecuentes" className="footer__link">Preguntas frecuentes</a>
              </li>
            </ul>
          </div>
          <div className="footer__col">
            <h3 className="footer__heading">Suscríbete</h3>
            {/* Formulario de suscripción */}
            <form className="footer__form">
              <input type="email" placeholder="Correo electrónico" className="footer__input" />
              <button type="submit" className="footer__button">Suscribirse</button>
            </form>
          </div>
        </div>

        {/* Segunda fila de contenido */}
        <div className="footer__row">
          <div className="footer__col">
            {/* Enlaces a redes sociales */}
            <div className="footer__social">
              <a href="https://www.facebook.com/tutienda" className="footer__social-link">
                <i className="fa fa-facebook"></i>
              </a>
              <a href="https://www.twitter.com/tutienda" className="footer__social-link">
                <i className="fa fa-twitter"></i>
              </a>
              <a href="https://www.instagram.com/tutienda" className="footer__social-link">
                <i className="fa fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Tercera fila de contenido */}
        <div className="footer__row">
          <div className="footer__col">
            {/* Derechos de autor */}
            <p className="footer__copy">&copy; 2023 Tu Tienda - Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
