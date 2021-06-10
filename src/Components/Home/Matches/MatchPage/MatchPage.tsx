import React, { useContext } from "react";
import { MatchContext } from "../../../MatchContext/MatchContext";

import "./style.css";

interface MatchVal {
  teamNames: string;
  team1: string;
  team2: string;
  matches: string;
}

const MatchPage: React.FC = () => {
  const { matchValue } = useContext(MatchContext);
  console.log(window.location);

  const frSMVal: string[] = decodeURI(window.location.search.substr(1)).split(
    "&"
  );
  const newValue = frSMVal
    .filter((val) => val !== "")
    .map((val) => {
      const value = val.split("=")[1];
      return value;
    });
  const matchFrURI: MatchVal[] = [
    {
      teamNames: newValue[0],
      team1: newValue[1],
      team2: newValue[2],
      matches: newValue[3],
    },
  ];

  const [mVal, setMVal] = React.useState<MatchVal[]>([]);
  React.useEffect(() => {
    setMVal(matchFrURI || matchValue);
  }, []);

  return (
    <>
      {mVal!.map((val, key) => (
        <div key={key} className="match-page">
          <div className="img-wrap">
            <img
              className="img1"
              src={`../${val.team1}`}
              alt={val!.teamNames.split(" ")[0]}
            />
            <img src="../images/versus.png" alt="versus" className="mp-vs" />
            <img
              className="img2"
              src={`../${val.team2}`}
              alt={val.teamNames.split(" ")[2]}
            />
          </div>
          <div className="details-wrap">
            <span className="matches">{val.matches}</span>
            <div className="team-names">{val.teamNames}</div>
          </div>
        </div>
      ))}
    </>
  );
};

export default MatchPage;
