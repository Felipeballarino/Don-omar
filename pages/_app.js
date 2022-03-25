import globals from "../styles/globals.css";
import Header from "../Components/Head";
import Footer from "../Components/Footer";
const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Header></Header>
      <Component {...pageProps} />
      <Footer></Footer>
    </>
  );
};

export default MyApp;
