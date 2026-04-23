import React from 'react';
import './Footer.css';

const FooterCard = ({ icon, title, description }) => (
  <div className="footer-card">
    <div className="footer-card-icon">{icon}</div>
    <h3 className="footer-card-title">{title}</h3>
    <p className="footer-card-desc">{description}</p>
    <button className="footer-card-btn">Apply Now</button>
  </div>
);

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* SECTION 1: Partner With Zo World */}
        <div className="footer-section">
          <h2 className="footer-heading">Partner With Zo World</h2>
          <div className="footer-cards-grid">
            <FooterCard 
              icon="🔑" 
              title="Franchise with Zostel: Open Zostel & Zo Stays in your destination." 
              description="" 
            />
            <FooterCard 
              icon="💼" 
              title="Partner with Zostel: Travel agencies & Tour operators." 
              description="" 
            />
            <FooterCard 
              icon="📸" 
              title="Become a Zostel Creator: Travel, shoot Videos, & inspire." 
              description="" 
            />
            <FooterCard 
              icon="🎧" 
              title="Perform at Zostel & collab as artist." 
              description="" 
            />
          </div>
        </div>

        {/* SECTION 2: Large background text */}
        <div className="footer-hero-text">
          <div className="footer-bg-text">ZO ZO ZO</div>
          <div className="footer-fg-text">follow your ❤️</div>
        </div>

        <div className="footer-bottom-grid">
          {/* SECTION 3: App download section */}
          <div className="footer-app-section">
            <h3 className="app-title">Download Zostel App</h3>
            <div className="app-content">
              <ul className="app-benefits">
                <li>🤩 Get a seamless experience during your trip</li>
                <li>🗺️ Explore things nearby with Local Maps</li>
                <li>🎉 Get event updates & connect with Zostelers</li>
                <li>🪙 Complete quests, earn SZo</li>
              </ul>
              <div className="app-download-box">
                <div className="qr-code">
                  {/* Placeholder for QR Code */}
                  <img src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=ZostelApp" alt="QR Code" />
                </div>
                <div className="store-buttons">
                  <button className="store-btn">🍎 App Store</button>
                  <button className="store-btn">▶️ Play Store</button>
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 4: Footer links */}
          <div className="footer-links-section">
            <div className="links-column">
              <h4>Zo World</h4>
              <ul>
                <li><a href="#">Zostel</a></li>
                <li><a href="#">Zostel Plus</a></li>
                <li><a href="#">Zostel Homes</a></li>
                <li><a href="#">Zo Houses</a></li>
                <li><a href="#">Zo Trips</a></li>
                <li><a href="#">Zo Selections</a></li>
              </ul>
            </div>
            <div className="links-column">
              <h4>Zostel</h4>
              <ul>
                <li><a href="#">Destinations</a></li>
                <li><a href="#">Franchises</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Career</a></li>
                <li><a href="#">Merchandise</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* SECTION 5: Bottom bar */}
        <div className="footer-bottom-bar">
          <div className="footer-copyright">
            Zostel © 2026. All Rights Reserved. <a href="#">Privacy Policy</a> <a href="#">Cookie Policy</a> <a href="#">Terms</a>
          </div>
          <div className="footer-socials">
            <span>🐦</span>
            <span>📷</span>
            <span>▶️</span>
            <span>💼</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
