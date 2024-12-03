import { useState } from 'react'
import reactLogo from './assets/react.svg'
import logo from './assets/logo.png'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>

        <ul style={{ listStyleType: "none" }} className="hehe">
          <li>MEN</li>
          <li>WOMEN</li>
          <li>SHARK'S FAVOURITE</li>
          <li>ABOUT US</li>
          <li>REVIEW</li>
        </ul>


        <div className="logo">
          <img
            src={logo}
            alt="Logo"
            height="70px"
          />
        </div>


        <ul className="nav-icons">
          <li>SEARCH</li>
          <li>
            <a href="/form.html">ACCOUNT</a>
          </li>
          <li>CART</li>
        </ul>
      </div>

    </>
  )
}

export default App
