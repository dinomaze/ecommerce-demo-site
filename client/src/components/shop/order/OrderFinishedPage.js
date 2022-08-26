import React, { Fragment } from "react";
import Layout from "../layout";
import OrderFinishedComponent from "./OrderFinishedComponent";

const OrderFinishedPage = (props) => {
  return (
    <Fragment>
      <Layout children={<OrderFinishedComponent />} />
    </Fragment>
  );
};

export default OrderFinishedPage;
