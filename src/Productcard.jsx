import React, { useState, useEffect } from "react";
import "./App.css"; 
import image1 from "./assets/Screenshot 2024-12-02 105857.png";
import image2 from "./assets/Screenshot 2024-12-02 105903.png";
import image3 from "./assets/Screenshot 2024-12-02 105909.png";
import image4 from "./assets/Screenshot 2024-12-02 105925.png";
import image5 from "./assets/Screenshot 2024-12-02 105932.png";
import image6 from "./assets/Screenshot 2024-12-02 105938.png";
import image7 from "./assets/Screenshot 2024-12-02 105944.png";
import image8 from "./assets/Screenshot 2024-12-02 105952.png";
import image9 from "./assets/Screenshot 2024-12-02 105958.png";
import image10 from "./assets/Screenshot 2024-12-02 105958.png";




const products = [
  { src: image1, alt: "Product 1" },
  { src: image2, alt: "Product 2" },
  { src: image3, alt: "Product 3" },
  { src: image4, alt: "Product 4" },
  { src: image5, alt: "Product 5" },
  { src: image6, alt: "Product 6" },
  { src: image7, alt: "Product 7" },
  { src: image8, alt: "Product 8" },
  { src: image9, alt: "Product 9" },
  { src: image10, alt: "Product 10" },
];

  function Productcard() {
    return (
      <div>
        <h2 className="head">OUR INTELLIGENT COLLECTION</h2>
        <div className="product-grid">
          {products.map((product, index) => (
            <div className="product-card" key={index}>
              <img src={product.src} alt={product.alt} />
            </div>
          ))}
        </div>
      </div>
    );
  }

export default Productcard;