import { createContext, useState } from "react";
import PRODUCTS from "../../src/shop-data.json";

export const ProductsContext = createContext({
  products: [],
});

// eslint-disable-next-line react/prop-types
export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(PRODUCTS);
  const value = { products };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
