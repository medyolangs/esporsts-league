import React, { useState, useRef } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { actionCreators } from "../../../state";
import { LoadingSVG } from "./Loading SVG";
// import { RootStateOrAny, useSelector } from "react-redux";

import "./style.css";

interface Props {
    image?: string;
}

const Images: React.FC<Props> = ({ image }) => {
    const [loading, setLoading] = useState<boolean>(true);

    const innerSliderRef = useRef<HTMLDivElement>(null);
    const slider = useRef<HTMLDivElement>(null);

    let [startx, setStartX] = useState<number>(0);
    let [pressed, setPressed] = useState<boolean>(false);
    let [x, setX] = useState<number>(0);

    const [watchWindowWidth, setWindowWidth] = useState<number>(
        window.innerWidth
    );

    const sliderF1 = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.type === "mousedown") {
            setPressed(true);
            setStartX(
                e.nativeEvent.offsetX -
                    (innerSliderRef.current?.offsetLeft || 0)
            );
            e.currentTarget.setAttribute("style", "cursor: grabbing");
        }
        if (e.type === "mouseenter") {
            e.currentTarget.setAttribute("style", "cursor: grab");
            e.currentTarget.setAttribute("style", "-webkit-cursor: grab");
        }
        if (e.type === "mouseup") {
            e.currentTarget.setAttribute("style", "cursor: grab");
            e.currentTarget.setAttribute("style", "-webkit-cursor: grab");
        }
        if (e.type === "mousemove") {
            if (!pressed) return;
            e.preventDefault();
            setX(e.nativeEvent.offsetX);
            innerSliderRef.current?.setAttribute(
                "style",
                `left: ${x - startx}px`
            );
        }
        checkBoundary();
    };

    function checkBoundary() {
        let inner = innerSliderRef.current?.getBoundingClientRect();
        let outer = slider.current?.getBoundingClientRect();
        if (parseInt(innerSliderRef.current?.style.left!) > 0) {
            innerSliderRef.current!.style.left = "0px";
        } else if (inner?.right! < outer?.right!) {
            innerSliderRef.current!.style.left = `-${
                inner?.width! - outer?.width!
            }px`;
        }
    }

    // get thumbnails from redux
    const thumbnails = useSelector(
        (state: RootStateOrAny) => state.streamThumbnail
    );

    React.useEffect(() => {
        function handleResize() {
            setWindowWidth(window.innerWidth);
        }
        window.addEventListener("resize", handleResize);

        if (watchWindowWidth <= 920) {
            setLoading(false);
        } else if (thumbnails) {
            setLoading(false);
        }
        // cleanup event listener
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [image, watchWindowWidth, thumbnails]);

    window.addEventListener("mouseup", () => {
        setPressed(false);
    });

    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(actionCreators.latestStreams());
        if (thumbnails && !localStorage.getItem("latest-streams")) {
            localStorage.setItem("latest-streams", JSON.stringify(thumbnails));
        }
    }, [dispatch, thumbnails]);

    const thumbFromLocalStorage = JSON.parse(
        localStorage.getItem("latest-streams")!
    );

    return (
        <>
            {loading ? (
                <LoadingSVG />
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
                        {thumbFromLocalStorage
                            ? thumbFromLocalStorage?.map(
                                  (thumbnail: string, idx: number) => {
                                      return (
                                          <img
                                              src={thumbnail}
                                              alt="latest events"
                                              key={idx}
                                              className="slider-img"
                                              onClick={() =>
                                                  console.log("Clicked")
                                              }
                                          />
                                      );
                                  }
                              )
                            : thumbnails.map(
                                  (thumbnail: string, idx: number) => {
                                      return (
                                          <img
                                              src={thumbnail}
                                              alt="latest events"
                                              key={idx}
                                              className="slider-img"
                                              onClick={() =>
                                                  console.log("Clicked")
                                              }
                                          />
                                      );
                                  }
                              )}
                    </div>
                </div>
            )}
        </>
    );
};

export default Images;
