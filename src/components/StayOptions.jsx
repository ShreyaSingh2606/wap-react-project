import React from 'react';
import styles from './StayOptions.module.css';
import { useZotel } from '../context/ZotelContext';
import { useScrollReveal } from '../hooks/useScrollReveal';
import zostelImg from '../assets/manali.png';
import homesImg from '../assets/goa.png';
import plusImg from '../assets/plus.png';

const options = [
  {
    id: 1,
    title: 'Dorms',
    description: 'Vibrant backpacker hostels for the solo traveler in you.',
    image: zostelImg,
    color: '#F15B40'
  },
  {
    id: 2,
    title: 'Private Rooms',
    description: 'Experience local culture with our curated homestays.',
    image: homesImg,
    color: '#2D3436'
  },
  {
    id: 3,
    title: 'Villas',
    description: 'Premium stays at exotic locations with ultimate comfort.',
    image: plusImg,
    color: '#D4AF37'
  }
];

const StayOptions = () => {
  const { activeCategory, setActiveCategory } = useZotel();
  const [ref, isVisible] = useScrollReveal();

  const handleCategorySelect = (category) => {
    setActiveCategory(prev => prev === category ? 'All' : category);
    const element = document.querySelector('#destinations');
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="stays" ref={ref} className={`${styles.stayOptions} reveal ${isVisible ? 'active' : ''}`}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Stays for everyone</h2>
        <div className={styles.grid}>
          {options.map(option => (
            <div 
              key={option.id} 
              className={`${styles.card} ${activeCategory === option.title ? styles.active : ''}`}
              onClick={() => handleCategorySelect(option.title)}
            >
              <div className={styles.imageContainer}>
                <img src={option.image} alt={option.title} />
                <div className={styles.overlay}></div>
                <div className={styles.content}>
                  <h3 className={styles.cardTitle}>{option.title}</h3>
                  <p className={styles.cardDesc}>{option.description}</p>
                  <button className={styles.exploreBtn} style={{ background: option.color }}>
                    {activeCategory === option.title ? 'Selected' : 'Explore'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StayOptions;
