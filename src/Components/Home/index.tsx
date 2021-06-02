import React from "react"
import Advert from "./Advertise"
import Images from "./Latest Streams/index"
import Matches from "./Matches/index"

import "./style.css"

// const url = "/slides"

const MainPage: React.FC = () => {
  // const [latestEventsImages, setLatestEventsImages] = React.useState<[]>()

  // // fetch the images from the server
  // React.useEffect(() => {
  //   fetch(url)
  //     .then((data) => data.json())
  //     .then((images) => setLatestEventsImages(images))
  // }, [])

  // console.log(latestEventsImages)

  return (
    // the images here will be based on our server
    <>
      <div className="wrapper">
        <div className="fixed-bg">
          {/* {latestEventsImages?.map(({img, id}) => {
          return (
          <Images key={id} image={img} />
        )})}*/}
          <Images />
          <Matches />
          <Advert />
        </div>
      </div>
    </>
  )
}

export default MainPage
