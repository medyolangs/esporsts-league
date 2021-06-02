import React from "react"
import Advert from "./Advertise"
import Images from "./Latest Streams/index"
import Matches from "./Matches/index"
import Footer from "../Footer/index"

import "./style.css"

const MainPage: React.FC = () => {
  return (
    // the images here will be based on our server
    <>
      <div className="wrapper">
        <div className="fixed-bg">
          <Images />
          <Matches />
          <Advert />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default MainPage
