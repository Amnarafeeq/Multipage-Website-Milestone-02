import Image from "next/image";
import Birthday from "./components/birthday";
import Details from "./components/details";
import FallPinky from "./components/fall-pinky";
import Halloween from "./components/halloween";
import Occasions from "./components/occasions";
import Seller from "./components/seller";
import TrendyFlowers from "./components/trendy-flower";
import "./home-page.css";
export default function Home() {
  return (
    <div>
      <section>
        <div className="home-img-cont">
          <Image width="1300" height="400" src="/Images/home-img.webp" alt="" />
          <div className="img-text">
            <p id="home-para">
              At ProFlowers, we create beautiful, handcrafted floral
              arrangements perfect for every occasion. With fresh blooms and
              same-day delivery, you can easily brighten someone's day with a
              thoughtful, stunning bouquet. Let us help you celebrate life’s
              special moments!
            </p>
          </div>
        </div>
      </section>
      <Seller />
      <Halloween />
      <Birthday />
      <Occasions />
      <FallPinky />
      <TrendyFlowers />
      <Details />
    </div>
  );
}
