import { createContext, useState } from "react";

export const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);

  const addToCart = (product) => {
    setCartProducts([...cartProducts, product]);
  };

  const removeFromCart = (id) => {
    const productQuantity = cartProducts.filter(
      (product) => product.id === id
    ).length;

    if (productQuantity > 1) {
      const productToRemove = cartProducts.find((product) => product.id === id);

      const indexProductToRemove = cartProducts.indexOf(productToRemove);

      cartProducts.splice(indexProductToRemove, 1);

      const newCartProducts = [...cartProducts];

      setCartProducts(newCartProducts);
    } else {
      const newCartProducts = cartProducts.filter(
        (product) => product.id !== id
      );

      setCartProducts(newCartProducts);
    }
  };

  return (
    <CartContext.Provider value={{ cartProducts, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
