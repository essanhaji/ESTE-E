import React, { Component } from "react";
import "./Dashboard.css";
import $ from "jquery";
import "font-awesome/css/font-awesome.min.css";
import Footer from "./../Footer/Footer";
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    //jquery code
    $(function() {
      $("#header").height($(window).height());

      $(window).resize(function() {
        $("#header").height($(window).height());
      });
    });
    //End jquery
  }
  render() {
    return (
      <div>
        <div id="header">
          <div className="headetText">
            <p>Welcome To EST Learning</p>
          </div>
          <div className="secondText">
            <p>If you are student at ESTE you can create an account for free</p>
            <p className="btn-outline">Get Started</p>
          </div>
        </div>

        <div className="container services mt-3 mb-5 " id="services">
          <div className="row text-center">
            <div className="col-12">
              <h1 className="mt-3">Services</h1>
            </div>
            <div className="col-12">
              <p>EST learning created for many services :</p>
            </div>
            <div className="line" />
          </div>

          <div className="row text-center">
            <div className="col-sm-6 col-md-4">
              <i className="fas fa-file-pdf" />
              <h3>Courses</h3>
              <p>
                Teachers can put their courses, and students have access to
                their courses
              </p>
            </div>

            <div className="col-sm-6 col-md-4">
              <i className="fa fa-question-circle" />
              <h3>Exercices</h3>
              <p>Teachers and Studenets can create exercies</p>
            </div>

            <div className="col-sm-6 col-md-4">
              <i className="fa fa-comments" />
              <h3>Discutions</h3>
              <p>
                Under courses or Exercices, Anyone can create his questions
                (comments)
              </p>
            </div>
          </div>
        </div>

        <div className="about" id="about">
          <div className="row jumbotron">
            <div className="container">
              <div className="col-md-12">
                <h1 className="mt-3 text-center">About Us</h1>
              </div>

              <div className="col-md-12 text-center">
                <p className="mb-5">What you need to know about us :</p>
              </div>
              <div className="row">
                <div className="col-md-6">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Impedit, nisi, tempora culpa aut velit eveniet a dicta quod
                  quos ab repellat fugiat, et voluptates nemo voluptatem in
                  corrupti modi. Maxime. Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit. Impedit, nisi, tempora culpa aut velit
                  eveniet a dicta quod quos ab repellat fugiat, et voluptates
                  nemo voluptatem in corrupti modi. Maxime. Lorem ipsum dolor
                  sit amet, consectetur adipisicing elit. Impedit, nisi, tempora
                  culpa aut velit eveniet a dicta quod quos ab repellat fugiat,
                  et voluptates nemo voluptatem in corrupti modi. Maxime.
                </div>
                <div className="col-md-6">
                  <img
                    className="image-fluid"
                    src={require("./este.jpg")}
                    alt="Cannot load the img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="connect container">
          <div className="row text-center">
            <div className="col-12">
              <h1 className="mt-3">Connect Us</h1>
            </div>
          </div>
          <div className="social">
            <a href="#">
              <i className="fa fa-twitter" />
            </a>
            <a href="#">
              <i className="fa fa-facebook-square" />
            </a>
            <a href="#">
              <i className="fa fa-google-plus-g" />
            </a>
            <a href="#">
              <i className="fa fa-instagram" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
