import { MDBIcon } from "mdbreact";
import React from "react";

import SearchInputModal from "./Modal/index";
import MobileNav from "./Mobile Nav/index";

import { Link } from "react-router-dom";

import "./style.css";
import LoginForm from "../LoginForm/Login";

const TopBar: React.FC = () => {
  const [showSearchInput, setShowSearchInput] = React.useState<boolean>(false);
  const [showMobileNav, setShowMobileNav] = React.useState<boolean>(false);
  const [loginOpenForm, setShowLoginForm] = React.useState<boolean>(false);

  const [uPath, setUPath] = React.useState<string>("");

  // change the title with path
  React.useEffect(() => {
    const loginPath = window.location.hash;
    if (uPath === "/egames") {
      document.title = "Esports | EGames";
    } else if (loginPath === "#login") {
      document.title = "Esporst | Login";
    } else {
      document.title = "Esporst League";
    }
  }, [uPath]);

  React.useEffect(() => {
    setUPath(window.location.pathname);
    if (window.location.hash === "#login") setShowLoginForm(true);
  }, [uPath]);

  const handleSearchInputDisplay = (
    e: React.MouseEvent<HTMLDivElement>
  ): void => {
    e.stopPropagation();
    setShowSearchInput(!showSearchInput);
  };

  const handleShowMobileNav = (
    e: React.SyntheticEvent<HTMLButtonElement, Event>
  ): void => {
    setShowMobileNav(!showMobileNav);
    document.body.classList.add("stop-scrolling");
  };

  const closingWithXIcon = (e: React.MouseEvent<HTMLDivElement>): void => {
    setShowMobileNav(false);
    document.body.classList.remove("stop-scrolling");
  };

  const handleShowLoginForm = (
    e: React.MouseEvent<HTMLAnchorElement | HTMLDivElement>
  ) => {
    setShowLoginForm(!loginOpenForm);
    console.log(window.location);
    if (e.currentTarget.id === "login-form") {
      console.log("login-form");
      window.location.hash = "";
    }
  };

  return (
    <nav className="nav-wrapper">
      <div className="container-es">
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
          <a className="navbar-img" href="/">
            <img src="../images/logo.png" alt="" />
          </a>
          <div className="navbar-nav">
            <div className="border-style"></div>
            <ul className="nav">
              <li
                className={uPath !== "/" ? "" : "active-nav"}
                onClick={() => setUPath(window.location.pathname)}
              >
                <a href="/">home</a>
              </li>
              <li
                className={uPath === "/egames" ? "active-nav" : ""}
                onClick={() => {
                  setUPath(window.location.pathname);
                }}
              >
                <Link to="/egames">EGames</Link>
              </li>
              <div className="login">
                <a
                  id="login-nav"
                  href="#login"
                  className="login-a"
                  onClick={handleShowLoginForm}
                >
                  login
                </a>
              </div>
              {loginOpenForm ? (
                <LoginForm handleFn={handleShowLoginForm} />
              ) : null}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopBar;
