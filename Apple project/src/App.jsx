import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./component/NavBar";
import Fotter from "./component/Fotter";
import Hero_section from "./component/Hero_section";
import IphonePro from "./component/Iphone11Pro_section";
import Iphone11 from "./component/Iphone11";
function App() {
  return (
    <>
      <NavBar />
      <Hero_section />
      <IphonePro />
      <Iphone11 />
      <Fotter />
    </>
  );
}

export default App;
