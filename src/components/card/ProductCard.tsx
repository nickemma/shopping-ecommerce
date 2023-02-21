import { useContext } from 'react';
import { ProductCardProps } from '../../interface/productCard';
import '../../styles/productCard.scss';
import { productContext } from '../../service/product-context';

const ProductCard = ({
  id,
  productImage,
  productName,
  price,
}: ProductCardProps) => {
  const { addProduct, productsItem } = useContext(productContext);
  const cartItemAmount = productsItem[id];

  return (
    <div className="product">
      <img src={productImage} alt="awesome" />
      <div className="description">
        <h2>
          <strong>{productName}</strong>
        </h2>
        <div className="icon">
          <p>
            <span>$</span>
            {price}
          </p>
          <button className="add" onClick={() => addProduct(id)}>
            Add To Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
