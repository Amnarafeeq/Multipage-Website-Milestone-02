import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import "../home-page.css"
const Footer = () => {
  return (
    <footer>
        <h1>proflowers</h1>
        <div className='foot-flex'>
            <div>
                <h3>Help</h3>
                <ul >
                <li><Link href="#" className='links'>Costumer Service</Link></li>
                <li><Link href="#" className='links'>Sitemap</Link></li>
                </ul>
                <div>
                <h3>Account</h3>
                <ul>
                <li><Link href="#" className='links'>Manage Your Account</Link></li>
                <li><Link href="#" className='links'>Track Your Order</Link></li>
                <li><Link href="#" className='links'>Order History</Link></li>
                <li><Link href="#" className='links'>Remainder Service</Link></li>
                <li><Link href="#" className='links'>ProPerks</Link></li>
                </ul>
                </div>
                <div>
                    <h3>Company</h3>
                    <ul>
                <li><Link href="#" className='links'>About Proflowers</Link></li>
                <li><Link href="#" className='links'>Careers</Link></li>
                <li><Link href="#" className='links'>Delivery Policy</Link></li>
                <li><Link href="#" className='links'>Ethical Labor Standards</Link></li>
                <li><Link href="#" className='links'>Join Our Florist Network</Link></li>
                <li><Link href="#" className='links'>Affiliate Program</Link></li>
                <li><Link href="#" className='links'>Proflowers Blog</Link></li>
                </ul>
                </div>
            </div>
            <div>
            <h3>Shop Now</h3>
            <div>
                <h2>Flower Delivery</h2>
                <ul>
                <li><Link href="#" className='links'>
                Send Flowers</Link></li>
                <li><Link href="#" className='links'>Mixed Flower Bouquets</Link></li>
                <li><Link href="#" className='links'>Same Day Flower Delivery</Link></li>
                <li><Link href="#" className='links'>Roses & Rose Bouquets</Link></li>
                <li><Link href="#" className='links'>Canada Delivery</Link></li>
                <li><Link href="#" className='links'>International Delivery</Link></li>
                </ul>
          <h2>Plant Delivery</h2>
          <ul>
          <li><Link href="#" className='links'>House Plants</Link></li>
          <li><Link href="#" className='links'>Flowering Plants</Link></li>
          <li><Link href="#" className='links'>Bonsai & Bamboo</Link></li>
          <li><Link href="#" className='links'>Succulents</Link></li>
          </ul>
          <ul>
           <h2>Gift Delivery</h2>
          <li><Link href="#" className='links'>Gift Baskets</Link></li>
          <li><Link href="#" className='links'>Chocolates</Link></li>
          <li><Link href="#" className='links'>Fruit Baskets</Link></li>
          <li><Link href="#" className='links'>Corporate Gifting</Link></li>
          </ul>
            </div>
            </div>
            <div>
            <h3>Occasions</h3>
            <div>
                <h2>Shop by Occasion</h2>
                <ul>
          <li><Link href="#" className='links'>Birthday Delivery</Link></li>
          <li><Link href="#" className='links'>Sympathy Flowers</Link></li>
          <li><Link href="#" className='links'>Sympathy Plants</Link></li>
          <li><Link href="#" className='links'>Just Because</Link></li>
          <li><Link href="#" className='links'>Anniversary</Link></li>
          <li><Link href="#" className='links'>Congratulations</Link></li>
          <li><Link href="#" className='links'>Get Well</Link></li>
                </ul>
                <h3>Holidays</h3>
               <h2>Shop by Holiday</h2>
               <ul>
          <li><Link href="#" className='links'>Valentine's Day</Link></li>
          <li><Link href="#" className='links'>Easter</Link></li>
          <li><Link href="#" className='links'>Mother's Day</Link></li>
          <li><Link href="#" className='links'>Thanksgiving</Link></li>
          <li><Link href="#" className='links'>Christmas</Link></li>

               </ul>
            </div>
            </div>
            <div>
            <h3>Freshen Up Your Inbox</h3>
            <div>
                <input type="email" placeholder='Enter your email' />
                <button>Sign Up</button>
            </div>
            <h3>Contact</h3>
            <p>We are here for you 24 hours a day</p>
          <li><Link href="#" className='links'>Track Your Order</Link></li>
          <p>1.800.580.2913</p>
          <p>ADA Help</p>
          <div className='foot-img'>
          <Image width="50" height="100" src="/Images/proflowers-facebook.svg"    alt="" />
          <Image width="50" height="100" src="/Images/proflowers-instagram.svg"  className='foot-img'  alt="" />
          <Image width="50" height="100" src="/Images/proflowers-twitter.svg"   className='foot-img' alt="" />
          <Image width="50" height="100" src="/Images/proflowers-youtube.svg"  className='foot-img' alt="" />
          <Image width="50" height="100" src="/Images/proflowers-pinterest.svg"  className='foot-img' alt="" />
          </div>
         
           
            </div>
        </div>
    </footer>
  )
}

export default Footer