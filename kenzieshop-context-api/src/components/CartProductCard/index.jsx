/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";

import { CartContext } from "../../providers/cart";

import { StyledBox, StyledButton } from "./style";

import { IconButton } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

const CartProductCard = ({ product }) => {
  const { cartProducts, addToCart, removeFromCart } = useContext(CartContext);

  const [thisProdQtd, setThisProdQtd] = useState(1);

  const qtdProduct = (product) => {
    const filterProducts = cartProducts.filter((cartProduct) => {
      return cartProduct === product;
    });

    setThisProdQtd(filterProducts.length);
  };

  useEffect(() => qtdProduct(product), [cartProducts]);

  const handleClickAddCart = () => {
    addToCart(product);
  };

  const handleClickRemoveCart = () => {
    removeFromCart(product.id);
  };

  const handleClickRemoveAllCart = () => {
    for (let i = 0; i < thisProdQtd; i++) {
      removeFromCart(product.id);
    }
  };

  return (
    <StyledBox>
      <img src={product.src} alt={product.alt} />
      <div className="CartProductCard-name-description">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
      </div>
      <div className="CartProductCard-price-remove-qtd">
        <span className="price">${product.price}</span>

        <div className="CartProduct-changeQtd">
          <IconButton onClick={handleClickAddCart} size="small">
            <AddCircleOutlineIcon sx={{ width: "0.7em", height: "0.7em" }} />
          </IconButton>
          <span className="quantity">{thisProdQtd}</span>
          <IconButton onClick={handleClickRemoveCart} size="small">
            <RemoveCircleOutlineIcon sx={{ width: "0.7em", height: "0.7em" }} />
          </IconButton>
        </div>

        <StyledButton
          color="primary"
          variant="text"
          size="small"
          onClick={handleClickRemoveAllCart}
        >
          Remove from cart
        </StyledButton>
      </div>
    </StyledBox>
  );
};

export default CartProductCard;
