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
    } else if (window.location.pathname === "/egames") {
      setStyleMobNav({
        one: "",
        two: "mob-active",
        three: "",
        four: "",
      })
    } else if (window.location.pathname === "/estreams") {
      setStyleMobNav({
        one: "",
        two: "",
        three: "mob-active",
        four: "",
      })
    }
  }, [])

  return ReactDOM.createPortal(
    <div className="mob-center">
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
          <a href="/egames" className={styleMobNav.two}>
            EGames
          </a>
        </li>
        <li>
          <a href="estreams" className={styleMobNav.three}>
            EStreams
          </a>
        </li>
      </ul>
    </div>,
    document.getElementById("mobile") as HTMLDivElement
  )
}

export default MobileNav
