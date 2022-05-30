
import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import emailjs from '../../node_modules/email-js';
const FORM_ENDPOINT = ""; // TODO - fill on the later step

const ContactForm = () => {
  const [Nombre, setNombre] = useState('');
  const [correo, setcorreo] = useState('');
  const [message, setMessage] = useState('');
  const [emailSent, setEmailSent] = useState(false);
  const submit = () => {
    if (Nombre && correo && message) {
        const serviceId = 'service_dqvf926';
        const templateId = 'template_h18xgq4';
        const userId = 'user_Ggl_OXBeB_FQQe9Gc';
        const templateParams = {
            Nombre,
            correo,
            message
        };

        emailjs.send(serviceId, templateId, templateParams, userId)
            .then(response => console.log(response))
            .then(error => console.log(error));

        setNombre('');
        setcorreo('');
        setMessage('');
        setEmailSent(true);
    } else {
        alert('Please fill in all fields.');
    }
}

    return (
        <div style={{ display: 'block', 
                      width: 400, 
                      padding: 30 }}>
          <h4>¡Contáctanos!</h4>
          <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Nombre:</Form.Label>
              <Form.Control type="text" value={Nombre} onChange={e => setNombre(e.target.value)}
                            placeholder="Nombre" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Correo:</Form.Label>
              <Form.Control type="email" value={correo} onChange={e => setcorreo(e.target.value)}
                            placeholder="Correo" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Mensaje:</Form.Label>
              <Form.Control type="textarea" placeholder="Mensaje" value={message} onChange={e => setMessage(e.target.value)}/>
            </Form.Group>
            <hr></hr>
            <Button variant="primary" type="submit" onClick={submit}>
              Enviar
            </Button>
            
            
          </Form>
        </div>
        
      );
      }
    
  
  export default ContactForm;