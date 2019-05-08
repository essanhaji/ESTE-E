import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './App.css';
import { Link, browserHistory } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from "./Components/Navigation/Navigation";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIgloo } from '@fortawesome/free-solid-svg-icons'
import AdminEditAccount from "./Components/AdminEditAccount/AdminEditAccount";
import AdminFilierModul from "./Components/AdminFiliereModule/AdminFilierModul";
import AdminHome from "./Components/AdminHome/AdminHome";
import AdminProf from "./Components/AdminProf/AdminProf";
import AdminReset from "./Components/AdminReset/AdminReset";
import Footer from './Components/footer/Footer';
import Login from './Components/Login/Login';
import AuthHelperMethods from './AuthHelperMethods/AuthHelperMethods';
import axios from 'axios';
import decode from "jwt-decode";

library.add(faIgloo)

class App extends Component {

  constructor() {
    super();
    this.state = {
      dir: "Dashboard"
    }
  }
  isTokenExpired = token => {
    try {
      const decoded = decode(token);
      if (decoded.exp < Date.now() / 1000) {
        // Checking if token is expired.
        return true;
      } else return false;
    } catch (err) {
      console.log("expired check failed! Line 42: AuthService.js");
      return false;
    }
  };
  

  handleRoute = (e) => {
    this.setState({ dir: e.target.value });
  }
/*
  componentDidMount = () => {
   
    var heaserRequest = localStorage.getItem('jwtToken');
    //
    if(localStorage.getItem('jwtToken')){
      const decoded = decode(heaserRequest);
      console.log("token decode " + decoded.user._id);
    }
   
    if (this.isTokenExpired(heaserRequest)) {
      this.props.history.push("/login");
    }

    axios.get('http://localhost:8080/home', { headers: { "Authorization": `Bearer ${heaserRequest}` } })
      .then(res => {
        this.setState({ nbrEt: res.data }); 
        this.props.history.push("/");
      })
      .catch((error) => {
        if (error.response.status === 403) {
          this.props.history.push("/login");
        }
      });
  }*/
  logout = () => {
    localStorage.clear();
    //localStorage.removeItem('jwtToken');
    window.location.reload();
    this.props.history.push("/login");
  }

  render() {
     return(
        <Router>
          <div className="bdAdmin">
            <header>
              <Navigation directory={this.state.dir} />
            </header>
            <div id="Main">
              <div className="container">
                <div className="row">
                  <div className="col-md-3">
                    <div className="list-group">
                      <Link to={'/'} className="list-group-item  main-color-bg"
                        onClick={() => { this.setState({ dir: "Dashboard" }); }}>
                        <i className="fas fa-user"></i> Dashboard
                    </Link>
                      <Link to={'/AdminProf'} className="list-group-item   main-color-bg"
                        onClick={() => { this.setState({ dir: "Professeurs" }); }}>

                        <i className="fas fa-home"></i>Professeurs
                    </Link>
                      <Link to={'/AdminFilierModul'} className="list-group-item  main-color-bg"
                        onClick={() => { this.setState({ dir: "Filiere/Module" }); }}>
                        <i className="fas fa-bars"></i> Filiere/Module
                    </Link>
                      <Link to={'/AdminEditAccount'} className="list-group-item  main-color-bg"
                        onClick={() => { this.setState({ dir: "Editer Profile" }); }}>
                        <i className="fas fa-pen"></i> Editer Profile
                    </Link>
                      <Link to={'/AdminReset'} className="list-group-item  main-color-bg"
                        onClick={() => { this.setState({ dir: "Réunitialisation" }); }}>
                        <i className="fas fa-power-off"></i>
                        Réunitialisation
                    </Link>
                    </div>
                  </div>
                  <Route path='/AdminEditAccount' component={AdminEditAccount} />
                  <Route path='/AdminFIlierMOdul' component={AdminFilierModul} />
                  <Route path='/' exact component={AdminHome} />
                  <Route path='/AdminProf' component={AdminProf} />
                  <Route path='/AdminReset' component={AdminReset} />
                  {/* <Route path='/login' component={Login} /> */}
                </div>
              </div>
            </div>
            <Footer />
          </div>
        </Router>
     );  
   }
}

export default App;
