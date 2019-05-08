import React, { Component } from "react";
import "./Register.css";
class Register extends Component {
  constructor() {
    super();
    this.state = {
      type: "etudiant",
      nom: "",
      prenom: "",
      email: "",
      password: "",
      filiere: "",
      cin: "",
      cne: "",
      module: ""
    };
  }

  handleNom = e => {
    this.setState({ nom: e.target.value });
  };
  handlePrenom = e => {
    this.setState({ prenom: e.target.value });
  };
  handleEmail = e => {
    this.setState({ email: e.target.value });
  };
  handlePassword = e => {
    this.setState({ password: e.target.value });
  };
  handleFiliere = e => {
    this.setState({ filiere: e.target.value });
  };
  handleCin = e => {
    this.setState({ cin: e.target.value });
  };
  handleCne = e => {
    this.setState({ cne: e.target.value });
  };
  handleModule = e => {
    this.setState({ module: e.target.value });
  };

  handleTypeEtudiant = e => {
    if (e.target.checked) {
      this.setState({ type: "etudiant" });
    }
  };
  handleTypeProfesseur = e => {
    if (e.target.checked) {
      this.setState({ type: "professeur" });
    }
  };
  render() {
    if (this.state.type === "professeur") {
      return (
        <div>
          <div className="container register">
            <div className="row">
              <div className="col-md-3 register-left">
                <img src="img/logo_white.png" alt="" />
                <h3>Welcome</h3>
                <p>
                  If you have already have registerated you can have access to
                  your account
                </p>
                <input type="submit" name="" value="Login" />
                <br />
              </div>
              <div className="col-md-9 register-right">
                <div className="tab-content" id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <h3 className="register-heading">
                      Inscription au Platforme
                    </h3>
                    <div className="row register-form">
                      <div className="col-md-2" />
                      <div className="col-md-6">
                        <div
                          className="btn-group btn-group-justified radio"
                          data-toggle="buttons"
                        >
                          <label className="btn btn-light active">
                            <input
                              type="radio"
                              name="options"
                              id="option1"
                              autoComplete="off"
                              value="etudiant"
                              onChange={this.handleTypeEtudiant}
                              required
                            />
                            <div className="radio-box">
                              <i className="fas fa-user-graduate" />
                              <p>Etudiant </p>
                            </div>
                          </label>

                          <label className="btn btn-light active">
                            <input
                              type="radio"
                              name="options"
                              id="option3"
                              value="professeur"
                              autoComplete="off"
                              onChange={this.handleTypeProfesseur}
                              required
                            />
                            <div className="radio-box">
                              <i className="fas fa-user-tie" />
                              <p>Professeur </p>
                            </div>
                          </label>
                        </div>
                      </div>
                      {/** Professeur Inputs */}
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Nom *"
                              required
                              onChange={this.handleNom}
                            />
                          </div>
                          <div className="form-group">
                            <input
                              type="password"
                              className="form-control"
                              placeholder="Mot de passe *"
                              required
                              onChange={this.handlePassword}
                            />
                          </div>
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Module *"
                              onChange={this.handleModule}
                              required
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Prenom *"
                              onChange={this.handlePrenom}
                            />
                          </div>
                          <div className="form-group">
                            <input
                              type="email"
                              className="form-control"
                              placeholder="Email *"
                              onChange={this.handleEmail}
                            />
                          </div>
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Code Nationnal d'Identite *"
                              onChange={this.handleCin}
                            />
                          </div>

                          <input
                            type="submit"
                            className="btnRegister"
                            value="Register"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (this.state.type === "etudiant") {
      return (
        <div>
          <div className="container register">
            <div className="row">
              <div className="col-md-3 register-left">
                <img src="img/logo_white.png" alt="" />
                <h3>Welcome</h3>
                <p>
                  If you have already have registerated you can have access to
                  your account
                </p>
                <input type="submit" name="" value="Login" />
                <br />
              </div>
              <div className="col-md-9 register-right">
                <div className="tab-content" id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <h3 className="register-heading">
                      Inscription au Platforme
                    </h3>
                    <div className="row register-form">
                      <div className="col-md-2" />
                      <div className="col-md-6">
                        <div
                          className="btn-group btn-group-justified radio"
                          data-toggle="buttons"
                        >
                          <label className="btn btn-light active">
                            <input
                              type="radio"
                              name="options"
                              id="option1"
                              autoComplete="off"
                              value="etudiant"
                              onChange={this.handleTypeEtudiant}
                            />
                            <div className="radio-box">
                              <i className="fas fa-user-graduate" />
                              <p>Etudiant </p>
                            </div>
                          </label>

                          <label className="btn btn-light active">
                            <input
                              type="radio"
                              name="options"
                              id="option3"
                              value="professeur"
                              autoComplete="off"
                              onChange={this.handleTypeProfesseur}
                            />
                            <div className="radio-box">
                              <i className="fas fa-user-tie" />
                              <p>Professeur </p>
                            </div>
                          </label>
                        </div>
                      </div>
                      {/** Etudiant Inputs */}
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Nom *"
                              onChange={this.handleNom}
                            />
                          </div>
                          <div className="form-group">
                            <input
                              type="password"
                              className="form-control"
                              placeholder="Mot de passe *"
                              onChange={this.handlePassword}
                            />
                          </div>
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Filiere *"
                              onChange={this.handleFiliere}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Prenom *"
                              onChange={this.handlePrenom}
                            />
                          </div>
                          <div className="form-group">
                            <input
                              type="email"
                              className="form-control"
                              placeholder="Email *"
                              onChange={this.handleEmail}
                            />
                          </div>
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Code Nationnal Etudiant *"
                              onChange={this.handleCne}
                            />
                          </div>

                          <input
                            type="submit"
                            className="btnRegister"
                            value="Register"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Register;
