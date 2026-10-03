import { Link } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <Link to={`/products/${product.id}`} className="product">
      <img
        src={`https://ecommerce-samurai.up.railway.app/${product.images[0]}`}
        alt=""
        className="product__img"
      />
      <div className="product__details">
        <h3 className="product__details__title">{product.name}</h3>
        <span className="product__details__price">${product.price}</span>
      </div>
    </Link>
  );
};

export default Product;
