import React, { Component } from "react";
// import "./Footer.css";
class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <footer className="page-footer font-small stylish-color-dark pt-4">
          <div className="container text-center text-md-left">
            <div className="row">
              <div className="col-md-4 mx-auto">
                <h5 className="font-weight-bold text-uppercase mt-3 mb-4">
                  Footer Content
                </h5>
                <p>
                  Lorem ipsum dolor sit amet, consectedicta quod quos ab
                  repellat fugiat, et voluptates nemo voluptatem in corrupti
                  modi. Maxime..
                </p>

                <div className="col-md-2 mx-auto">
                  <h5 className="font-weight-bold text-uppercase mt-3 mb-4">
                    Links
                  </h5>

                  <ul className="list-unstyled">
                    <li>
                      <a href="#!">Link 1</a>
                    </li>
                    <li>
                      <a href="#!">Link 2</a>
                    </li>
                    <li>
                      <a href="#!">Link 3</a>
                    </li>
                    <li>
                      <a href="#!">Link 4</a>
                    </li>
                  </ul>
                </div>
                <div className="clearfix w-100 d-md-none" />
                <div className="col-md-2 mx-auto">
                  <h5 className="font-weight-bold text-uppercase mt-3 mb-4">
                    Links
                  </h5>

                  <ul className="list-unstyled">
                    <li>
                      <a href="#!">Link 1</a>
                    </li>
                    <li>
                      <a href="#!">Link 2</a>
                    </li>
                    <li>
                      <a href="#!">Link 3</a>
                    </li>
                    <li>
                      <a href="#!">Link 4</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <ul className="list-unstyled list-inline text-center py-2">
              <li className="list-inline-item">
                <h5 className="mb-1">Register Now</h5>
              </li>
              <li className="list-inline-item">
                <a href="#!" className="btn btn-danger btn-rounded">
                  Sign up!
                </a>
              </li>
            </ul>

            <div className="footer-copyright text-center py-3">
              © 2018 Copyright:
              <a href="#"> ESTLearning.com</a>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
