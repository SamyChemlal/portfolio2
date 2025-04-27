import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";
import emailjs from 'emailjs-com';

export const Newsletter = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState('');
  const [buttonText, setButtonText] = useState('Subscribe');
  const [statusState, setStatusState] = useState({});  // Ajout du hook useState pour status

  useEffect(() => {
    if (status === 'success') clearFields();
  }, [status]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && email.indexOf("@") > -1) {
      setButtonText("Sending...");
      
      // Utilisation d'EmailJS pour envoyer l'email de confirmation à l'utilisateur
      const emailDetails = {
        email: email,  // L'email que l'utilisateur a saisi
        message: 'Nouvelle souscription à la newsletter!'  // Message qui accompagne l'email de confirmation
      };

      emailjs.send(
        'service_28hrsuj',   // Remplace par ton propre service ID d'EmailJS
        'template_irqveal',  // Remplace par ton template ID d'EmailJS
        emailDetails,         // Les données du formulaire
        'Sdgl5ao2jkoAOC2XY'   // Remplace par ton propre User ID d'EmailJS
      ).then((result) => {
        console.log(result.text);
        setStatusState({ success: true, message: 'Successfully subscribed!' });
        setButtonText("Subscribe");
        setEmail('');
      }, (error) => {
        console.log(error.text);
        setStatusState({ success: false, message: 'Something went wrong, please try again later.' });
        setButtonText("Subscribe");
      });

      // Utilisation d'EmailJS pour envoyer un email de notification à l'administrateur
      const adminEmailDetails = {
        to_email: 'your-email@example.com',  // Remplace par ton propre email (adresse de l'administrateur)
        subscriber_email: email,  // Email de l'utilisateur qui s'est abonné
        message: 'Un nouvel utilisateur s\'est abonné à la newsletter'  // Message qui accompagne l'email à l'administrateur
      };

   
    }
  };

  const clearFields = () => {
    setEmail('');
  };

  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row>
          <Col lg={12} md={6} xl={5}>
            <h3>Subscribe to our Newsletter<br></br> & Never miss latest updates</h3>
            {status === 'sending' && <Alert>Sending...</Alert>}
            {status === 'error' && <Alert variant="danger">{message}</Alert>}
            {status === 'success' && <Alert variant="success">{message}</Alert>}
            {statusState.message && <Alert variant={statusState.success ? "success" : "danger"}>{statusState.message}</Alert>}
          </Col>
          <Col md={6} xl={7}>
            <form onSubmit={handleSubmit}>
              <div className="new-email-bx">
                <input 
                  value={email} 
                  type="email" 
                  onChange={(e) => setEmail(e.target.value)} 
                  placeholder="Email Address" 
                />
                <button type="submit"><span>{buttonText}</span></button>
              </div>
            </form>
          </Col>
        </Row>
      </div>
    </Col>
  );
};
