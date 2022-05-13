import "./App.css";
import GlobalStyles from "./styles/GlobalStyles";
import React from "react";
import Router from "./Router/index";

import "./fonts/AirbnbCerealBold.woff";
import "./fonts/AirbnbCerealLight.woff";
import "./fonts/AirbnbCerealMedium.woff";

import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "aos/dist/aos.css";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Router />
    </div>
  );
}

export default App;
