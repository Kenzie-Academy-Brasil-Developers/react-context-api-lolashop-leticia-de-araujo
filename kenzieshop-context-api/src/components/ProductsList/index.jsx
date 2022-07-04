import { useContext } from "react";

import { ProductsContext } from "../../providers/products";

import ProductCard from "../ProductCard";

import { v4 as uuidv4 } from "uuid";

import { StyledMain } from "./style";

const ProductsList = () => {
  const { products } = useContext(ProductsContext);

  return (
    products && (
      <StyledMain>
        {products.map((product) => {
          return <ProductCard key={uuidv4()} product={product} />;
        })}
      </StyledMain>
    )
  );
};

export default ProductsList;
