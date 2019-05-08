import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.min.css";
import "./App.css";
import Navigation from "./Components/Navigation/Navigation";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import User from "./Components/Users/User";
import Login from "./Components/Login/Login";
import "jquery";
import Dashboard from "./Components/Dashboard/Dashboard";
import Register from "./Components/Register/Register";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuth: false
    };
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Navigation />

          <Route path="/" exact component={Dashboard} />
          <Route path="/login" strict component={Login} />
          <Route path="/register" component={Register} />
        </div>
      </Router>
    );
  }
}

export default App;
