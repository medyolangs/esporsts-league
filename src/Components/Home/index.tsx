import React from "react"
import Advert from "./Advertise"
import Images from "./Latest Streams/index"
import Matches from "./Matches/index"
import Footer from "../Footer/index"

import hrefs from "../Config/config"

import "./style.css"

const MainPage: React.FC = () => {
  return (
    <>
      <div className="wrapper">
        <div className="fixed-bg">
          <Images />
          <Matches />
          <Advert />
          <Footer telNo={""} socmed={hrefs} />
        </div>
      </div>
    </>
  )
}

export default MainPage
