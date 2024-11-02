import React from "react";
import Image from "next/image";
import "../home-page.css";
const TrendyFlowers = () => {
  return (
    <section>
      <h1 className="main-head">trending fall flowers</h1>
      <div className="occ-flex">
        <div className="occ-text trend-bg">
          <Image width="290" height="100" src="/Images/trendy1.webp" alt="" />
          <a href="#">sunflowers</a>
        </div>

        <div className="occ-text trend-bg">
          <Image width="290" height="100" src="/Images/trendy2.webp" alt="" />
          <a href="#">roses</a>
        </div>

        <div className="occ-text trend-bg">
          <Image width="290" height="100" src="/Images/trendy3.webp" alt="" />
          <a href="#">mums</a>
        </div>

        <div className="occ-text trend-bg">
          <Image width="290" height="100" src="/Images/trendy4.webp" alt="" />
          <a href="#">lilies</a>
        </div>
      </div>
    </section>
  );
};

export default TrendyFlowers;
