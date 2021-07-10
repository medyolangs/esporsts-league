import { InterfaceMatchDetails } from "../../Components/Home/Matches/matchInterface";

const initialState: InterfaceMatchDetails[] = [
    {
        matches: "",
        team1: "",
        team2: "",
        teamNames: "",
    },
];

// latest streams
export const streamThumbnail = (
    state: [] = [],
    action: { type: string; payload: [] }
) => {
    switch (action.type) {
        case "LATEST_STREAMS":
            return action.payload;
        default:
            return state;
    }
};

// ads and lates matches
export const adsImgs = (
    state: [] = [],
    action: { type: string; payload: [] }
) => {
    switch (action.type) {
        case "AD_IMGS":
            return action.payload;
        default:
            return state;
    }
};

export const latestMatchInfo = (
    state: InterfaceMatchDetails[] = initialState,
    action: { type: string; payload: InterfaceMatchDetails[] }
) => {
    switch (action.type) {
        case "LATEST_MATCHES":
            return action.payload;
        default:
            return state;
    }
};

// use this dispatch to get the details of match and link to another page
export const matchDetails = (
    state: InterfaceMatchDetails[] = initialState,
    action: { type: string; payload: InterfaceMatchDetails }
) => {
    switch (action.type) {
        case "MATCH_DETAILS":
            return action.payload;
        default:
            return state;
    }
};
