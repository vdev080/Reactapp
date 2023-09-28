import React, { useState } from "react";
import Product from "./Product";

const ProductList = ({ selectedImage, handleProductClick }) => {
  const imageSources = [
    require("./assets/img/product-1-img.png"),
    require("./assets/img/product-2-img.png"),
    require("./assets/img/product-3-img.png"),
    require("./assets/img/product-1-img.png"),
    require("./assets/img/product-2-img.png"),
    require("./assets/img/product-3-img.png"),
    require("./assets/img/product-1-img.png"),
    require("./assets/img/product-2-img.png"),
    require("./assets/img/product-3-img.png"),
  ];

  const productNameSources = [
    "Don’t use It Anymore?",
    "Next Order @ Blacksmith",
    "Next Order @ Blacksmith",
    "Next Order @ Blacksmith",
    "Don’t use It Anymore?",
    "Next Order @ Blacksmith",
    "Next Order @ Blacksmith",
    "Next Order @ Blacksmith",
    "Don’t use It Anymore?",
  ];

  const productDateSources = [
    "2-Jul-2021",
    "3-Aug-2023",
    "5-June-2021",
    "6-Aug-2023",
    "7-Feb-2023",
    "9-Jul-2021",
    "12-June-2023",
    "13-Aug-2021",
    "21-Feb-2023",
  ];

  return (
    <>
      <div className="logo">
        <a href="/">
          <img src={require("./assets/img/grammarly-icon.png")} alt="" />
          <div className="logo-text">
            <h6>Grammarly</h6>
            <span>reebok.abfrl.in</span>
          </div>
        </a>
        <ul className="detail-list">
          <li>
            Contact Person<span>Johnson Jones</span>
          </li>
          <li>
            Contact No.<span>+14844760184</span>
          </li>
          <li>
            Contact Email<span>Jones@gmail.com</span>
          </li>
        </ul>
      </div>
      <ul className="product_list">
        {imageSources.map((src, index) => (
            <Product
            key={index}
            imgSrc={src}
            onClick={() => handleProductClick(src, productNameSources[index],productDateSources[index])}
            productName={productNameSources[index]}
            productDate={productDateSources[index]}
            />
        ))}
      </ul>
    </>
  );
};

export default ProductList;
