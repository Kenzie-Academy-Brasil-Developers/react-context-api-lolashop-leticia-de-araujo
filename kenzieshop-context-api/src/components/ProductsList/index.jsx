import { useSelector } from "react-redux";
import ProductCard from "../ProductCard";

import { v4 as uuidv4 } from "uuid";
import { StyledMain } from "./style";

const ProductsList = () => {
  const products = useSelector((store) => store.products);


  return (
    <StyledMain>
      {products.map((product) => {
        return <ProductCard key={uuidv4()} product={product} />;
      })}
    </StyledMain>
  );
};

export default ProductsList;
