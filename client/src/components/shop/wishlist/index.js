import React, { Fragment } from "react";
import Layout from "../layout";
import SingleWishProduct from "./SingleWishProduct";
import { Head } from "../../../head";

const WishList = () => {
  return (
    <Fragment>
      <Head pageTitle="Wishlist" />
      <Layout children={<SingleWishProduct />} />
    </Fragment>
  );
};

export default WishList;
