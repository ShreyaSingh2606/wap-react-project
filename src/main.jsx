import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ZotelProvider } from './context/ZotelContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ZotelProvider>
      <App />
    </ZotelProvider>
  </StrictMode>,
)
