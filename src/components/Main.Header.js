import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { PhoneDrawer } from '../Drawer/PhoneDrawer';
import { GrNext } from 'react-icons/gr'

import { BsCloudArrowDown } from 'react-icons/bs'

const MainHeader = () => {

  const [modalIsOpen, setIsOpen] = useState(false);

  const openDrawer = () => {
    setIsOpen(true);
  };

  return (
    <>
      <PhoneDrawer modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />
      <header className="foi-header landing-header">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light foi-navbar">
            <NavLink className="navbar-brand" to="index.html">
              <img
                src="/images/MainLogo2.png"
                alt="FOI"
                style={{ height: "32px" }}
              />
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
                    About Us
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="#"
                    onClick={() => {
                      window.scrollTo(0, 650);
                    }}
                  >
                    Services
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="#"
                    onClick={() => {
                      window.scrollTo(0, 2190);
                    }}>
                    Technologies
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link"
                    to="#"
                    onClick={() => {
                      window.scrollTo(0, 2050);
                    }}
                  >
                    Protfolio
                  </NavLink>
                </li>


              </ul>
              <ul className="navbar-nav mt-2 mt-lg-0">
                <li className="nav-item mr-2 mb-3 mb-lg-0">
                  <NavLink className="btn btn-secondary" to="#"
                    onClick={() => {
                      window.scrollTo(0, 3600);
                    }}
                  >
                    Get Quote
                  </NavLink>
                </li>

              </ul>
            </div>
          </nav>
          <div className="header-content">
            <div className="row">
              <div className="col-md-6 mt-md-1">
                <h1>  Play Satta Online</h1>
                <span className="text-dark city-name">
                  Gali
                </span>
                <span className="text-dark city-name">
                  | Desawer |
                </span>
                <span className="text-dark city-name">
                  Gaziabaad
                </span>
                <br />
                <span className="text-dark city-name">
                  Super King |
                </span>
                <span className="text-dark city-name">
                  Kota Express
                </span>
                <p>
                  <p className='mt-2'> Spiderking App is the most popular Satta Matka Website to play online Matka that provides the fastest Satta Matka Result and Satta Matka Jodi & Panel Numbers. Our website is famous for quick Spiderking App Matka Result or Matka Tips.
                  </p>

                </p>
                <NavLink to="/contact">
                  <button className="contact-us-btn ">
                    <BsCloudArrowDown color="white" size={25} />
                    {"  "}  <span className="contact-">  Download App </span>{" "}

                  </button>
                </NavLink>
              </div>
              <div className="col-md-6" style={{ textAlign: "center" }}>
                <img
                  style={{ height: "500px", borderRadius: "20px" }}
                  src={"/betimg/AppLogin.png"}
                  alt="app"
                  width=""
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default MainHeader;