import { Fragment } from "react";
import Header from "./component/Layout/Header";
import Navbar from "./component/Layout/Navbar";
import Breadcrums from "./component/Layout/Breadcrums";
import Shop from "./component/Page/Shop";
import Footer from "./component/Layout/Footer";

function App() {
  return (
    <Fragment>
      <Header />
      <Navbar />
      <Breadcrums />
      <Shop />
      <Footer />
    </Fragment>
  );
}

export default App;
