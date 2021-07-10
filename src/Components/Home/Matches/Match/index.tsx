import { MDBIcon } from "mdbreact";
import React from "react";
import { RootStateOrAny, useDispatch } from "react-redux";
import { actionCreators } from "../../../../state";
import { InterfaceMatchDetails } from "../matchInterface";

import "./style.css";

interface Props {
    team1: string;
    team2: string;
    teamNames: string;
    matches: string;
}

const Match: React.FC<Props> = ({ team1, team2, teamNames, matches }) => {
    // wrap the details inside an obj
    const details: InterfaceMatchDetails[] = [
        { team1: team1, team2: team2, teamNames: teamNames, matches: matches },
    ];

    // get the dispatch function with useDispatch() from react-redux
    const dispatch: RootStateOrAny = useDispatch();

    const sendDetails = () => {
        dispatch(actionCreators.teamMatches(details));
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
                <span>watch stream</span>
            </div>
        </div>
    );
};

export default Match;
