import React from "react";
import AdTitle from './AdTitle';
import InfoBox from './InfoBox';

const ProductDetail = ({ imgSrc, productName, productClicks, productDate }) => {
  console.log("productName in ProductDetail:", productName);

  return (
    <div className="product-detail-box">
      {imgSrc ? (
        <div className="product-sub-detail">
          <div className="top-box">
            <div className="img-box">
              <img src={imgSrc} alt="" />
            </div>
            <div className="detail-box">
              {/* Include the AdTitle component here and pass the productName prop */}
              <AdTitle productName={productName} />
              {/* End of AdTitle */}
              {/* Include the InfoBox component here and pass the productDate prop */}
              <InfoBox productDate={productDate} />
              {/* End of InfoBox */}
            </div>
          </div>
          <div className="performance-box">
            <div className="flex-box">
              <h3>Performance Stats</h3>
              <div className="date-picker">
                {/* Date picker content */}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="defult-box">
          <div className="text-box relative">
            <h4>
              Please Select An Ad From The Left Panel To View <br /> Its Performance Metrics
            </h4>
            <p className="small-para">
              See how your ad performed this month and tweak its strategy for better results.
            </p>
          </div>
          <div className="img-box">
            <img src={require("./assets/img/empty-img.png")} alt="Empty Image" />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
