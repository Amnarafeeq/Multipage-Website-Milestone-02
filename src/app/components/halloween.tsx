import Image from "next/image";
import React from "react";
import "../home-page.css";
const Halloween = () => {
  return (
    <section className="halloween-sec">
      <div className="halloween-img-cont">
        <Image
          width="1300"
          height="400"
          src="/Images/halloween.jpg"
          className="halloween-desktop"
          alt=""
        />
        <Image
          width="1300"
          height="400"
          src="/Images/halloween-mobile.jpg"
          className="halloween-mobile"
          alt=""
        />
        <div className="halloween-text">
          <p>get into the halloween spirit</p>
          <p>Treat your friends & family with something boo-tiful and fun.</p>
          <button className="btn" id="halloween-btn">
            shop halloween
          </button>
        </div>
      </div>
    </section>
  );
};

export default Halloween;
