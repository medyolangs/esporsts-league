import { MDBIcon } from "mdbreact";
import React, { useState } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { actionCreators } from "../../../state";

import Match from "./Match/index";

import "./style.css";

interface ClassObj {
    ogm: string;
    uce: string;
}

const Matches: React.FC = () => {
    // set a state variable that will refresh the DOM whenver we click the match
    const [refreshBool, setRefreshBool] = useState<boolean>(false);

    const [classes, setClasses] = useState<ClassObj>({
        ogm: "ogm active",
        uce: "uce",
    });

    const [navClicked, setNavClicked] = useState<boolean>(false);

    const handleActive = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.currentTarget.id === "ogm") {
            setClasses({ ogm: "ogm active", uce: "uce" });
        } else {
            setClasses({ ogm: "ogm", uce: "uce active" });
        }
        setNavClicked(!navClicked);
    };

    const refresh = (e: React.MouseEvent<HTMLAnchorElement>) => {
        setRefreshBool(!refreshBool);
    };

    const dispatch: RootStateOrAny = useDispatch();

    const matches = useSelector(
        (state: RootStateOrAny) => state.latestMatchInfo
    );
    React.useEffect(() => {
        dispatch(actionCreators.matchInfos());
    }, [dispatch]);

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
                        <div
                            className={classes.ogm}
                            onClick={handleActive}
                            id="ogm"
                        >
                            On Going Matches
                        </div>
                        <div className={classes.uce} onClick={handleActive}>
                            Up Coming Events
                        </div>
                    </div>

                    {navClicked ? (
                        <div className="no_events">Upcoming Events </div>
                    ) : matches ? (
                        matches.map((match: any, idxKey: number) => (
                            <Link
                                to={`/matches?tn=${match?.teamNames}`}
                                key={idxKey}
                                onClick={refresh}
                            >
                                <Match
                                    team1={match?.team1}
                                    team2={match?.team2}
                                    teamNames={match?.teamNames}
                                    matches={match?.matches}
                                />
                            </Link>
                        ))
                    ) : (
                        <div className="no_events">NO Matches!</div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Matches;
