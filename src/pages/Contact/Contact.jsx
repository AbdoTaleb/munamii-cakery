import './Contact.css';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then(
        () => alert('Message sent!'),
        () => alert('Failed to send. Please try again.')
      );
  };

  return (
    <main className="contact">
      <h2>Contact</h2>

      <div className="contact-container">
        <section className="contact-info">
          <div className="contact-box">
            <p><strong>Home delivery service:</strong></p>
            <p>All the city of Stockholm and Malmö (with additional cost).</p>
          </div>

          <div className="contact-box">
            <p><strong>Pickup address:</strong></p>
            <p>Via la Costa Avenue. Blue Port gated neighbourhood.</p>
            <p>GPS location will be sent via WhatsApp.</p>
          </div>

          <div className="contact-box">
            <p><strong>Orders:</strong></p>
            <p>Must be placed 2 days in advance for availability and planning.</p>
          </div>

          <div className="contact-box">
            <p><strong>Opening hours:</strong></p>
            <p>Tuesday to Saturday, 9 a.m. to 2 p.m.</p>
          </div>
        </section>

        <section className="contact-form">
          <h3>Send us a message</h3>
          <form ref={form} onSubmit={sendEmail}>
            <label>
              Your Name:
              <input type="text" name="user_name" required />
            </label>
            <label>
              Your Email:
              <input type="email" name="user_email" required />
            </label>
            <label>
              Message:
              <textarea name="message" rows="5" required></textarea>
            </label>
            <button type="submit">Send</button>
          </form>
        </section>
      </div>
    </main>
  );
}

export default Contact;
