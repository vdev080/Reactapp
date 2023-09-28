import React from 'react';

function InfoBox({ productDate }) {
  return (
    <div className="flex-box">
      <div className="live-since">
        <div className="txt">
          <span>Live Since</span>
          <p>{productDate}</p>
        </div>
        <div className="day-box">
          16<span>Days</span>
        </div>
      </div>
      <div className="budget-box">
        <span>Monthly Budget</span>
        <p>$100</p>
      </div>
    </div>
  );
}

export default InfoBox;


