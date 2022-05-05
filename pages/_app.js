import globals from "../styles/globals.css";
import Header from "../Components/Head";
import Footer from "../Components/Footer";


import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import Store from '../Redux/Store/index'
import App from 'next/app';


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

// MyApp.getInitialProps = async (context) => {
//   let session1 = null;
//   let user = null;
//   session1 = await getSession(context);

//   if (session1) {
//     const userres = await fetch(
//       `${process.env.NEXTAUTH_URL}/api/user/login?email=${session1.user.email}`
//       );
//     user = await userres.json();
//   } else {
//     user = null;
//   }
//   return {
//     pageProps: {
//       ...(await App.getInitialProps(context)).pageProps,
//       pathname: context.router.pathname,
//       session: null,
//       phone: '54 9 353 6 570 880',
//       appName: 'DonOmar'
//     }
//   };
// };

export default MyApp;


