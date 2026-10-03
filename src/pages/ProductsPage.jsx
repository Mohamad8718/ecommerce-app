import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import Product from "../components/ui/Product";
import ProductSkeleton from "../components/ui/ProductSkeleton";
import { Link } from "react-router-dom";

const ProductsPage = () => {
  const { products } = useContext(AppContext);
  const [filter, setFilter] = useState("Default");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const filterProductsList = products.filter(
      (product) => product.category === filter,
    );

    setFilteredProducts(filterProductsList);
  }, [filter]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section id="all-products">
      <div className="container">
        <div className="row all-products__row">
          <div className="products__header">
            <Link to="/" className="products__header__link">
              <span className="products__header__link__text">{"< Home"}</span>
            </Link>
            <h1 className="products__header__title">Products</h1>
            <select
              value={filter}
              onChange={(event) => setFilter(event.target.value)}
              className="products__header__filter"
            >
              <option
                value="Default"
                disabled
                className="products__header__filter__option"
              >
                Sort
              </option>
              <option
                value="Furniture"
                className="products__header__filter__option"
              >
                Furniture
              </option>
              <option
                value="Electronics"
                className="products__header__filter__option"
              >
                Electronics
              </option>
              <option
                value="Lamps"
                className="products__header__filter__option"
              >
                Lamps
              </option>
              <option
                value="Kitchen"
                className="products__header__filter__option"
              >
                Kitchen
              </option>
              <option
                value="Chairs"
                className="products__header__filter__option"
              >
                Chairs
              </option>
              <option
                value="Skin Care"
                className="products__header__filter__option"
              >
                Skin Care
              </option>
            </select>
          </div>
          <div className="products__list">
            {products.length > 0
              ? (filteredProducts.length > 0 ? filteredProducts : products).map(
                  (product) => <Product product={product} key={product.id} />,
                )
              : new Array(20)
                  .fill(0)
                  .map((_, index) => <ProductSkeleton key={index} />)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsPage;
