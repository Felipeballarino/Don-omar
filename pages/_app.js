import globals from "../styles/globals.css";
import Header from "../Components/Head";
import Footer from "../Components/Footer";

import React from 'react';
import { Provider } from 'react-redux';
import Store from '../Store/index'


const MyApp = ({ Component, pageProps }) => {
  return (
    <>
    <Provider store={Store}>
      <Header></Header>
      <Component {...pageProps} />
      <Footer></Footer>
    </Provider>
    </>
  );
};

export default MyApp;
