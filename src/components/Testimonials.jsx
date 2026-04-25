import React from 'react';
import styles from './Testimonials.module.css';
import { useScrollReveal } from '../hooks/useScrollReveal';

const reviews = [
  {
    id: 1,
    name: 'Ananya Sharma',
    avatar: 'https://i.pravatar.cc/150?u=ananya',
    rating: 5,
    text: 'Zotel Jaipur was an incredible experience. The community vibes are unmatched!',
    location: 'Jaipur'
  },
  {
    id: 2,
    name: 'Rohan Gupta',
    avatar: 'https://i.pravatar.cc/150?u=rohan',
    rating: 4,
    text: 'Loved the dorms in Manali. Clean, safe, and very lively cafe.',
    location: 'Manali'
  },
  {
    id: 3,
    name: 'Sarah Miller',
    avatar: 'https://i.pravatar.cc/150?u=sarah',
    rating: 5,
    text: 'The best homestay experience in Goa. Zotel Homes is a game changer.',
    location: 'Goa'
  }
];

const Testimonials = () => {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="reviews" ref={ref} className={`${styles.testimonials} reveal ${isVisible ? 'active' : ''}`}>
      <div className="container">
        <h2 className={styles.title}>What Zotelites say</h2>
        <div className={styles.grid}>
          {reviews.map(review => (
            <div key={review.id} className={styles.card}>
              <div className={styles.rating}>
                {'★'.repeat(review.rating)}
                {'☆'.repeat(5 - review.rating)}
              </div>
              <p className={styles.text}>"{review.text}"</p>
              <div className={styles.user}>
                <img src={review.avatar} alt={review.name} className={styles.avatar} />
                <div className={styles.userInfo}>
                  <h4 className={styles.userName}>{review.name}</h4>
                  <p className={styles.userLoc}>{review.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
