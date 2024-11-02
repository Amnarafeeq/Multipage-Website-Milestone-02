import Image from "next/image";
import Link from "next/link";
import React from "react";
import "../home-page.css";
const Seller = () => {
  return (
    <section className="seller-sec">
      <h1 className="main-head">the best sellers</h1>
      <div className="seller-images-flex">
        <div className="seller-images-text">
          <Image
            width="230"
            height="240"
            src="/Images/seller-img-1.webp"
            className="img"
            alt=""
          />
          <p className="sell-para">Pick of the Patch Pumpkin Bouquet</p>
          <p className="sell-price">$54 - $72 SALE</p>
          <del>$60 - $80</del>
        </div>
        <div className="seller-images-text">
          <Image
            width="230"
            height="240"
            src="/Images/seller-img-2.webp"
            className="img"
            alt=""
          />
          <p className="sell-para">Sunlit Fall Rose Bouquet</p>
          <p className="sell-price">$45 - $72 SALE</p>
          <del>$50 - $80</del>
        </div>
        <div className="seller-images-text">
          <Image
            width="230"
            height="240"
            src="/Images/seller-img-3.webp"
            className="img"
            alt=""
          />
          <p className="sell-para">Botanical Dream Bouquet</p>
          <p className="sell-price">$49.50 - $67.50 SALE</p>
          <del>$55 - $75</del>
        </div>
        <div className="seller-images-text">
          <Image
            width="230"
            height="240"
            src="/Images/seller-img-4.webp"
            className="img"
            alt=""
          />
          <p className="sell-para">Birthday Bash Bouquet</p>
          <p className="sell-price">$54 - $72 SALE</p>
          <del>$60 - $80</del>
        </div>
      </div>
      <div className="seller-btn">
        <Link href="/bestseller">
          <button className="btn">shopbestsellers</button>
        </Link>
      </div>
    </section>
  );
};

export default Seller;
