import React from "react";
import "./App.css";
import NavBar from "./pages/components/NavBar";
import AboutMe from "./pages/main-pages/AboutMe";
import Home from "./pages/main-pages/Home.js";
import Projects from "./pages/main-pages/Projects";
import StickyBox from "react-sticky-box";

import onScroll from "../src/scripts/onScroll.js";
import ProExp from "./pages/main-pages/ProExp";

function App() {
  return (
    <div className="App">
      <script src={onScroll} />
      <div className="App-body">
        <div className="main__container">
          <div className="background__back" />
          <div className="background__middle" />
          <div
            className="background__front"
            style={{ transform: "translateY(10vh) translateZ(105vh)" }}
          />
          <div className="nav__container">
          <StickyBox>
              <NavBar />
            </StickyBox>
          </div>
            <Home />
            <div className="divider" />
            <AboutMe />
            <Projects />
            <ProExp />
        </div>
      </div>
    </div>
  );
}

export default App;
