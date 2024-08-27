import React, { Fragment, createContext, useReducer } from "react";
import Layout from "../layout";
import {
  productDetailsState,
  productDetailsReducer,
} from "./ProductDetailsContext";
import ProductDetailsSection from "./ProductDetailsSection";

export const ProductDetailsContext = createContext();

const ProductDetails = (props) => {
  const [data, dispatch] = useReducer(
    productDetailsReducer,
    productDetailsState
  );
  return (
    <Fragment>
      <ProductDetailsContext.Provider value={{ data, dispatch }}>
        <Layout children={<ProductDetailsSection />} />
      </ProductDetailsContext.Provider>
    </Fragment>
  );
};

export default ProductDetails;
