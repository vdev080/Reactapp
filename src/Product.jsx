import React from "react";

const Product = ({ imgSrc, productName, onClick, productDate }) => {
  return (
    <>
      <li onClick={onClick}>
        <div className="img-box">
          <img src={imgSrc} alt="" />
        </div>
        <h5>{productName}</h5>
        {/* Include the productDate prop */}
      </li>
    </>
  );
};

export default Product;
