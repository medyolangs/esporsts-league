import { MDBIcon } from "mdbreact";
import React from "react";
import { Link } from "react-router-dom";
import { matches } from "../../Config/config";

import Match from "./Match/index";

import "./style.css";

interface ClassObj {
  ogm: string;
  uce: string;
}

const Matches: React.FC = () => {
  const [classes, setClasses] = React.useState<ClassObj>({
    ogm: "ogm active",
    uce: "uce",
  });

  const handleActive = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget.id === "ogm") {
      setClasses({ ogm: "ogm active", uce: "uce" });
    } else {
      setClasses({ ogm: "ogm", uce: "uce active" });
    }
  };

  return (
    <div className="container-es">
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

          {matches.map((match, key) => (
            <a
              href={`/matches/?tn=${match.teamNames}&t1=${match.team1}&t2=${match.team2}&m=${match.matches}`}
            >
              <Match
                key={key}
                team1={match.team1}
                team2={match.team2}
                teamNames={match.teamNames}
                matches={match.matches}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Matches;
