import React from "react";
import "./Footer.scss";
export default function Footer() {
  return (
    <div className="sectionF footer">
      <div className="left">
        <nav>
          <div>About</div>
          <div>Capabilities</div>
          <div>Work</div>
          <div>Idea</div>
          <div>Career</div>
        </nav>
        <div className="locations">
          <div className="location">
            <p>LONDON</p>
            <span>Threeways House 40-44 Clipstone Street London W1W 5DW</span>
            <div>020 7462 6100</div>
          </div>
          <div className="location">
            <p>NEW CASTLE</p>
            <span>
              Earl Grey House 75-85 Grey Street Newcastle upon Tyne NE1 6EF
            </span>
            <div>0191 9081681</div>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="header_text">Subscribe to our newsletter</div>
        <input type="email" placeholder="Email" />
        <p>
          You may unsubscribe from our monthly newsletter at any time. Check out
          our Privacy Policy for more information on how we store and protect
          your data.
        </p>
      </div>
    </div>
  );
}
