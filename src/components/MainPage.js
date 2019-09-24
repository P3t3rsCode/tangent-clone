import React from "react";
import "./MainPage.scss";
import ScrollAnimation from "react-animate-on-scroll";

export default function MainPage() {
  return (
    <div className="section">
      <div className="logo">
        <img src="img/tangent.svg" alt="logo" />
      </div>
      <div className="content">
        <div className="content-header">
          <ScrollAnimation animateIn="fadeInDown">
            <h3 className="title">Make Potential Possible</h3>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInRight">
            <p className="text">
              Natural born problem solvers, we’re the digital agency that'll
              help you realise your potential, reimagine your customer
              experience and reinvent your future - fast.
            </p>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInUp">
            <button>WATCH OUR SHOWREEL</button>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
}
