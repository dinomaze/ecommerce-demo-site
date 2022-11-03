import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isAuthenticate, isAdmin } from "./fetchApi";

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticate() && !isAdmin() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location },
          }}
        />
      )
    }
  />
);

export default ProtectedRoute;
