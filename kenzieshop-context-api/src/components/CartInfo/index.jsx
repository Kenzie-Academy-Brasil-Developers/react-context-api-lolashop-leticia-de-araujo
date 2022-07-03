import { useSelector } from "react-redux";
import { StyledButton, StyledPaper } from "./style";

const CartInfo = () => {
  const cartProducts = useSelector((store) => store.cartProducts);

  const calculateTotal = () => {
    const values = [];
    cartProducts.forEach((product) => {
      values.push(product.price);
    });

    const total = values.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      0
    );

    const totalFixed = total.toFixed(2);

    return totalFixed;
  };

  return (
    cartProducts.length > 0 && (
      <StyledPaper>
        <header>Summary</header>
        <div>
          <p>
            Quantity: <span>{cartProducts.length}</span>
          </p>
          <p>
            Total: <span>${calculateTotal()}</span>
          </p>
        </div>
        <StyledButton variant="contained">Check Out</StyledButton>
      </StyledPaper>
    )
  );
};

export default CartInfo;
