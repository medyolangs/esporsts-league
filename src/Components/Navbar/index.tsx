import { MDBIcon } from "mdbreact";
import React, { useState } from "react";

import SearchInputModal from "./Modal/index";

import { Link } from "react-router-dom";

import "./style.css";
import LoginForm from "../LoginForm/Login";

const TopBar: React.FC = () => {
    const [showSearchInput, setShowSearchInput] = useState<boolean>(false);
    const [loginOpenForm, setShowLoginForm] = useState<boolean>(false);

    const [uPath, setUPath] = useState<string>("");
    const [active, setActive] = useState<{
        class: string;
        displayNone: string;
    }>({
        class: "",
        displayNone: "",
    });

    const [watchWindowWidth, setWindowWidth] = useState<number>(
        window.innerWidth
    );

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
        if (watchWindowWidth >= 720) {
            setActive({ class: "", displayNone: "" });
        }
        function handleResize() {
            setWindowWidth(window.innerWidth);
        }
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [uPath, watchWindowWidth]);

    const handleSearchInputDisplay = (
        e: React.MouseEvent<HTMLDivElement>
    ): void => {
        e.stopPropagation();
        setShowSearchInput(!showSearchInput);
    };

    const handleShowMobileNav = (
        e: React.SyntheticEvent<HTMLButtonElement, Event>
    ): void => {
        setActive({ class: "mob-active", displayNone: "display-none" });
        document.body.classList.add("stop-scrolling");
    };

    const closingWithXIcon = (e: React.MouseEvent<HTMLDivElement>): void => {
        setActive({ class: "", displayNone: "" });
        document.body.classList.remove("stop-scrolling");
    };

    const handleShowLoginForm = (
        e: React.MouseEvent<HTMLAnchorElement | HTMLDivElement>
    ) => {
        setShowLoginForm(!loginOpenForm);
        if (e.currentTarget.id === "login-form") {
            window.location.hash = "";
        }
    };

    return (
        <nav className="nav-wrapper">
            <div className="container-es">
                <div className="navbar">
                    <div className="icon">
                        {showSearchInput ? (
                            <SearchInputModal
                                handleFunction={handleSearchInputDisplay}
                            />
                        ) : (
                            <div
                                className="search-icon"
                                onClick={handleSearchInputDisplay}
                            >
                                <MDBIcon icon="search" />
                            </div>
                        )}
                        <div
                            className={"mobile-menu-bar " + active.displayNone}
                        >
                            <MDBIcon
                                icon="align-justify"
                                onClick={handleShowMobileNav}
                            />
                        </div>
                    </div>
                    <a className="navbar-img" href="/">
                        <img src="../images/logo.png" alt="" />
                    </a>
                    <div className={"navbar-nav " + active.class}>
                        <div className="border-style"></div>
                        <div onClick={closingWithXIcon}>
                            <MDBIcon
                                icon="times"
                                className={"close-mob " + active.class}
                            />
                        </div>
                        <ul className={"nav " + active.class}>
                            <li
                                className={uPath !== "/" ? "" : "active-nav"}
                                onClick={() =>
                                    setUPath(window.location.pathname)
                                }
                            >
                                <Link to="/">home</Link>
                            </li>
                            <li
                                className={
                                    uPath === "/egames" ? "active-nav" : ""
                                }
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
