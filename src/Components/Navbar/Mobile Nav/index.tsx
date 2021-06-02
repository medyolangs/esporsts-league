import { MDBIcon } from "mdbreact"
import React from "react"
import ReactDOM from "react-dom"

import "./style.css"

interface Props {
  close: (e: React.MouseEvent<HTMLDivElement>) => void
}

interface MobNavStyle {
  one: string
  two: string
  three: string
  four: string
}

const MobileNav: React.FC<Props> = ({ close }) => {
  const [styleMobNav, setStyleMobNav] = React.useState<MobNavStyle>({
    one: "",
    two: "",
    three: "",
    four: "",
  })

  React.useEffect(() => {
    if (window.location.pathname === "/") {
      setStyleMobNav({
        one: "mob-active",
        two: "",
        three: "",
        four: "",
      })
    } else if (window.location.pathname === "/categories") {
      setStyleMobNav({
        one: "",
        two: "mob-active",
        three: "",
        four: "",
      })
    } else if (window.location.pathname === "/streams") {
      setStyleMobNav({
        one: "",
        two: "",
        three: "mob-active",
        four: "",
      })
    } else if (window.location.pathname === "/about") {
      setStyleMobNav({
        one: "",
        two: "",
        three: "",
        four: "mob-active",
      })
    }
  }, [])

  return ReactDOM.createPortal(
    <>
      <ul className="mobile-nav">
        <div className="close-mobile-btn" onClick={close}>
          <MDBIcon icon="times" />
        </div>
        <li>
          <a href="/" className={styleMobNav.one}>
            Home
          </a>
        </li>
        <li>
          <a href="categories" className={styleMobNav.two}>
            Categories
          </a>
        </li>
        <li>
          <a href="streams" className={styleMobNav.three}>
            Streams
          </a>
        </li>
        <li>
          <a href="about" className={styleMobNav.four}>
            About
          </a>
        </li>
      </ul>
    </>,
    document.getElementById("mobile") as HTMLDivElement
  )
}

export default MobileNav
