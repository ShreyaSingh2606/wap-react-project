import React from 'react';
import styles from './Gallery.module.css';
import { useScrollReveal } from '../hooks/useScrollReveal';
import manaliImg from '../assets/manali.png';
import goaImg from '../assets/goa.png';
import jaipurImg from '../assets/jaipur.png';
import rishikeshImg from '../assets/rishikesh.png';
import plusImg from '../assets/plus.png';

const images = [
  { src: manaliImg, alt: 'Zotel Manali' },
  { src: goaImg, alt: 'Zotel Goa' },
  { src: jaipurImg, alt: 'Zotel Jaipur' },
  { src: rishikeshImg, alt: 'Zotel Rishikesh' },
  { src: plusImg, alt: 'Zotel Plus' },
  { src: 'https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&q=80&w=800', alt: 'Mountain View' }
];

const Gallery = () => {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section ref={ref} className={`${styles.gallerySection} reveal ${isVisible ? 'active' : ''}`}>
      <div className="container">
        <h2 className={styles.title}>Vibe with Zotel</h2>
        <div className={styles.grid}>
          {images.map((img, index) => (
            <div key={index} className={styles.item}>
              <img src={img.src} alt={img.alt} loading="lazy" />
              <div className={styles.overlay}>
                <span>{img.alt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
