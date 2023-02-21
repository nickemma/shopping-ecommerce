import { createContext, useState } from 'react';
import { PRODUCTS } from '../products';

export const productContext = createContext<any>(null);

const getDefaultValue = () => {
  let cart: any = {};
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

const ProductContext = (props: any) => {
  const [productsItem, setProductsItem] = useState<any>(getDefaultValue());

  const getTotals = () => {
    let total = 0;
    for (const item in productsItem) {
      if (productsItem[item] > 0) {
        let product = PRODUCTS.find((product) => product.id === Number(item));
        total += productsItem[item] * product!.price;
      }
    }
    return total;
  };

  const addProduct = (id: any) => {
    setProductsItem((prev: any) => ({ ...prev, [id]: prev[id] + 1 }));
  };

  const removeProduct = (id: any) => {
    setProductsItem((prev: any) => ({ ...prev, [id]: prev[id] - 1 }));
  };

  const contextValue = {
    productsItem,
    addProduct,
    removeProduct,
    getTotals,
  };

  return (
    <productContext.Provider value={contextValue}>
      {props.children}
    </productContext.Provider>
  );
};

export default ProductContext;
