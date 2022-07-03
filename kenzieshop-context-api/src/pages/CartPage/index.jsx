import { ThemeProvider } from "@mui/material";
import CartInfo from "../../components/CartInfo";
import CartProductsList from "../../components/CartProductsList";
import Header from "../../components/Header";
import { theme } from "../../styles/global";
import { StyledMain } from "./style";

const CartPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <StyledMain>
        <CartProductsList />
        <CartInfo />
      </StyledMain>
    </ThemeProvider>
  );
};

export default CartPage;
