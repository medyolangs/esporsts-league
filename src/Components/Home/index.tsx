import React from "react";
import Advert from "./Advertise";
import Images from "./Latest Streams/index";
import Matches from "./Matches/index";

import "./style.css";

const MainPage: React.FC = () => {
  return (
    <>
      <div className="fixed-bg"></div>
      <div className="wrapper">
        <Images />
        <Matches />
        <Advert />
      </div>
    </>
  );
};

export default MainPage;
