import { MDBIcon } from "mdbreact"
import React from "react"

import "./style.css"

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <div className="social-media-links">
        <a href="httsp://www.facebook.com/esports-league" target="_blank" rel="noreferrer">
          <MDBIcon fab icon="facebook-square" className="soc-icons" />
        </a>
        <a href="https://www.youtube.com/esports-league" target="_blank" rel="noreferrer">
          <MDBIcon fab icon="youtube-square" className="soc-icons" />
        </a>
        <a href="https://www.twitter.com/esports-league" target="_blank" rel="noreferrer">
          <MDBIcon fab icon="twitter-square" className="soc-icons" />
        </a>
      </div>
      <div className="copyright"> 
        <span>Inspired by:</span>
        <a href="https://playerx.qodeinteractive.com/esports-home" target="_blank" rel="noreferrer">
          playerx.qodeinteractive
        </a>
      </div>
    </div>
  )
}

export default Footer
