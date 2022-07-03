/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  addCartThunk,
  removeCartThunk,
} from "../../store/modules/cartProducts/thunk";

import { StyledBox, StyledButton } from "./style";

import { IconButton } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

const CartProductCard = ({ product }) => {
  const cartProducts = useSelector((store) => store.cartProducts);

  const dispatch = useDispatch();

  const [thisProdQtd, setThisProdQtd] = useState(1);

  const qtdProduct = (product) => {
    const filterProducts = cartProducts.filter((cartProduct) => {
      return cartProduct === product;
    });

    setThisProdQtd(filterProducts.length);
  };

  useEffect(() => qtdProduct(product), [cartProducts]);

  const handleClickAddCart = () => {
    return dispatch(addCartThunk(product));
  };

  const handleClickRemoveCart = () => {
    return dispatch(removeCartThunk(product.id));
  };

  const handleClickRemoveAllCart = () => {
    for (let i = 0; i < thisProdQtd; i++) {
      dispatch(removeCartThunk(product.id));
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
