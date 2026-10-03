import React from "react";

const ProductPageSkeleton = () => {
  return (
    <>
      <div className="selected-product">
        <div className="selected-product__left">
          <div className="selected-product__img__wrapper">
            <div className="selected-product__img--skeleton skeleton"></div>
          </div>
          <div className="selected-product__img__options">
            <div className="selected-product__img__option--skeleton skeleton"></div>
            <div className="selected-product__img__option--skeleton skeleton"></div>
            <div className="selected-product__img__option--skeleton skeleton"></div>
          </div>
        </div>
        <div className="selected-product__right">
          <div className="selected-product__title--skeleton skeleton"></div>
          <div className="selected-product__para--skeleton__wrapper">
            <div className="selected-product__para--skeleton skeleton"></div>
            <div className="selected-product__para--skeleton skeleton"></div>
            <div className="selected-product__para--skeleton skeleton"></div>
            <div className="selected-product__para--skeleton skeleton"></div>
          </div>
          <div className="selected-product__quantity">
            <span className="selected-product__quantity__span selected-product__quantity__span-1">
              Quantity
            </span>
            <div className="selected-product__quantity__amount__wrapper">
              <div className="selected-product__quantity__amount--skeleton skeleton"></div>
              <div className="selected-product__quantity__amount--skeleton skeleton"></div>
              <div className="selected-product__quantity__amount--skeleton skeleton"></div>
            </div>
            <div className="selected-product__quantity__span--skeleton skeleton">
              $95
            </div>
          </div>
          <div className="selected-product__add--skeleton skeleton"></div>
        </div>
      </div>
      <div className="specifications">
        <div className="spec--skeleton skeleton"></div>
        <div className="spec--skeleton skeleton"></div>
        <div className="spec--skeleton skeleton"></div>
      </div>
    </>
  );
};

export default ProductPageSkeleton;
