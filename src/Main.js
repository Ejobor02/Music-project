import React from 'react'
import icon from '../src/assets/icon-music.svg'
import music from '../src/assets/illustration-hero.svg'

const Main = () => {
  return (
    <div>
        <>
      <div className="container">
        <div className="hero">
          <img src={music} placeholder="music vibes"></img>
        </div>
        <div className="amen">
          <section className="amen-1">
            <h1>Order Summary</h1>
            <p>
              You can now listen to millions of songs, audiobooks, and podcasts
              on any device anywhere you like!
            </p>
          </section>
          <section className="amen-2">
            <div className="section-2-main">
              <img src={icon}></img>
              <div>
                <h3>Annual Plan</h3>
                <p>$59.99/year</p>
              </div>
            </div>
            <p id="plans">Change</p>
          </section>
          <section className="amen-3">
            <button>Proceed to Payment</button>
            <p>Cancel Order</p>
          </section>
        </div>
      </div>
    </>


    </div>
  )
}

export default Main