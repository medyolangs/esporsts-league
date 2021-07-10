import React from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { actionCreators } from "../../../state";

import "./style.css";

const Advert: React.FC = () => {
    const adsImgs = useSelector((state: RootStateOrAny) => state.adsImgs);
    const [storageAds, setStorageAds] = React.useState<string[]>();

    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(actionCreators.advertisement());

        if (adsImgs && !localStorage.getItem("ads")) {
            localStorage.setItem("ads", adsImgs.toString());
        }
        setStorageAds(localStorage.getItem("ads")?.split(","));
    }, [dispatch, adsImgs]);

    return (
        <div className="wdth">
            <div className="container">
                <div className="adverts">
                    <div className="stream-advert">
                        <div className="stream-image">
                            <img
                                src={storageAds ? storageAds[0] : adsImgs[0]}
                                alt="watch streams"
                            />
                        </div>
                        <div className="stream-txt">
                            <h1>Watch Streams</h1>
                            <p>you can watch your favorite gamer streams</p>
                            <p>click here to sign in and watch</p>
                            <button className="ad-btn">watch</button>
                        </div>
                    </div>
                    <div className="advert-events">
                        <div className="event-txt">
                            <h1>Live Tournament Updates</h1>
                            <p>Join and support your favorite team </p>
                            <button className="ad-btn">Join</button>
                        </div>
                        <div className="event-image">
                            <img
                                src={storageAds ? storageAds[1] : adsImgs[1]}
                                alt="live tournament"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Advert;
