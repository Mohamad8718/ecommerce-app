import React from "react";

const ProductSkeleton = () => {
  return (
    <div className="product product--skeleton">
      <div className="product_img skeleton"></div>
      <div className="product__details">
        <div className="product__name--skeleton skeleton"></div>
        <div className="product__price--skeleton skeleton"></div>
      </div>
    </div>
  );
};

export default ProductSkeleton;
