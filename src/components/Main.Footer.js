import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import fbSvg from "../assets/images/facebook.svg";
import twitterSvg from "../assets/images/twitter.svg";
import instaSvg from "../assets/images/instagram.svg";
import ytvSvg from "../assets/images/youtube.svg";


const MainFooter = () => {
    return (
      <>
        <footer className="foi-footer text-white">
          <div className="container">
            <div className="row footer-content">
              <div className="col-xl-6 col-lg-7 col-md-8">
                <h2 className="mb-0">
                  Do you want to know more or just have a question? write to us.
                </h2>
              </div>
              <div className="col-md-4 col-lg-5 col-xl-6 py-3 py-md-0 d-md-flex align-items-center justify-content-end">
                <NavLink to="/contact" className="btn btn-danger btn-lg">
                  Contact form
                </NavLink>
              </div>
            </div>
            <div className="row footer-widget-area">
              <div className="col-md-5">
                <div className="py-3">
                  <img
                    src="/images/MainLogo2.png"
                    alt="Main Logo"
                    style={{ height: "45px" }}
                  />
                </div>
                <p className="font-os font-weight-semibold mb3">
                We provide professional IT solutions to <br/> our clients on time.
                </p>
              </div>
              {/* <div className="col-md-3 mt-3 mt-md-0">
                <nav>
                  <ul className="nav flex-column">
                    <li className="nav-item">
                      <NavLink to="#!" className="nav-link">
                        Account
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to="#!" className="nav-link">
                        My tasks
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to="#!" className="nav-link">
                        Projects
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to="#!" className="nav-link">
                        Edit profile
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to="#!" className="nav-link">
                        Activity
                      </NavLink>
                    </li>
                  </ul>
                </nav>
              </div> */}
              <div className="col-md-3 mt-3 mt-md-0">
                <nav>
                  <ul className="nav flex-column">
                    <li className="nav-item">
                      <NavLink to="/about" onClick={window.scroll(100,0)} className="nav-link">
                        About
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to="/services" onClick={window.scroll(0,0)} className="nav-link">
                        Services
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to="#!" className="nav-link">
                        Careers
                      </NavLink>
                    </li>
                    {/* <li className="nav-item">
                      <NavLink to="/blog" className="nav-link">
                        Blog
                      </NavLink>
                    </li> */}
                    <li className="nav-item">
                      <NavLink to="#!" className="nav-link">
                        Shop with us
                      </NavLink>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="col-md-4 mt-3 mt-md-0">
                <p>
                  &copy; The. 2023{" "}
                  <NavLink
                    to="/"
                    rel="noopener noreferrer"
                    className="text-reset">
                    oneMinuteSolution
                  </NavLink>
                  .
                </p>
                <p>All rights reserved.</p>
                <nav className="social-menu">
                  <NavLink to="#!">
                    <img src={fbSvg} alt="facebook" />
                  </NavLink>
                  <NavLink to="#!">
                    <img src={instaSvg} alt="instagram" />
                  </NavLink>
                  <NavLink to="#!">
                    <img src={twitterSvg} alt="twitter" />
                  </NavLink>
                  <NavLink to="#!">
                    <img src={ytvSvg} alt="youtube" />
                  </NavLink>
                </nav>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
}

export default MainFooter