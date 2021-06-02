import { MDBIcon } from "mdbreact"
import React from "react"

import SearchInputModal from "./Modal/index"
import MobileNav from "./Mobile Nav/index"

import { Link } from "react-router-dom"

import "./style.css"

const TopBar: React.FC = () => {
  const [showSearchInput, setShowSearchInput] = React.useState<boolean>(false)
  const [showMobileNav, setShowMobileNav] = React.useState<boolean>(false)

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
  }

  const closingWithXIcon = (e: React.MouseEvent<HTMLDivElement>): void => {
    setShowMobileNav(false)
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
          <div className="navbar-img">
            <img src="./images/logo.png" alt="" />
          </div>
          <div className="navbar-nav">
            <div className="border-style"></div>
            <ul className="nav">
              <li className="active-nav">
                <Link to="/">home</Link>
              </li>
              <li>
                <Link to="/categories">categories</Link>
              </li>
              <li>
                <Link to="/streams">streams</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default TopBar
