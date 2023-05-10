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
      <header className="foi-header landing-header" style={{paddingBottom:"250px"}}>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light foi-navbar">
            <NavLink className="navbar-brand" to="index.html">
              <img
                src="/betimg/appLogo.png"
                alt="FOI"
                style={{ height: "60px" }}

              />
              <span style={{fontSize:"25px",}}> 🆂🆄🅿🅴🆁 🅺🅸🅽🅶</span>
            </NavLink> 
            <button className="navbar-toggler d-lg-none" type="button">
              <span className="navbar-toggler-icon" onClick={openDrawer}></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
              <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              </ul>

              
              <ul className="navbar-nav mt-2 mt-lg-0">
                <li className="nav-item mr-2 mb-3 mb-lg-0">
                  <NavLink className="btn btn-secondary" to="#"
                    onClick={() => {
                      window.scrollTo(0, 3600);
                    }}
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item mr-2 mb-3 mb-lg-0">
                  <NavLink className="btn btn-secondary" to="#"
                    onClick={() => {
                      window.scrollTo(0, 3600);
                    }}
                  >
                    Matka Bazar
                  </NavLink>
                </li>
                <li className="nav-item mr-2 mb-3 mb-lg-0">
                  <NavLink className="btn btn-secondary" to="#"
                    onClick={() => {
                      window.scrollTo(0, 3600);
                    }}
                  >
                    How To Play
                  </NavLink>
                </li>
                <li className="nav-item mr-2 mb-3 mb-lg-0">
                  <NavLink className="btn btn-secondary" to="#"
                    onClick={() => {
                      window.scrollTo(0, 3600);
                    }}
                  >
                    Testimonial
                  </NavLink>
                </li>
                <li className="nav-item mr-2 mb-3 mb-lg-0">
                  <NavLink className="btn btn-secondary" to="#"
                    onClick={() => {
                      window.scrollTo(0, 3600);
                    }}
                  >
                    Old Result
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
              <div className="col-md-6 mt-5" style={{ textAlign: "center" }}>
                <div class="home-ani mt-3">
                  <div>
                    <h1 >🆂🆄🅿🅴🆁 🅺🅸🅽🅶
                    </h1>
                    <span style={{ "--i": 0 }}></span>
                    <span style={{ "--i": 1 }}></span>
                    <span style={{ "--i": 2 }}></span>
                    <span style={{ "--i": 3 }}></span>
                    <span style={{ "--i": 4 }}></span>
                  </div>
                </div>
            
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default MainHeader;