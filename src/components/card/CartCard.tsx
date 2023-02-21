import React, { useContext } from 'react';
import { ProductCardProps } from '../../interface/productCard';
import { productContext } from '../../service/product-context';
import '../../styles/cartCard.scss';

const CartCard = ({
  id,
  productImage,
  productName,
  price,
}: ProductCardProps) => {
  const { addProduct, productsItem, removeProduct } =
    useContext(productContext);

  return (
    <div className="cartItem">
      <img src={productImage} alt="cool" />
      <div className="items">
        <h3 className="title">{productName}</h3>
        <p className="price">
          <span>$</span>
          {price}
        </p>
        <div className="counter">
          <button onClick={() => removeProduct(id)} className="btn">
            -
          </button>
          <p>{productsItem[id]}</p>
          <button onClick={() => addProduct(id)} className="btn">
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
