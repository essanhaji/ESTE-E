import React, { Component } from "react";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import "./Navigation.css";
class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  toHome = () => {
    this.props.history.push();
  };
  toRegister = () => {
    this.props.history.push();
  };
  render() {
    return (
      // <div>
      //   <ul>
      //     <li>
      //       <Link to="/">Home</Link>
      //     </li>
      //     {content}
      //     <li>
      //       <Link to="/services">Services</Link>
      //     </li>
      //   </ul>
      // </div>

      <nav className="navbar navbar-expand-md navbar-light bg-light sticky-top">
        <div className="container">
          <a className="navbar-brand " href="/#">
            <img src="images/logo.png" alt="cannot display" width="200" />{" "}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#toggler"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="toggler">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item  mr-2">
                <Link className="nav-link" to="/">
                  Home
                </Link>
                {""}
              </li>
              <li className="nav-item  mr-2">
                <a href="#services" className="nav-link">
                  {" "}
                  Services
                </a>
              </li>
              <li className="nav-item mr-2">
                <a href="#about" className="nav-link">
                  {" "}
                  A propos
                </a>
              </li>
              <li className="nav-item mr-2">
                <Link to="/login" className="btn btn-default btn-outline mt-1">
                  Connexion
                </Link>
              </li>
              <li className="nav-item ">
                <Link
                  className="btn btn-default btn-outline mt-1"
                  to="/register"
                >
                  Inscription
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
