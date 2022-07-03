import { useSelector } from "react-redux";
import CartProductCard from "../CartProductCard";
import { v4 as uuidv4 } from "uuid";
import { StyledPaper } from "./style";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";


const CartProductsList = () => {
  const cartProducts = useSelector((store) => store.cartProducts);

  const cartUniqueProducts = () => {
    const uniqueProducts = [];

    cartProducts.forEach((cartProduct) => {
      if (uniqueProducts.indexOf(cartProduct) === -1) {
        uniqueProducts.push(cartProduct);
      }
    });

    return uniqueProducts;
  };

  const uniqueProd = cartUniqueProducts();

  return (
    uniqueProd && (
      <StyledPaper elevation={3}>
        <header>Shopping Cart</header>
        {uniqueProd.length > 0 ? (
          uniqueProd.map((product) => {
            return <CartProductCard key={uuidv4()} product={product} />;
          })
        ) : (
          <div className="empty-cart">
            <h2>Empty Cart</h2>
            <LocalMallOutlinedIcon color="primary" sx={{ width: "10rem" }} />
          </div>
        )}
      </StyledPaper>
    )
  );
};

export default CartProductsList;
