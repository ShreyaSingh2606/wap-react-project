import React, { useState } from 'react';
// import Navbar from './features/NavBar/Navbar.jsx';  <-- COMMENT THIS OUT
import HotelSearchWidget from './features/HotelSearchWidget/HotelSearchWidget.jsx';

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */} {/* <-- COMMENT THIS OUT TOO */}

      <main style={{ backgroundColor: '#f2f2f2', minHeight: '100vh', padding: '20px' }}>
        <HotelSearchWidget />
      </main>
    </div>
  );
}

export default App;