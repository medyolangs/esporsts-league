import { MDBIcon } from "mdbreact";
import React from "react";
import ReactDOM from "react-dom";

import "./style.css";
import SVGLogin from "./login.svg";

interface Props {
    handleFn: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const LoginForm: React.FC<Props> = ({ handleFn }) => {
    return ReactDOM.createPortal(
        <div className="login-form-wrapper" onClick={handleFn} id="login-form">
            <div
                className="wrapper"
                onClick={(e: React.MouseEvent<HTMLDivElement>) =>
                    e.stopPropagation()
                }
            >
                <div className="form-side">
                    <img src={SVGLogin} alt="login svg" />
                    <p>
                        Login to experience the Esports League Streams of your
                        favorite streamers
                    </p>
                </div>
                <form action="" className="form-login">
                    <div>
                        <MDBIcon icon="sign-in-alt" className="icon" />
                        <div>Login</div>
                    </div>
                    <input
                        type="text"
                        name="username"
                        id="username"
                        placeholder="username"
                    />
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="password"
                    />
                    <button>login</button>
                    <span>Haven't sign up yet?</span>
                    <span>sign up</span>
                </form>
            </div>
        </div>,
        document.getElementById("login-form") as HTMLDivElement
    );
};

export default LoginForm;
