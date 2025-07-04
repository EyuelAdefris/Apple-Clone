import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./component/NavBar";
import Fotter from "./component/Fotter";
import Hero_section from "./component/Hero_section";
import Iphone from "./component/Iphone";
function App() {
  return (
    <>
      <NavBar />
      <Hero_section />
      {/* <Iphone /> */}
      <Fotter />
    </>
  );
}

export default App;
