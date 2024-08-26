import React, { Fragment } from "react";
import Layout from "../layout";
import { CheckoutComponent } from "./CheckoutProducts";
import { Head } from "../../../head";

const CheckoutPage = (props) => {
  return (
    <Fragment>
      <Head pageTitle="Checkout" />
      <Layout children={<CheckoutComponent />} />
    </Fragment>
  );
};

export default CheckoutPage;
