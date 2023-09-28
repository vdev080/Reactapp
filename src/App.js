import './App.css';
import React, { useState } from 'react';
import ProductList from './ProductListing';
import ProductDetail from './ProductDetail';

function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedProductName, setSelectedProductName] = useState(null);
  const [selectedProductDate, setSelectedProductDate] = useState(null);

  const handleProductClick = (imgSrc, productName,productDate) => {
    console.log("productName in ProductList:", productName); 
    setSelectedImage(imgSrc);
    setSelectedProductName(productName);
    setSelectedProductDate(productDate);
  };
  

  return (
    <div className='dashboard-box'>
          <div className="left-box">
            <ProductList selectedImage={selectedImage} handleProductClick={handleProductClick} />
          </div>
          <div className="right-box">
            <ProductDetail imgSrc={selectedImage}  productName={selectedProductName} productDate={selectedProductDate} />
          </div>
    </div>
  );
}

export default App;
