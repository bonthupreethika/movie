import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 Movie సిఫార్సుదారి. All rights reserved.</p>
        <nav className="footer-nav">
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#privacy">Privacy Policy</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
