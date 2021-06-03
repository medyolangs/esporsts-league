import React from "react"

import "./style.css"

interface Props {
  image?: string
}

const Images: React.FC<Props> = ({ image }) => {
  const [loading, setLoading] = React.useState<boolean>(true)

  const innerSliderRef = React.useRef<HTMLDivElement>(null)
  const slider = React.useRef<HTMLDivElement>(null)

  let [startx, setStartX] = React.useState<number>(0)
  let [pressed, setPressed] = React.useState<boolean>(false)
  let [x, setX] = React.useState<number>(0)

  const sliderF1 = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.type === "mousedown") {
      setPressed(true)
      setStartX(
        e.nativeEvent.offsetX - (innerSliderRef.current?.offsetLeft || 0)
      )
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
    // let inner = innerSliderRef.current?.getBoundingClientRect()
    // let outer = slider.current?.getBoundingClientRect()
    // if (parseInt(innerSliderRef.current?.style.left) > 0) {
    //   innerSliderRef.current.style.left = "0px"
    // } else if (inner?.right < outer?.right) {
    //   innerSliderRef.current?.style.left = `-${inner?.width - outer?.width}px`
    // }
  }

  React.useEffect(() => {
    if (window.innerWidth <= 920) {
      setLoading(false)
    } else {
      setTimeout(() => {
        setLoading(false)
      }, 2000)
    }
  }, [image])

  window.addEventListener("mouseup", () => {
    setPressed(false)
  })

  return (
    <>
      {loading ? (
        <svg
          style={{
            margin: "auto",
            background: "rgbl255, 255, 255",
            display: "block",
            shapeRendering: "auto",
            animationPlayState: "running",
            animationDelay: " 0s",
          }}
          width="200px"
          height="200px"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid"
        >
          <rect
            x="17.5"
            y="30"
            width="15"
            height="40"
            fill="#fff"
            style={{ animationPlayState: "running", animationDelay: "0s" }}
          >
            <animate
              attributeName="y"
              repeatCount="indefinite"
              dur="1s"
              calcMode="spline"
              keyTimes="0;0.5;1"
              values="18;30;30"
              keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
              begin="-0.2s"
              style={{ animationPlayState: "running", animationDelay: "0s" }}
            ></animate>
            <animate
              attributeName="height"
              repeatCount="indefinite"
              dur="1s"
              calcMode="spline"
              keyTimes="0;0.5;1"
              values="64;40;40"
              keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
              begin="-0.2s"
              style={{ animationPlayState: "running", animationDelay: "0s" }}
            ></animate>
          </rect>
          <rect
            x="42.5"
            y="30"
            width="15"
            height="40"
            fill="#fff"
            style={{ animationPlayState: "running", animationDelay: "0s" }}
          >
            <animate
              attributeName="y"
              repeatCount="indefinite"
              dur="1s"
              calcMode="spline"
              keyTimes="0;0.5;1"
              values="20.999999999999996;30;30"
              keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
              begin="-0.1s"
              style={{ animationPlayState: "running", animationDelay: "0s" }}
            ></animate>
            <animate
              attributeName="height"
              repeatCount="indefinite"
              dur="1s"
              calcMode="spline"
              keyTimes="0;0.5;1"
              values="58.00000000000001;40;40"
              keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
              begin="-0.1s"
              style={{ animationPlayState: "running", animationDelay: "0s" }}
            ></animate>
          </rect>
          <rect
            x="67.5"
            y="30"
            width="15"
            height="40"
            fill="#fff"
            style={{ animationPlayState: "running", animationDelay: "0s" }}
          >
            <animate
              attributeName="y"
              repeatCount="indefinite"
              dur="1s"
              calcMode="spline"
              keyTimes="0;0.5;1"
              values="20.999999999999996;30;30"
              keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
              style={{ animationPlayState: "running", animationDelay: "0s" }}
            ></animate>
            <animate
              attributeName="height"
              repeatCount="indefinite"
              dur="1s"
              calcMode="spline"
              keyTimes="0;0.5;1"
              values="58.00000000000001;40;40"
              keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
              style={{ animationPlayState: "running", animationDelay: "0s" }}
            ></animate>
          </rect>
        </svg>
      ) : (
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
      )}
    </>
  )
}

export default Images
