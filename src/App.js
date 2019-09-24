import React from "react";
import "./App.css";
import MainPage from "./components/MainPage";
import TechAwards from "./components/TechAwards";
import Clients from "./components/Clients";
import Footer from "./components/Footer";

import { useSpring, animated } from "react-spring";

function App() {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <div className="App">
      <animated.div style={props}>
        <MainPage />
        <TechAwards />
        <Clients />
        <Footer />
      </animated.div>
    </div>
  );
}

export default App;
