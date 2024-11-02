import Image from 'next/image'
import React from 'react'
import "../home-page.css"
const FallPinky = () => {
  return (
    <section className='fall-pinky-sec'>
        <div className="fall-img-cont">
        <Image width="650" height="100" src="/Images/fall.jpg" alt=""/>
        <div className="fall-text">
        <p>fall is here</p>
        <p>Bold blooms that capture the best the season has to offer </p>        
        <button className='btn' id='fall-btn'>shop fall</button>
        </div>
    </div>
    <div className="pinky-img-cont">
        <Image width="650" height="100" src="/Images/pinky.jpg" alt=""/>
        <div className="pinky-text">
        <p>breast cancer awareness month</p>
        <p>Help raise awareness for breast research & support those impacted with our pink collection.</p>        
        <button className='btn' id='pinky-btn'>shop pink</button>
        </div>
    </div>
    </section>
  )
}

export default FallPinky