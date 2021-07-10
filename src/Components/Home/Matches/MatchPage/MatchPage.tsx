import React from "react";
import { RootStateOrAny, useSelector } from "react-redux";
import { InterfaceMatchDetails } from "../matchInterface";

import "./style.css";

const MatchPage: React.FC = () => {
    // matchDetails is from actionReducer, this will get the state of that individual reducer
    const matchDetails = useSelector(
        (state: RootStateOrAny) => state.matchDetails
    );

    const [data, setDataFromLocalStorage] =
        React.useState<InterfaceMatchDetails>();

    const setItemToLocalStorage = React.useCallback(() => {
        if (
            matchDetails[0].team1 !== "" &&
            JSON.parse(localStorage.getItem("match")!).team1 !==
                matchDetails[0].team1
        ) {
            console.log("update the localStorage");
            localStorage.setItem("match", JSON.stringify(matchDetails[0]));
        }
    }, [matchDetails]);

    React.useEffect(() => {
        setItemToLocalStorage();
        setDataFromLocalStorage(JSON.parse(localStorage.getItem("match")!));
    }, [setItemToLocalStorage]);

    return (
        <>
            {matchDetails!.map((val: InterfaceMatchDetails, key: number) => (
                <div key={key} className="match-page">
                    <div className="img-wrap">
                        <img
                            className="img1"
                            src={`${data ? data.team1 : val.team1}`}
                            alt={data ? data.teamNames : val!.teamNames}
                        />
                        <img
                            src="../images/versus.png"
                            alt="versus"
                            className="mp-vs"
                        />
                        <img
                            className="img2"
                            src={`${data ? data.team2 : val.team2}`}
                            alt={data ? data.teamNames : val.teamNames}
                        />
                    </div>
                    <div className="details-wrap">
                        <span className="matches">
                            {data ? data.matches : val.matches}
                        </span>
                        <div className="team-names">
                            {data ? data.teamNames : val.teamNames}
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default MatchPage;
