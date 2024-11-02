import Link from "next/link";
import React from "react";
import "../home-page.css";
const Header = () => {
  return (
    <header>
      <p className="head-para">10% Off All Items – Discount Applied!</p>
      <div className="nav-sec">
        <h1 className="main-head">
          <Link href="/" className="logo">
            proflowers
          </Link>{" "}
        </h1>
        <nav>
          <ul className="nav">
            <li>
              <Link href="/fall-flowers" className="links">
                Fall
              </Link>
            </li>
            <li>
              <Link href="/most-popular" className="links">
                Most Popular
              </Link>
            </li>
            <li>
              <Link href="/birthday" className="links">
                Birthday
              </Link>
            </li>
            <li>
              <Link href="/sympathy" className="links">
                Sympathy
              </Link>
            </li>
            <li>
              <Link href="/occasions" className="links">
                Occasions
              </Link>
            </li>
            <li>
              <Link href="/plants" className="links">
                Plants
              </Link>
            </li>
            <li>
              <Link href="/gifts" className="links">
                Gifts
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
