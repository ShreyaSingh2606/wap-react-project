import React from 'react';
import styles from './Footer.module.css';
import logoImg from '../assets/ZOTEL.png';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.brand}>
          <div className={styles.logo}>
            <img src={logoImg} alt="Zotel Logo" />
          </div>
          <p className={styles.tagline}>Live it. Now.</p>
          <div className={styles.social}>
            <a href="#" aria-label="X (Twitter)">𝕏</a>
            <a href="#" aria-label="Instagram">📸</a>
            <a href="#" aria-label="Facebook">📘</a>
            <a href="#" aria-label="YouTube">🎞️</a>
          </div>
        </div>
        
        <div className={styles.links}>
          <h4>Company</h4>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Zotel Plus</a></li>
            <li><a href="#">Zotel Homes</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>
        
        <div className={styles.links}>
          <h4>Support</h4>
          <ul>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
          </ul>
        </div>
        
        <div className={styles.newsletter}>
          <h4>Get the Zotel app</h4>
          <p>Book stays, check details, and more on our app.</p>
          <div className={styles.apps}>
            <button className={styles.appBtn}>App Store</button>
            <button className={styles.appBtn}>Play Store</button>
          </div>
        </div>
      </div>
      
      <div className={styles.bottom}>
        <div className="container">
          <p>© 2026 Zotel Stays Pvt. Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
