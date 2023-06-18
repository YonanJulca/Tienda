import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "../hojas-estilos/ContactForm.css"; // Importar archivo CSS personalizado

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Aquí puedes enviar los datos a tu servidor o hacer lo que necesites con ellos
  };

  return (
    <Form onSubmit={handleSubmit} className="contact-form">
      <Form.Group controlId="formBasicName">
        <Form.Label>Nombre</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
          className="input-field"
        />
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
        <Form.Label>Correo electrónico</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
          className="input-field"
        />
      </Form.Group>

      <Form.Group controlId="formBasicMessage">
        <Form.Label>Mensaje</Form.Label>
        <Form.Control
          as="textarea"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          rows={4}
          required
          className="input-field"
        />
      </Form.Group>

      <Button variant="primary" type="submit" className="submit-button">
        Enviar
      </Button>
    </Form>
  );
}

export default ContactForm;