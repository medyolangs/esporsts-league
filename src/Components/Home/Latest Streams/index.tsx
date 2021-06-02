import React from "react"

import "./style.css"

interface Props {
  image?: string
}

const Images: React.FC<Props> = () => {
  const innerSliderRef = React.useRef<HTMLDivElement>(null)
  const slider = React.useRef<HTMLDivElement>(null)

  let [startx, setStartX] = React.useState<number>(0)
  let [pressed, setPressed] = React.useState<boolean>(false)
  let [x, setX] = React.useState<number>(0)

  const sliderF1 = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.type === "mousedown") {
      setPressed(true)
      setStartX(e.nativeEvent.offsetX - innerSliderRef.current.offsetLeft)
      e.currentTarget.setAttribute("style", "cursor: grabbing")
    }
    if (e.type === "mouseenter") {
      e.currentTarget.setAttribute("style", "cursor: grab")
    }
    if (e.type === "mouseup") {
      e.currentTarget.setAttribute("style", "cursor: grab")
    }
    if (e.type === "mousemove") {
      if (!pressed) return
      e.preventDefault()
      setX(e.nativeEvent.offsetX)
      innerSliderRef.current?.setAttribute("style", `left: ${x - startx}px`)
    }
    checkBoundary()
  }

  function checkBoundary() {
    const inner = innerSliderRef.current?.getBoundingClientRect()
    const outer = slider.current?.getBoundingClientRect()
    if (parseInt(innerSliderRef.current?.style.left) > 0) {
      console.log("if part")
      innerSliderRef.current.style.left = "0px"
    } else if (inner?.right < outer?.right) {
      console.log("else part")
      innerSliderRef.current.style.left = `-${inner?.width - outer?.width}px`
    }
  }

  window.addEventListener("mouseup", () => {
    setPressed(false)
  })

  return (
    <div
      className="slider"
      ref={slider}
      onMouseDown={sliderF1}
      onMouseEnter={sliderF1}
      onMouseUp={sliderF1}
      onMouseMove={sliderF1}
    >
      <div className="slider-inner" ref={innerSliderRef}>
        <img
          src={"./images/adverts/game-tournament.jpg"}
          alt="latest events"
          className="slider-img"
        />
        <img
          src={"./images/adverts/game-tournament.jpg"}
          alt="latest events"
          className="slider-img"
        />
        <img
          src={"./images/adverts/game-tournament.jpg"}
          alt="latest events"
          className="slider-img"
        />
        <img
          src={"./images/adverts/game-tournament.jpg"}
          alt="latest events"
          className="slider-img"
        />
        <img
          src={"./images/adverts/game-tournament.jpg"}
          alt="latest events"
          className="slider-img"
        />
      </div>
    </div>
  )
}

export default Images
