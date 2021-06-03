import { MDBIcon } from "mdbreact"
import React from "react"

import Match from "./Match/index"

import "./style.css"

interface ClassObj {
  ogm: string
  uce: string
}

const Matches: React.FC = () => {
  const [classes, setClasses] = React.useState<ClassObj>({
    ogm: "ogm active",
    uce: "uce",
  })

  const handleActive = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget.id === "ogm") {
      setClasses({ ogm: "ogm active", uce: "uce" })
    } else {
      setClasses({ ogm: "ogm", uce: "uce active" })
    }
  }

  return (
    <div className="container">
      <div className="match-wrapper">
        <div className="trending-matches">
          <div className="fat-arrow-icon">
            <MDBIcon icon="caret-right" />
          </div>
          <div>Trending Matches</div>
        </div>
        <div className="matches">
          <div className="match-nav">
            <div className={classes.ogm} onClick={handleActive} id="ogm">
              On Going Matches
            </div>
            <div className={classes.uce} onClick={handleActive}>
              Up Coming Events
            </div>
          </div>
          <Match
            team1={"./images/teams/86.png"}
            team2={"./images/teams/excalibur.png"}
            teamNames={"Monster vs Excalibur"}
            matchDetails={"match 1"}
          />
          <Match
            team1={"./images/teams/bren-y-500.png"}
            team2={"./images/teams/aura-256.png"}
            teamNames={"Bren vs Aura"}
            matchDetails={"match 2"}
          />
          <Match
            team1={"./images/teams/omega-256.png"}
            team2={"./images/teams/excalibur.png"}
            teamNames={"Omega vs Excalibur "}
            matchDetails={"match 2"}
          />
          <Match
            team1={"./images/teams/onic.png"}
            team2={"./images/teams/alter-ego.png"}
            teamNames={"Onic vs Alter Ego"}
            matchDetails={"match 1"}
          />
          <Match
            team1={"./images/teams/86.png"}
            team2={"./images/teams/bren-y-500.png"}
            teamNames={"Monster vs Bren"}
            matchDetails={"match 3"}
          />
        </div>
      </div>
    </div>
  )
}

export default Matches
