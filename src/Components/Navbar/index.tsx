import { MDBIcon } from "mdbreact"
import React from "react"

import SearchInputModal from "./Modal/index"
import MobileNav from "./Mobile Nav/index"

import { Link } from "react-router-dom"

import "./style.css"

const TopBar: React.FC = () => {
  const [showSearchInput, setShowSearchInput] = React.useState<boolean>(false)
  const [showMobileNav, setShowMobileNav] = React.useState<boolean>(false)

  const [uPath, setUPath] = React.useState<string>()

  React.useEffect(() => {
    setUPath(window.location.pathname)
  }, [uPath])

  const handleSearchInputDisplay = (
    e: React.MouseEvent<HTMLDivElement>
  ): void => {
    e.stopPropagation()
    setShowSearchInput(!showSearchInput)
  }

  const handleShowMobileNav = (
    e: React.SyntheticEvent<HTMLButtonElement, Event>
  ): void => {
    setShowMobileNav(!showMobileNav)
    document.body.classList.add("stop-scrolling")
  }

  const closingWithXIcon = (e: React.MouseEvent<HTMLDivElement>): void => {
    setShowMobileNav(false)
    document.body.classList.remove("stop-scrolling")
  }

  return (
    <nav className="wrapper">
      <div className="container">
        <div className="navbar">
          <div className="icon">
            {showSearchInput ? (
              <SearchInputModal handleFunction={handleSearchInputDisplay} />
            ) : (
              <div className="search-icon" onClick={handleSearchInputDisplay}>
                <MDBIcon icon="search" />
              </div>
            )}
            <div className="mobile-menu-bar">
              {showMobileNav ? (
                <MobileNav close={closingWithXIcon} />
              ) : (
                <MDBIcon icon="align-justify" onClick={handleShowMobileNav} />
              )}
            </div>
          </div>
          <Link className="navbar-img" to="/">
            <img src="./images/logo.png" alt="" />
          </Link>
          <div className="navbar-nav">
            <div className="border-style"></div>
            <ul className="nav">
              <li
                className={uPath === "/" ? "active-nav" : ""}
                onClick={() => setUPath(window.location.pathname)}
              >
                <Link to="/">home</Link>
              </li>
              <li
                className={uPath === "/egames" ? "active-nav" : ""}
                onClick={() => setUPath(window.location.pathname)}
              >
                <Link to="/egames">EGames</Link>
              </li>
              <li
                className={uPath === "/estreams" ? "active-nav" : ""}
                onClick={() => setUPath(window.location.pathname)}
              >
                <Link to="/estreams">EStreams</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default TopBar
