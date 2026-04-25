import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';
import { useZotel } from '../context/ZotelContext';
import logoImg from '../assets/ZOTEL.png';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { theme, toggleTheme, isLoggedIn, user, login, logout } = useZotel();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      login(email);
      setShowLoginModal(false);
      setEmail('');
      setPassword('');
    }
  };

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
        <div className={`container ${styles.headerContent}`}>
          <div className={styles.logo} onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <img src={logoImg} alt="Zotel" />
          </div>
          
          <nav className={styles.nav}>
            <ul>
              <li><a href="#hero" onClick={(e) => scrollToSection(e, '#hero')}>Stay</a></li>
              <li><a href="#destinations" onClick={(e) => scrollToSection(e, '#destinations')}>Destinations</a></li>
              <li><a href="#amenities" onClick={(e) => scrollToSection(e, '#amenities')}>Amenities</a></li>
              <li><a href="#reviews" onClick={(e) => scrollToSection(e, '#reviews')}>Reviews</a></li>
            </ul>
          </nav>

          <div className={styles.actions}>
            <button className={styles.themeToggle} onClick={toggleTheme} aria-label="Toggle Theme">
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
            
            {isLoggedIn ? (
              <div className={styles.userProfile}>
                <span className={styles.userName}>Hi, {user.name}</span>
                <button className={styles.logoutBtn} onClick={logout}>Logout</button>
              </div>
            ) : (
              <button className={styles.loginBtn} onClick={() => setShowLoginModal(true)}>Login</button>
            )}
          </div>
        </div>
      </header>

      {/* Login Modal */}
      {showLoginModal && (
        <div className="modal-overlay" onClick={() => setShowLoginModal(false)}>
          <div className={styles.loginModal} onClick={e => e.stopPropagation()}>
            <button className={styles.closeBtn} onClick={() => setShowLoginModal(false)}>&times;</button>
            <h2>Welcome Back</h2>
            <p>Login to your Zotel account</p>
            <form onSubmit={handleLogin}>
              <div className={styles.inputGroup}>
                <label>Email Address</label>
                <input 
                  type="email" 
                  placeholder="name@example.com" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required 
                />
              </div>
              <div className={styles.inputGroup}>
                <label>Password</label>
                <input 
                  type="password" 
                  placeholder="••••••••" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required 
                />
              </div>
              <button type="submit" className={styles.submitBtn}>Login</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
