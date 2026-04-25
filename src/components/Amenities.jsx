import React from 'react';
import styles from './Amenities.module.css';
import { useScrollReveal } from '../hooks/useScrollReveal';

const amenities = [
  { id: 1, title: 'Wi-Fi', icon: '📶' },
  { id: 2, title: 'Cafe', icon: '☕' },
  { id: 3, title: 'Lockers', icon: '🔐' },
  { id: 4, title: 'Laundry', icon: '🧺' },
  { id: 5, title: 'Common Area', icon: '🎮' },
  { id: 6, title: 'Safe', icon: '🛡️' },
  { id: 7, title: 'Travel Desk', icon: '🗺️' },
  { id: 8, title: 'Events', icon: '🎸' }
];

const Amenities = () => {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="amenities" ref={ref} className={`${styles.amenities} reveal ${isVisible ? 'active' : ''}`}>
      <div className="container">
        <h2 className={styles.title}>Why Zotel?</h2>
        <div className={styles.grid}>
          {amenities.map(item => (
            <div key={item.id} className={styles.item}>
              <div className={styles.icon}>{item.icon}</div>
              <span className={styles.itemName}>{item.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;
