import React from "react";
import Header from "../components/header/Header";
import Banner from "../components/banner/Banner";
import Introduce from "../components/introduce/Introduce";
import Overview from "../components/overviewProject/Overview";
import Position from "../components/position/Position";
import Utilities from "../components/utilities/Utilities";
// import ImgProject from "../components/imgProject/ImgProject";
import Benefit from "../components/benefit/Benefit";
import News from "../components/news/News";
import Footer from "../components/footer/Footer";

import "../style/app.css"
import "../../../assets/images/CitiAlto/_variable.css"
import "../../../assets/images/CitiAlto/style.css"
const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="section">
        <Banner />
        <Introduce />
        <Overview />
        <Position />
        <Utilities />
        {/* <ImgProject /> */}
        <Benefit />
        <News />
        <Footer />
      </div>
    </div>
  );
};

export default App;
