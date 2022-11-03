import React, { Fragment, createContext, useEffect } from "react";
import { Navber, Footer, CartModal } from "../partials";
import LoginSignup from "../auth/LoginSignup";
import { loginReq } from '../auth/fetchApi';

export const LayoutContext = createContext();

const Layout = ({ children }) => {
  // auto login
  useEffect(() => {
    const autoLogin = async () => {
      try {
        let responseData = await loginReq({
          email: 'shared_tester@test.com',
          password: '123456test',
        });
        if (responseData.error) {
          console.error('failed to login user', responseData.error);
        } else if (responseData.token) {
          console.log('logged in the user');
          localStorage.setItem("jwt", JSON.stringify(responseData));
          sessionStorage.setItem('auto_login', "true");
        }
      } catch (error) {
        console.log('failed to login user', error);
      }
    }

    if (localStorage.getItem('disable_auto_login')) {
      console.log('auto login is disabled');
      window.login = autoLogin;
      return;
    }

    if (!!localStorage.getItem("jwt") || !!sessionStorage.getItem('auto_login')) {
      sessionStorage.setItem('auto_login', "true");
      console.log('already logged in');
      return;
    }

    console.log('start auto login');
    autoLogin();
  }, []);

  return (
    <Fragment>
      <div className="flex-grow">
        <Navber />
        <LoginSignup />
        <CartModal />
        {/* All Children pass from here */}
        {children}
      </div>
      <Footer />
    </Fragment>
  );
};

export default Layout;
