import { Switch, Route } from "react-router-dom";
import CartPage from "../pages/CartPage";
import HomePage from "../pages/HomePage";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>

        <Route exact path="/cart">
          <CartPage />
        </Route>
      </Switch>
    </>
  );
};

export default Routes;
