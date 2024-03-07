import React from "react";
import './About.scss';

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Block01 from "./components/Block01/Block01";
import Block02 from "./components/Block02/Block02";
import Block03 from "./components/Block03/Block03";
import Block04 from "./components/Block04/Block04";

const About = () => {
  useEffect(()=> {
    Aos.init({duration: 1000})
  })
  return (
    <div className="about">
      <div className="wrapper">
        <Block01/>
        <Block02/>
        <Block03/>
        <Block04/>
      </div>
    </div>
  )
}

export default About;