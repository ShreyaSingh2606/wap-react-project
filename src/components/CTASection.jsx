import React from 'react';
import styles from './CTASection.module.css';
import { useScrollReveal } from '../hooks/useScrollReveal';

const CTASection = () => {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section ref={ref} className={`${styles.cta} reveal ${isVisible ? 'active' : ''}`}>
      <div className={`container ${styles.content}`}>
        <h2 className={styles.title}>Ready to join the Zotel community?</h2>
        <p className={styles.subtitle}>Book your stay now and experience the best of backpacking.</p>
        <button className={styles.btn} onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          Explore Stays
        </button>
      </div>
    </section>
  );
};

export default CTASection;
