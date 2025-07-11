import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./component/NavBar";
import Fotter from "./component/Fotter";
import Hero_section from "./component/Hero_section";
import IphonePro from "./component/Iphone11Pro_section";
import Iphone11 from "./component/Iphone11";
import Card1 from "./component/Card1";
import Card2 from "./component/Card2";

function App() {
  return (
    <>
      <NavBar />
      <Hero_section />
      <IphonePro />
      <Iphone11 />
      <Card1 />
      <Card2 />
      <Fotter />
    </>
  );
}

export default App;
