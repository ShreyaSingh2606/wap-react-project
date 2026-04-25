import React from 'react';
import styles from './Hero.module.css';
import heroImg from '../assets/hero.png';

const Hero = () => {
  const scrollToStays = () => {
    const element = document.querySelector('#stays');
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className={styles.hero} style={{ backgroundImage: `url(${heroImg})` }}>
      <div className={styles.overlay}></div>
      <div className={`container ${styles.content}`}>
        <h1 className={styles.title}>Live it. Now.</h1>
        <p className={styles.subtitle}>Backpacking through India's most iconic destinations with Zotel.</p>
        <button className={styles.exploreBtn} onClick={scrollToStays}>Explore Stays</button>
      </div>
    </section>
  );
};

export default Hero;
