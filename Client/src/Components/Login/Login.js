import React, { Component } from "react";
import "./Login.css";
import img from "./img-01.png";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  render() {
    return (
      <div className="container mt-5">
        <div className="cadre row">
          <div className="img col-md-6">
            <img src={img} />
          </div>
          <div className="inputs col-md-6">
            <span className="loginTitle">
              <b>Member Login</b>
            </span>
            <div className="input">
              <input type="text" placeholder="Email" />
              <span className="icon-input">
                <i className="fa fa-envelope" aria-hidden="true" />
              </span>
            </div>
            <div className="input">
              <input type="password" placeholder="Password" />
              <span className="icon-input">
                <i className="fa fa-lock" aria-hidden="true" />
              </span>
            </div>
            <div className="login-form-btn">
              <button className="login-btn">Login</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
