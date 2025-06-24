

import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>Follow us on:</p>
      <ul className="social-links">
        <li>
          <a href="https://www.instagram.com/munamii.cakery/" target="_blank" rel="noreferrer">
            Instagram
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/munamiicupcakes/" target="_blank" rel="noreferrer">
            Facebook
          </a>
        </li>
        <li>
          <a href="mailto:munamii@example.com">Email us</a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
