
import './Contact.css';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs
        emailjs.sendForm(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          form.current,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )

        .then(
        (result) => {
            alert('Message sent!');
        },
        (error) => {
            alert('Failed to send. Please try again.');
        }
        );
    };

  return (
    <main className="contact">
      <h2>Contact</h2>

      <section className="contact-info">
        <p>
          <strong>📦 Home delivery service:</strong><br />
          All the city of Stockholm and Malmö (with additional cost).
        </p>

        <p>
          <strong>📍 Pickup address:</strong><br />
          Via la Costa Avenue. Blue Port gated neighbourhood.<br />
          GPS location will be sent via WhatsApp.
        </p>

        <p>
          <strong>📅 Orders:</strong><br />
          Must be placed 2 days in advance for availability and planning.
        </p>

        <p>
          <strong>⏰ Opening hours:</strong><br />
          Tuesday to Saturday, 9 a.m. to 2 p.m.
        </p>
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

    </main>
  );
}

export default Contact;
