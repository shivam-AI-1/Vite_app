import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import Navbar from './Navbar.jsx'
import Carousel from './Carousel.jsx'
import Productcard from './Productcard.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar/>
    <Carousel/>
    <Productcard />
    
  </StrictMode>,
)
