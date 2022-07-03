import { ThemeProvider } from "@mui/material";
import Header from "../../components/Header";
import ProductsList from "../../components/ProductsList";
import { theme } from "../../styles/global";

const HomePage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <ProductsList />
    </ThemeProvider>
  );
};

export default HomePage;
