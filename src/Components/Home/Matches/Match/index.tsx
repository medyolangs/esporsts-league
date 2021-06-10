import { MDBIcon } from "mdbreact";
import React from "react";
import { MatchContext } from "../../../MatchContext/MatchContext";

import "./style.css";

interface Props {
  team1: string;
  team2: string;
  teamNames: string;
  matches: string;
}

const Match: React.FC<Props> = ({ team1, team2, teamNames, matches }) => {
  // send the match details to contextAPI and render to another component
  const { setMatchValue } = React.useContext(MatchContext);
  const sendDetails = () => {
    setMatchValue([{ team1, team2, teamNames, matches }]);
  };

  return (
    <div className="match-card" onClick={sendDetails}>
      <div className="match-logo">
        <div className="teams">
          <img src={team1} alt="bren" />
        </div>
        <div className="versus">
          <img src="./images/versus.png" alt="" />
        </div>
        <div className="teams">
          <img src={team2} alt="bren" />
        </div>
      </div>
      <div className="desc">
        <div className="team-names">{teamNames}</div>
        <div className="match-details">{matches}</div>
      </div>
      <div className="ws-btn">
        <MDBIcon icon="stream" />
        <a href="/streams">watch stream</a>
      </div>
    </div>
  );
};

export default Match;
