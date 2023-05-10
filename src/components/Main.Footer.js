import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import fbSvg from "../assets/images/facebook.svg";
import twitterSvg from "../assets/images/twitter.svg";
import instaSvg from "../assets/images/instagram.svg";
import ytvSvg from "../assets/images/youtube.svg";


const MainFooter = () => {
  return (
    <>
      <footer className="foi-footer text-white mt-5">
        <div className="container">
          <div className="row footer-content">

            <div className="col-xl-12 col-lg-12 col-md-12">
              <h4 className="text-center text-white">
                MatkaKing Satta | Disawar Matka | Gali Satta | Ghaziabad Matka | Faridabad Satta | Kota Express Satta | Satta Matka Result
              </h4>
             
            </div>

          </div>
          <div className="row footer-widget-area">
            <div className="col-md-6">
              <div className="py-3">
                <img
                  src="/betimg/appLogo.png"
                  alt="Main Logo"
                  style={{ height: "70px" }}
                />
              </div>
              <p className="font-os font-weight-semibold mb3">
              Disclaimer : Sattabet is just a satta matka results website. You should access this website sattabet at your own risk. This website's content, photos and virtual properties are private and secured. They are completely owned by Matka King website under corporate laws and if someone uses it strict action will be taken against them.
              </p>
            </div>
          
            <div className="col-md-5 mt-3 mt-md-0">
              <p>
                &copy; The. 2023{" "}
                <NavLink
                  to="/"
                  rel="noopener noreferrer"
                  className="text-reset">
                  SuperKings
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

              <div class="Privacy-link-black mt-5">
                <p class="text-black-call">
                  <a href="tel:+917737788753" class="number">WHATSAPP CALL : +9197XX5XX229</a></p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default MainFooter