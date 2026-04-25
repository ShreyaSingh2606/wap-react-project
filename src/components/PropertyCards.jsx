import React, { useState } from 'react';
import styles from './PropertyCards.module.css';
import { useZotel } from '../context/ZotelContext';
import { useScrollReveal } from '../hooks/useScrollReveal';

const PropertyCards = () => {
  const { properties, wishlist, toggleWishlist, searchQuery, setSearchQuery, activeCategory, setActiveCategory, loading } = useZotel();
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [showBookingConfirm, setShowBookingConfirm] = useState(false);
  const [bookedProperty, setBookedProperty] = useState('');
  const [ref, isVisible] = useScrollReveal();

  const clearFilters = () => {
    setSearchQuery('');
    setActiveCategory('All');
  };

  const handleBookNow = (name) => {
    setBookedProperty(name);
    setShowBookingConfirm(true);
    setSelectedProperty(null); // Close details modal if open
  };

  const openModal = (property) => {
    setSelectedProperty(property);
  };

  const closeModal = () => {
    setSelectedProperty(null);
  };

  return (
    <section id="destinations" ref={ref} className={`${styles.propertySection} reveal ${isVisible ? 'active' : ''}`}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Destinations in the spotlight</h2>
          <div className={styles.stats}>
            <span>Showing {properties.length} properties</span>
            {(searchQuery || activeCategory !== 'All') && (
              <button className={styles.clearBtn} onClick={clearFilters}>Clear Filters ✕</button>
            )}
          </div>
        </div>
        
        {loading ? (
          <div className={styles.grid}>
            {[1, 2, 3, 4].map(i => (
              <div key={i} className={styles.skeletonCard}>
                <div className={styles.skeletonImage}></div>
                <div className={styles.skeletonText}></div>
                <div className={styles.skeletonTextSmall}></div>
              </div>
            ))}
          </div>
        ) : properties.length === 0 ? (
          <div className={styles.noResults}>
            <h3>No results found 😕</h3>
            <p>Try searching for a different location.</p>
          </div>
        ) : (
          <div className={styles.grid}>
            {properties.map(property => (
              <div key={property.id} className={styles.card}>
                <div className={styles.imageBox}>
                  <img src={property.image} alt={property.name} />
                  <span className={styles.tag}>{property.tag}</span>
                  <span className={styles.rating}>★ {property.rating}</span>
                  <button 
                    className={`${styles.wishlistBtn} ${wishlist.includes(property.id) ? styles.active : ''}`}
                    onClick={() => toggleWishlist(property.id)}
                  >
                    {wishlist.includes(property.id) ? '❤️' : '🤍'}
                  </button>
                </div>
                <div className={styles.details}>
                  <h3 className={styles.name}>{property.name}</h3>
                  <p className={styles.location}>📍 {property.location}</p>
                  <div className={styles.footer}>
                    <div className={styles.pricing}>
                      <span className={styles.from}>Starting from</span>
                      <span className={styles.price}>₹{property.price}</span>
                    </div>
                    <div className={styles.actions}>
                      <button className={styles.detailsBtn} onClick={() => openModal(property)}>Details</button>
                      <button className={styles.bookBtn} onClick={() => handleBookNow(property.name)}>Book Now</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Property Details Modal */}
      {selectedProperty && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className={styles.modal} onClick={e => e.stopPropagation()}>
            <button className={styles.modalClose} onClick={closeModal}>&times;</button>
            <div className={styles.modalImage}>
              <img src={selectedProperty.image} alt={selectedProperty.name} />
            </div>
            <div className={styles.modalContent}>
              <h2>{selectedProperty.name}</h2>
              <p className={styles.modalDesc}>{selectedProperty.description}</p>
              <div className={styles.modalFooter}>
                <div className={styles.modalPrice}>
                  <span>₹{selectedProperty.price}</span>
                  <small>/night</small>
                </div>
                <button className={styles.bookBtnLarge} onClick={() => handleBookNow(selectedProperty.name)}>Confirm Booking</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Booking Confirmation Popup */}
      {showBookingConfirm && (
        <div className="modal-overlay" onClick={() => setShowBookingConfirm(false)}>
          <div className={styles.confirmPopup} onClick={e => e.stopPropagation()}>
            <div className={styles.successIcon}>✨</div>
            <h2>Booking Confirmed!</h2>
            <p>Your stay at <strong>{bookedProperty}</strong> has been secured in Zotel.</p>
            <button className={styles.doneBtn} onClick={() => setShowBookingConfirm(false)}>Awesome!</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default PropertyCards;
