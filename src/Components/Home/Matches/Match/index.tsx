import { MDBIcon } from "mdbreact"
import React from "react"

import "./style.css"

const Match: React.FC = () => {
  return (
    <div className="match-card">
      <div className="match-logo">
        <div className="teams">
          <img src="./images/teams/86.png" alt="bren" />
        </div>
        <div className="versus">
          <img src="./images/versus.png" alt="" />
        </div>
        <div className="teams">
          <img src="./images/teams/excalibur.png" alt="bren" />
        </div>
      </div>
      <div className="desc">
        <div className="opps-desc">Sonic vs Excalibur</div>
        <div className="match-details">Match 1</div>
      </div>
      <div className="ws-btn">
        <MDBIcon icon="stream" />
        <a href="/streams">watch stream</a>
      </div>
    </div>
  )
}

export default Match
