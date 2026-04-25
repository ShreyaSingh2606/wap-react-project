import React, { useState } from 'react';
import Footer from './features/Footer/Footer';
import New from "./features/New/New";
import "./App.css"

function App() {
  return (
    <div className="App">
      <New />
      <Footer />
    </div>
  );
}

export default App;
