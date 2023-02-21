import { useContext } from 'react';
import CartCard from '../components/card/CartCard';
import { PRODUCTS } from '../products';
import { useNavigate } from 'react-router-dom';
import { productContext } from '../service/product-context';
import '../styles/cart.scss';

const Cart = () => {
  const { productsItem, getTotals } = useContext(productContext);
  const total = getTotals();
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/');
  };

  return (
    <div className="cart">
      <div className="cart__title">
        {total > 0 ? <h2>Your Cart Items</h2> : ''}
      </div>
      <div className="cart__item">
        {PRODUCTS.map((product) => {
          if (productsItem[product.id] !== 0) {
            return <CartCard key={product.id} {...product} />;
          }
        })}
      </div>
      {total > 0 ? (
        <div className="checkout">
          <p>Subtotal: ${total}</p>
          <div className="divider">
            <button className="add" onClick={handleNavigate}>
              Continue Shopping
            </button>
            <button className="add">Checkout</button>
          </div>
        </div>
      ) : (
        <h2 className="empty">Your Cart Is Empty</h2>
      )}
    </div>
  );
};

export default Cart;
