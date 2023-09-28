import React from 'react';

function AdTitle({ productName }) {
  return (
    <ul className="detail-text">
      <li><span>Ad Title</span><h6>{productName}</h6></li>
      <li><span>External Link</span><p>www.rumieapp.com</p></li>
      <li><span>Visible to</span><p>Texas University, Houston University, UH Energy</p></li>
    </ul>
  );
}

export default AdTitle;
