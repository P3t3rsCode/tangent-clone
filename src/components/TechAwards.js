import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

export default function TechAwards() {
  return (
    <div
      className="section bg2"
      style={{
        backgroundImage: "url(" + require("../res/bg2.jpg") + ")"
      }}
    >
      <div className="content">
        <div className="content-header">
          <ScrollAnimation animateIn="fadeInDown">
            <h3 className="title">
              El Bot wins Campaign Tech award for Most Effective Use of
              Artificial Intelligence
            </h3>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInRight">
            <p className="text">
              Our chatbot for Netflix's Stranger Things won the award for Most
              Effective Use of A.I. at the Campaign Tech Awards.
            </p>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInUp">
            <button>VIEW CASE STUDY</button>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
}
