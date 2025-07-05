import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./component/NavBar";
import Fotter from "./component/Fotter";
import Hero_section from "./component/Hero_section";
import IphonePro from "./component/Iphone_section";
function App() {
  return (
    <>
      <NavBar />
      <Hero_section />
      <IphonePro />
      <Fotter />
    </>
  );
}

export default App;
