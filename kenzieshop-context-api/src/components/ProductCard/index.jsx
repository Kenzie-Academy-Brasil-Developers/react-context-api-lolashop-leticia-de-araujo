import { useContext } from "react";

import { CartContext } from "../../providers/cart";

import { StyledButton, StyledPaper } from "./style";

const ProductCard = ({ product }) => {
  const handleClickAdd = () => {
    addToCart(product);
  };

  const { addToCart } = useContext(CartContext);

  return (
    <StyledPaper>
      <img src={product.src} alt={product.alt} />
      <h2>{product.name}</h2>
      <div className="ProductCard-content">
        <span className="category">{product.category}</span>
        <p>{product.description}</p>
        <span className="price">${product.price}</span>
        <StyledButton variant="contained" onClick={handleClickAdd}>
          Add to cart
        </StyledButton>
      </div>
    </StyledPaper>
  );
};

export default ProductCard;
