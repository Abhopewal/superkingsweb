/** @format */

import React from "react";
import MainHeader from "../components/Main.Header";
import { NavLink } from "react-router-dom";
import Header from "../components/Header";
import MainFooter from "../components/Main.Footer";

const About = () => {
  return (
    <>
      <Header />
      <main className="page-about">
        <div className="container">
          <section className="page-header">
            <h1>About</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb foi-breadcrumb">
                <li className="breadcrumb-item">
                  <a href="index.html">Home</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  About
                </li>
              </ol>
            </nav>
          </section>
          <section className="foi-page-section pt-0">
            <div className="row">
              <div className="col-md-6 mb-4 mb-md-0 pr-lg-0">
                <h2 className="about-section-one-title">
                  We are business solution provider, {" "}
                  <span className="font-weight-normal">
                    a world of options at your fingertips.
                  </span>
                </h2>
                <div className="about-section-one-content">
                  <p>
                    We always understand all the problems of the clients and execute them accordingly in real time with best way to solve it with high quality. 
                  </p>

                  <p>
                  Our specialization embraces the complete range of services in, Creative Design, Web Application Development, Mobile Application Solutions, Data Visualization, Machine Learning & Total Quality Management. 
                  </p>

                  <p className="mb-0">
                  Our highly qualified and enthusiastic team is always ready to provide our customers robust and scalable applications, dedicated technical assistance and 16 to 18 hrs support. 
                  We are also available round clock on IM during the execution phase and aim to deliver rich quality solutions within genuine budget with timely delivery.
                  </p>
                </div>
              </div>
              <div className="col-md-6 pl-lg-0 d-flex align-items-center ">
                <img
                  src="/images/54950.jpg"
                  alt="about"
                  className="img-fluid"
                  
                />
              </div>
            </div>
          </section>
          <section className="foi-page-section">
            <div className="row">
              <div className="col-md-6 mb-3 mb-md-0">
                <img
                  src="/images/5471.jpg"
                  alt="about 2"
                  className="w-100 img-fluid pr-md-5"
                  width="437px"
                />
              </div>
              <div className="col-md-6 mt-5">
                <h2 className="about-section-two-title">
                  We create the best{" "}
                  <span className="font-weight-normal">
                    solution for you and your business.
                  </span>
                </h2>
                <div className="about-section-two-content">
                  <p>
                  We approach excellent team management, distribution of task and project management. 
                  </p>
                  <p>
                  We believe that by focusing on Total Quality and Customer Satisfaction as our top corporate values, we will exceed our growth goals while establishing long-term relationships with our clients.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <MainFooter />

      {/* We have real-world experience linking web developement and mobile app developement technology and business processes */}
    </>
  );
};

export default About;
