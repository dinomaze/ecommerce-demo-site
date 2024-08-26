import React, { Fragment } from "react";
import Layout from "../layout";
import OrderFinishedComponent from "./OrderFinishedComponent";
import { Head } from "../../../head";

const OrderFinishedPage = (props) => {
  return (
    <Fragment>
      <Head pageTitle="Order Finished" />
      <Layout children={<OrderFinishedComponent />} />
    </Fragment>
  );
};

export default OrderFinishedPage;
