import { InterfaceMatchDetails } from "../../Components/Home/Matches/matchInterface";

const url = "https://esports-server.herokuapp.com/";

export const teamMatches =
    (teams: InterfaceMatchDetails[]) => (dispatch: any) => {
        dispatch({
            type: "MATCH_DETAILS",
            payload: teams,
        });
    };

export const matchInfos = () => (dispatch: any) => {
    fetch(url + "teams")
        .then((data) => data.json())
        .then((content) =>
            dispatch({ type: "LATEST_MATCHES", payload: content })
        );
};

export const advertisement = () => (dispatch: any) => {
    fetch(url + "advertisements")
        .then((data) => data.json())
        .then((content) => dispatch({ type: "AD_IMGS", payload: content }));
};

export const latestStreams = () => (dispatch: any) => {
    fetch(url + "latest-streams")
        .then((data) => data.json())
        .then((content) =>
            dispatch({ type: "LATEST_STREAMS", payload: content })
        );
};
