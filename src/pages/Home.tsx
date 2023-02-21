import React from 'react';
import ProductCard from '../components/card/ProductCard';
import { PRODUCTS } from '../products';
import '../styles/home.scss';

const Home: React.FC = () => {
  return (
    <div className="shop">
      <div className="shop__title">
        <h2>
          Techie <span>Shop</span>
        </h2>
      </div>
      <div className="products">
        {PRODUCTS.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            productName={product.productName}
            price={product.price}
            productImage={product.productImage}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
