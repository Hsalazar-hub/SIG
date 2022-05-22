
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
const FORM_ENDPOINT = ""; // TODO - fill on the later step

const ContactForm = () => {
    
    return (
        <div style={{ display: 'block', 
                      width: 400, 
                      padding: 30 }}>
          <h4>¡Contáctanos!</h4>
          <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Nombre:</Form.Label>
              <Form.Control type="text" 
                            placeholder="Nombre" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Correo:</Form.Label>
              <Form.Control type="email" 
                            placeholder="Correo" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Comentarios:</Form.Label>
              <Form.Control type="text" placeholder="Comentarios" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Enviar
            </Button>
          </Form>
        </div>
      );
      }
    
  
  export default ContactForm;