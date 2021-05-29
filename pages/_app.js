import "../styles/globals.css";
import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomeLayout from "../components/Layouts/HomeLayout";

function MyApp({ Component, pageProps }) {
  return (
    <HomeLayout>
      <Component {...pageProps} />
    </HomeLayout>
  );
}

export default MyApp;
