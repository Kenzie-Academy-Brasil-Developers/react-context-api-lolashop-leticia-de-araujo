import { useDispatch } from "react-redux";
import { addCartThunk } from "../../store/modules/cartProducts/thunk";
import { StyledButton, StyledPaper } from "./style";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleClickAdd = () => {
    return dispatch(addCartThunk(product));
  };

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
