import React from "react"

import "./style.css"

const Advert: React.FC = () => {
  return (
    <div className="wdth">
      <div className="container">
        <div className="adverts">
          <div className="stream-advert">
            <div className="stream-image">
              <img
                src="./images/adverts/stream-image.jpg"
                alt="watch streams image"
              />
            </div>
            <div className="stream-txt">
              <h1>Watch Streams</h1>
              <p>you can watch your favorite gamer streams</p>
              <p>click here to sign in and watch</p>
              <button className="ad-btn">watch</button>
            </div>
          </div>
          <div className="advert-events">
            <div className="event-txt">
              <h1>Live Tournament Updates</h1>
              <p>Join and support your favorite team </p>
              <button className="ad-btn">Join</button>
            </div>
            <div className="event-image">
              <img
                src="./images/adverts/game-tournament.jpg"
                alt="live tournament image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Advert
