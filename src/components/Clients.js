import React from "react";
import "./Clients.scss";
import ScrollAnimation from "react-animate-on-scroll";

export default function Clients() {
  const imgs = ["b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "b10"];
  return (
    <div className="sectionl">
      <div className="sub-head">OUR CLIENTS</div>
      <div className="header_con">
        <ScrollAnimation animateIn="fadeIn" className="header">
          <p>
            We partner with the biggest brands in digital to create powerful
            products and experiences
          </p>
        </ScrollAnimation>
      </div>
      <div className="brand_con">
        {imgs.map(item => {
          let src = "img/" + item + ".svg";
          return (
            <ScrollAnimation animateIn="fadeInUp">
              <div className="logo">
                <img src={src} className />
              </div>
            </ScrollAnimation>
          );
        })}
      </div>
    </div>
  );
}
