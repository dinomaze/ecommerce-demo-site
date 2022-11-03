import React, { Fragment } from 'react';
import { isAuthenticate } from "../shop/auth/fetchApi";
import Login from '../shop/auth/Login';
import { Redirect, useLocation } from "react-router-dom";
import Layout from "../shop/layout";

const LoginPage = () => {
    const location = useLocation();

    const renderLoginPage = () => {
        if (isAuthenticate()) {
            return <Redirect
                to={{
                    pathname: "/",
                }}
            />
        }

        return <div style={{ width: '100%', height: '600px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <Login redirectTo={location.state?.from} />
        </div>;
    }

    return (
        <Fragment>
            <Layout children={renderLoginPage()} />
        </Fragment>
    );
}

export default LoginPage;