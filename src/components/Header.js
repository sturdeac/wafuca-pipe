import React, { Component } from "react";
import { Link } from "react-router-dom";
import { logo } from "../img/index.js";

class Header extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
          <div className="container">
            <Link className="navbar-brand" to="/">
              <img src={logo} className="img-fluid" alt="" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/register">
                    Pre-Order
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <header className="masthead text-left text-white">
          <div className="masthead-content h-100">
            <div className="container vertical-center">
              <div className="text-bg">
                <h1>
                  <a href="#hd2" className="fancy-span mt-5 text-white">
                    MK4 HD2 UPGRADE →
                  </a>
                </h1>

                <h2>
                  <Link to="/register" className="fancy-span mt-5 text-white">
                    PRE-ORDER →
                  </Link>
                </h2>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default Header;
