import React, { useEffect, useState } from "react";
import Advert from "./Advertise";
import Images from "./Latest Streams/index";
import Matches from "./Matches/index";

import "./style.css";

const MainPage: React.FC = () => {
  // this will prevent the loading svg to render when the component of it is not rendering anymore
  const [renderImage, setRenderImage] = useState<boolean>(false);
  const [watchWidth, setWatchWidth] = useState<number>(window.innerWidth);
  useEffect(() => {
    function handleResize() {
      setWatchWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    if (watchWidth >= 920) setRenderImage(true);

    // cleanup funciton event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [watchWidth]);
  return (
    <>
      <div className="fixed-bg"></div>
      <div className="wrapper">
        {renderImage ? <Images /> : null}
        <Matches />
        <Advert />
      </div>
    </>
  );
};

export default MainPage;
