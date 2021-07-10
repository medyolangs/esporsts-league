// combining multiple reducers file into one
import { combineReducers } from "redux";
import {
    streamThumbnail,
    adsImgs,
    matchDetails,
    latestMatchInfo,
} from "./actionReducer";

const reducers = combineReducers({
    streamThumbnail,
    adsImgs,
    matchDetails,
    latestMatchInfo,
});

export default reducers;
