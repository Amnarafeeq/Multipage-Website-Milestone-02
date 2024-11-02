import Image from "next/image";
import React from "react";
import "../home-page.css";
const Occasions = () => {
  return (
    <section className="occasion-sec">
      <h1 className="main-head">shop by occasion</h1>
      <div className="occ-flex">
        <div className="occ-text">
          <Image width="290" height="100" src="/Images/occ-1.webp" alt="" />
          <a href="#">sympathy</a>
        </div>

        <div className="occ-text">
          <Image width="290" height="100" src="/Images/occ-2.webp" alt="" />
          <a href="#">birthday</a>
        </div>

        <div className="occ-text">
          <Image width="290" height="100" src="/Images/occ-3.webp" alt="" />
          <a href="#">get well</a>
        </div>

        <div className="occ-text">
          <Image width="290" height="100" src="/Images/occ-4.webp" alt="" />
          <a href="#">just because</a>
        </div>

        <div className="occ-text">
          <Image width="290" height="100" src="/Images/occ-5.webp" alt="" />
          <a href="#">anniversary</a>
        </div>

        <div className="occ-text">
          <Image width="290" height="100" src="/Images/occ-6.webp" alt="" />
          <a href="#">baby</a>
        </div>

        <div className="occ-text">
          <Image width="290" height="100" src="/Images/occ-7.webp" alt="" />
          <a href="#">thinking of you</a>
        </div>

        <div className="occ-text">
          <Image width="290" height="100" src="/Images/occ-8.webp" alt="" />
          <a href="#">same day delivery</a>
        </div>
      </div>
    </section>
  );
};

export default Occasions;
