/** @format */

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { PhoneDrawer } from "../Drawer/PhoneDrawer";

const Header = () => {

    const [modalIsOpen, setIsOpen] = useState(false);

    const openDrawer = () => {
      setIsOpen(true);
    };

  return (
    <>
      <PhoneDrawer modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />
      <header className="foi-header">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light foi-navbar">
            <NavLink className="navbar-brand" to="index.html">
            <img
                src="/betimg/appLogo.png"
                alt="FOI"
                style={{ height: "60px" }}
              />
              <span style={{ fontSize: "19px", }}> 🆂🆄🅿🅴🆁 🅺🅸🅽🅶</span>
            </NavLink>
            <button className="navbar-toggler d-lg-none" type="button">
              <span className="navbar-toggler-icon" onClick={openDrawer}></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
              <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                  <NavLink className="nav-link" to="/">
                    Home <span className="sr-only">(current)</span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/about">
                    Matka Bazaar
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/services">
                    How To Play
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/technologies">
                    Testimonial
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/portfolio">
                    Old Result
                  </NavLink>
                </li>
               
                <li className="nav-item">
                  <NavLink className="nav-link" to="/contact">
                    Contact Us
                  </NavLink>
                </li>
              </ul>
              <ul className="navbar-nav mt-2 mt-lg-0">
                <li className="nav-item mr-2 mb-3 mb-lg-0">
                  <NavLink className="btn btn-secondary" to="/quote">
                    Get Quote
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
