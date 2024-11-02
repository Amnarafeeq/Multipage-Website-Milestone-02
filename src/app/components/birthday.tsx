import React from "react";
import "../home-page.css";
import Image from "next/image";
const Birthday = () => {
  return (
    <section className="birthday-sec">
      <div className="halloween-img-cont">
        <Image
          width="1300"
          height="400"
          src="/Images/birthday.jpg"
          className="birthday-desktop"
          alt=""
        />
        <Image
          width="1300"
          height="400"
          src="/Images/birthday-mobile.webp"
          className="birthday-mobile"
          alt=""
        />
        <div className="birthday-text">
          <p>happy birthday</p>
          <p>Sent a bouquet of happiness for their special day</p>
          <button className="btn" id="halloween-btn">
            shop birthday
          </button>
        </div>
      </div>
    </section>
  );
};

export default Birthday;
