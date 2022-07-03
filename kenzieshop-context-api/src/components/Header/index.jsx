import { useHistory } from "react-router-dom";
import { StyledHeader } from "./style";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { IconButton } from "@mui/material";
import { useSelector } from "react-redux";

const Header = () => {
  const history = useHistory();

  const cartProducts = useSelector((store) => store.cartProducts);

  const handleClickGoToCart = () => {
    history.push("/cart");
  };

  const handleClickGoToHome = () => {
    history.push("/");
  };

  return (
    <StyledHeader>
      <IconButton color="primary" onClick={handleClickGoToHome}>
        <img
          src="https://i.ibb.co/1X6WmBc/L-2.png"
          alt="Logo"
          className="logo"
        />
      </IconButton>

      {cartProducts.length > 0 ? (
        <IconButton color="primary" size="large" onClick={handleClickGoToCart} className="Header-cart-icon">
          <ShoppingCartIcon />
          <span className="Header-quantity">{cartProducts.length}</span>
        </IconButton>
      ) : (
        <IconButton color="primary" size="large" onClick={handleClickGoToCart}>
          <ShoppingCartIcon />
        </IconButton>
      )}
    </StyledHeader>
  );
};

export default Header;
