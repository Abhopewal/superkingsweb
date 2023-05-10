/** @format */

import React, { useState } from "react";
import "../../assets/vendors/fontawesome-free/css/all.min.css";
import "../../assets/css/style.css";
import Portfolio from "../Portfolio";
import Quote from '../Quote';
import Technologies from "../Technologies";
import Services from "../Services";
import Faq from "../Faq";
import MainHeader from "../../components/Main.Header";
import MainFooter from "../../components/Main.Footer";
import { FcApproval } from 'react-icons/fc'

const Home = () => {
  return (
    <>
      <MainHeader />
      <div>
        <form method="post" action="./home.aspx" id="form1">

          <div class="container mt-5">
            <div class="col-md-12">
              <center><h4 class="bazzar-heading">Today Result</h4></center>
            </div>
            <div class="row">

              <div class="col-md-4 col-sm-6">
                <div class="pricingTable">
                  <h5 class="title">
                    <span id="ContentPlaceHolder1_Repeater1_regame_0">DELHI BAZAR</span> </h5>
                  <div class="pricing-content">
                    <h1 class="title2">  <span id="ContentPlaceHolder1_Repeater1_reresult_0">22</span>  </h1>
                    <ul>
                      <li>  <span id="ContentPlaceHolder1_Repeater1_retime_0">03:20 PM</span> </li>
                      <li>  <span id="ContentPlaceHolder1_Repeater1_Label4_0">08/05/2023</span> </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="col-md-4 col-sm-6">
                <div class="pricingTable">
                  <h5 class="title">
                    <span id="ContentPlaceHolder1_Repeater1_regame_1">DELHI BAZAR</span> </h5>
                  <div class="pricing-content">
                    <h1 class="title2">  <span id="ContentPlaceHolder1_Repeater1_reresult_1">22</span>  </h1>
                    <ul>
                      <li>  <span id="ContentPlaceHolder1_Repeater1_retime_1">03:20 PM</span> </li>
                      <li>  <span id="ContentPlaceHolder1_Repeater1_Label4_1">08/05/2023</span> </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="col-md-4 col-sm-6">
                <div class="pricingTable">
                  <h5 class="title">
                    <span id="ContentPlaceHolder1_Repeater1_regame_2">DESAWER</span> </h5>
                  <div class="pricing-content">
                    <h1 class="title2">  <span id="ContentPlaceHolder1_Repeater1_reresult_2">04</span>  </h1>
                    <ul>
                      <li>  <span id="ContentPlaceHolder1_Repeater1_retime_2">05:15AM</span> </li>
                      <li>  <span id="ContentPlaceHolder1_Repeater1_Label4_2">08/05/2023</span> </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="col-md-4 col-sm-6">
                <div class="pricingTable">
                  <h5 class="title">
                    <span id="ContentPlaceHolder1_Repeater1_regame_3">FARIDABAD</span> </h5>
                  <div class="pricing-content">
                    <h1 class="title2">  <span id="ContentPlaceHolder1_Repeater1_reresult_3">18</span>  </h1>
                    <ul>
                      <li>  <span id="ContentPlaceHolder1_Repeater1_retime_3">06:20 PM</span> </li>
                      <li>  <span id="ContentPlaceHolder1_Repeater1_Label4_3">08/05/2023</span> </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="col-md-4 col-sm-6">
                <div class="pricingTable">
                  <h5 class="title">
                    <span id="ContentPlaceHolder1_Repeater1_regame_4">GALI</span> </h5>
                  <div class="pricing-content">
                    <h1 class="title2">  <span id="ContentPlaceHolder1_Repeater1_reresult_4">44</span>  </h1>
                    <ul>
                      <li>  <span id="ContentPlaceHolder1_Repeater1_retime_4">11:10 PM</span> </li>
                      <li>  <span id="ContentPlaceHolder1_Repeater1_Label4_4">08/05/2023</span> </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="col-md-4 col-sm-6">
                <div class="pricingTable">
                  <h5 class="title">
                    <span id="ContentPlaceHolder1_Repeater1_regame_5">GAZIABAAD</span> </h5>
                  <div class="pricing-content">
                    <h1 class="title2">  <span id="ContentPlaceHolder1_Repeater1_reresult_5">50</span>  </h1>
                    <ul>
                      <li>  <span id="ContentPlaceHolder1_Repeater1_retime_5">08:40 PM</span> </li>
                      <li>  <span id="ContentPlaceHolder1_Repeater1_Label4_5">08/05/2023</span> </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="col-md-4 col-sm-6">
                <div class="pricingTable">
                  <h5 class="title">
                    <span id="ContentPlaceHolder1_Repeater1_regame_6">SHRI GANESH</span> </h5>
                  <div class="pricing-content">
                    <h1 class="title2">  <span id="ContentPlaceHolder1_Repeater1_reresult_6">15</span>  </h1>
                    <ul>
                      <li>  <span id="ContentPlaceHolder1_Repeater1_retime_6">04:25 PM</span> </li>
                      <li>  <span id="ContentPlaceHolder1_Repeater1_Label4_6">08/05/2023</span> </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="col-md-4 col-sm-6">
                <div class="pricingTable">
                  <h5 class="title">
                    <span id="ContentPlaceHolder1_Repeater1_regame_7">SHRI GANESH</span> </h5>
                  <div class="pricing-content">
                    <h1 class="title2">  <span id="ContentPlaceHolder1_Repeater1_reresult_7">15</span>  </h1>
                    <ul>
                      <li>  <span id="ContentPlaceHolder1_Repeater1_retime_7">04:25 PM</span> </li>
                      <li>  <span id="ContentPlaceHolder1_Repeater1_Label4_7">08/05/2023</span> </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="col-md-4 col-sm-6">
                <div class="pricingTable">
                  <h5 class="title">
                    <span id="ContentPlaceHolder1_Repeater1_regame_8">Super king</span> </h5>
                  <div class="pricing-content">
                    <h1 class="title2">  <span id="ContentPlaceHolder1_Repeater1_reresult_8">33</span>  </h1>
                    <ul>
                      <li>  <span id="ContentPlaceHolder1_Repeater1_retime_8">02:15 PM</span> </li>
                      <li>  <span id="ContentPlaceHolder1_Repeater1_Label4_8">08/05/2023</span> </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="col-md-4 col-sm-6">
                <div class="pricingTable">
                  <h5 class="title">
                    <span id="ContentPlaceHolder1_Repeater1_regame_9">VIP DELHI</span> </h5>
                  <div class="pricing-content">
                    <h1 class="title2">  <span id="ContentPlaceHolder1_Repeater1_reresult_9">87</span>  </h1>
                    <ul>
                      <li>  <span id="ContentPlaceHolder1_Repeater1_retime_9">03:05 PM</span> </li>
                      <li>  <span id="ContentPlaceHolder1_Repeater1_Label4_9">08/05/2023</span> </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="col-md-4 col-sm-6">
                <div class="pricingTable">
                  <h5 class="title">
                    <span id="ContentPlaceHolder1_Repeater1_regame_10">VIP GALI</span> </h5>
                  <div class="pricing-content">
                    <h1 class="title2">  <span id="ContentPlaceHolder1_Repeater1_reresult_10">44</span>  </h1>
                    <ul>
                      <li>  <span id="ContentPlaceHolder1_Repeater1_retime_10">10:30 PM</span> </li>
                      <li>  <span id="ContentPlaceHolder1_Repeater1_Label4_10">08/05/2023</span> </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="col-md-4 col-sm-6">
                <div class="pricingTable">
                  <h5 class="title">
                    <span id="ContentPlaceHolder1_Repeater1_regame_11">VIP GALI</span> </h5>
                  <div class="pricing-content">
                    <h1 class="title2">  <span id="ContentPlaceHolder1_Repeater1_reresult_11">44</span>  </h1>
                    <ul>
                      <li>  <span id="ContentPlaceHolder1_Repeater1_retime_11">10:30 PM</span> </li>
                      <li>  <span id="ContentPlaceHolder1_Repeater1_Label4_11">08/05/2023</span> </li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div class="features-area pt-100" id="bazaar">
            <div class="container">
              <div class="row justify-content-center">
                <div class="col-lg-7 text-center wow fadeInUp" data-wow-delay="0.2s">
                  <div class="title">
                    <p class="bazzar-heading">MATKA BAZAAR</p>

                  </div>
                </div>
              </div>

              <span id="ContentPlaceHolder1_DataList1" style={{ borderColor: "Red" }}><span>
                <div class="bazarBox">
                  <p class="opnTime"><span id="ContentPlaceHolder1_DataList1_Label2_0">06:30 AM</span></p>
                  <p class="marketName"><span id="ContentPlaceHolder1_DataList1_Label1_0">FARIDABAD</span></p>
                  <p class="closeTime"><span id="ContentPlaceHolder1_DataList1_Label3_0">05:50 PM</span></p>
                </div>
              </span><br /><span>
                  <div class="bazarBox">
                    <p class="opnTime"><span id="ContentPlaceHolder1_DataList1_Label2_1">06:30 AM</span></p>
                    <p class="marketName"><span id="ContentPlaceHolder1_DataList1_Label1_1">GAZIABAAD</span></p>
                    <p class="closeTime"><span id="ContentPlaceHolder1_DataList1_Label3_1">08:20 PM</span></p>
                  </div>
                </span><br /><span>
                  <div class="bazarBox">
                    <p class="opnTime"><span id="ContentPlaceHolder1_DataList1_Label2_2">06:30 AM</span></p>
                    <p class="marketName"><span id="ContentPlaceHolder1_DataList1_Label1_2">GALI</span></p>
                    <p class="closeTime"><span id="ContentPlaceHolder1_DataList1_Label3_2">11:20 PM</span></p>
                  </div>
                </span><br /><span>
                  <div class="bazarBox">
                    <p class="opnTime"><span id="ContentPlaceHolder1_DataList1_Label2_3">06:30 AM</span></p>
                    <p class="marketName"><span id="ContentPlaceHolder1_DataList1_Label1_3">Super king</span></p>
                    <p class="closeTime"><span id="ContentPlaceHolder1_DataList1_Label3_3">01:30 PM</span></p>
                  </div>
                </span><br /><span>
                  <div class="bazarBox">
                    <p class="opnTime"><span id="ContentPlaceHolder1_DataList1_Label2_4">06:30 AM</span></p>
                    <p class="marketName"><span id="ContentPlaceHolder1_DataList1_Label1_4">DELHI BAZAR</span></p>
                    <p class="closeTime"><span id="ContentPlaceHolder1_DataList1_Label3_4">02:30 PM</span></p>
                  </div>
                </span><br /><span>
                  <div class="bazarBox">
                    <p class="opnTime"><span id="ContentPlaceHolder1_DataList1_Label2_5">06:30AM</span></p>
                    <p class="marketName"><span id="ContentPlaceHolder1_DataList1_Label1_5">DESAWER</span></p>
                    <p class="closeTime"><span id="ContentPlaceHolder1_DataList1_Label3_5">03:30AM</span></p>
                  </div>
                </span><br /><span>
                  <div class="bazarBox">
                    <p class="opnTime"><span id="ContentPlaceHolder1_DataList1_Label2_6">06:30 AM</span></p>
                    <p class="marketName"><span id="ContentPlaceHolder1_DataList1_Label1_6">SHRI GANESH</span></p>
                    <p class="closeTime"><span id="ContentPlaceHolder1_DataList1_Label3_6">04:00 PM</span></p>
                  </div>
                </span><br /><span>
                  <div class="bazarBox">
                    <p class="opnTime"><span id="ContentPlaceHolder1_DataList1_Label2_7">06:30 AM</span></p>
                    <p class="marketName"><span id="ContentPlaceHolder1_DataList1_Label1_7">VIP GALI</span></p>
                    <p class="closeTime"><span id="ContentPlaceHolder1_DataList1_Label3_7">10:15 PM</span></p>
                  </div>
                </span><br /><span>
                  <div class="bazarBox">
                    <p class="opnTime"><span id="ContentPlaceHolder1_DataList1_Label2_8">06:30 AM</span></p>
                    <p class="marketName"><span id="ContentPlaceHolder1_DataList1_Label1_8">VIP DELHI</span></p>
                    <p class="closeTime"><span id="ContentPlaceHolder1_DataList1_Label3_8">02:30 PM</span></p>
                  </div>
                </span></span>
            </div>
          </div>



          <div class="c-border-bg">
            <div class="container">
              <div class="row">
                <div class="col-lg-12 col-md-6 wow fadeInRight" data-wow-delay="0.2s">
                  <div class="single-counter-box-01">

                    <p class="counter-heading">And Many More Online Matka Bazaar with Online Matka Result</p>

                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="c-border-bg" style={{ color: "#fff" }}>
            <div class="container">
              <div class="row">
                <div class="col-lg-3 col-md-6 wow fadeInRight" data-wow-delay="0.2s">
                  <div class="single-counter-box">
                    <p><i class="fa fa-cloud-download"></i></p>
                    <p class="counter-number"><span>1</span> L+</p>

                  </div>
                </div>
                <div class="col-lg-3 col-md-6 wow fadeInRight" data-wow-delay="0.4s">
                  <div class="single-counter-box">
                    <p><i class="fa  fa-user-circle"></i></p>
                    <p class="counter-number"><span>10,000</span></p>

                  </div>
                </div>
                <div class="col-lg-3 col-md-6 wow fadeInRight" data-wow-delay="0.6s">
                  <div class="single-counter-box">
                    <p><i class="fa fa-star"></i></p>
                    <p class="counter-number"><span>50,000</span></p>

                  </div>
                </div>
                <div class="col-lg-3 col-md-6 wow fadeInRight" data-wow-delay="0.8s">
                  <div class="single-counter-box">
                    <p><i class="fa fa-thumbs-up"></i></p>
                    <p class="counter-number"><span>20</span>K</p>

                  </div>
                </div>
              </div>
            </div>
          </div>


          {/* <div class="container">
            <div class="container">
              <div class="row justify-content-center">
                <div class="col-lg-7 text-center wow fadeInUp" data-wow-delay="0.2s">
                  <div class="title">
                    <p class="screen-head">SCREENSHOT</p>

                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-12 wow fadeInUp" data-wow-delay="0.2s">
                  <div class="swiper-container gallery-slider swiper-container-horizontal swiper-container-3d swiper-container-coverflow swiper-container-android">
                    <div class="swiper-wrapper" style={{ transform: "translate3d(-170px, 0px, 0px)", transitionDuration: "0ms" }}><div class="swiper-slide swiper-slide-duplicate swiper-slide-prev" data-swiper-slide-index="4" style={{ width: "226.667px", transform: "translate3d(0px, 0px, -250px) rotateX(0deg) rotateY(0deg)", zIndex: 0, transitionDuration: "0ms" }}>
                      <div class="slide-item">
                        <img src="assets/betimg/7e.jpg" alt="Matkaking" class="img-responsive" />
                      </div>
                    </div>
                      <div class="swiper-slide swiper-slide-active" data-swiper-slide-index="0" style={{ width: "226.667px", transform: "translate3d(0px, 0px, -0.367647px) rotateX(0deg) rotateY(0deg)", zIndex: 1, transitionDuration: "0ms" }}>
                        <div class="slide-item">
                          <img src="assets/betimg/8e.jpg" alt="Matkaking" class="img-responsive" />
                        </div>
                      </div>
                      <div class="swiper-slide swiper-slide-next" data-swiper-slide-index="1" style={{ width: "226.667px", transform: "translate3d(0px, 0px, -249.632px) rotateX(0deg) rotateY(0deg)", zIndex: 0, transitionDuration: "0ms" }}>
                        <div class="slide-item">
                          <img src="assets/betimg/4e.jpg" alt="Matkaking" class="img-responsive" />
                        </div>
                      </div>
                      <div class="swiper-slide" data-swiper-slide-index="2" style={{ width: "226.667px; transform: translate3d(0px, 0px, -500px) rotateX(0deg) rotateY(0deg)", zIndex: -1, transitionDuration: "0ms" }}>
                        <div class="slide-item">
                          <img src="assets/betimg/2e.jpg" alt="Matkaking" class="img-responsive" />
                        </div>
                      </div>
                      <div class="swiper-slide" data-swiper-slide-index="3" style={{ width: "226.667px", transform: "translate3d(0px, 0px, -750.368px) rotateX(0deg) rotateY(0deg)", zIndex: -2, transitionDuration: "0ms" }}>
                        <div class="slide-item">
                          <img src="assets/betimg/3e.jpg" alt="Matkaking" class="img-responsive" />
                        </div>
                      </div>
                      <div class="swiper-slide swiper-slide-duplicate-prev" data-swiper-slide-index="4" style={{ width: "226.667px", transform: "translate3d(0px, 0px, -999.632px) rotateX(0deg) rotateY(0deg)", zIndex: -3, transitionDuration: "0ms" }}>
                        <div class="slide-item">
                          <img src="betimg/7e.jpg" alt="Matkaking" class="img-responsive" />
                        </div>
                      </div>

                      <div class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active" data-swiper-slide-index="0" style={{ width: " 226.667px", transform: "translate3d(0px, 0px, -1250px) rotateX(0deg) rotateY(0deg)", zIndex: -4, transitionDuration: "0ms" }}>
                        <div class="slide-item">
                          <img src="betimg/AppLogin.png" alt="Matkaking" class="img-responsive" />
                        </div>
                      </div></div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          <div class="rectangle-area pd-100 o-hi" id="play">
            <div class="container">
              <div class="row aic">
                <div class="col-lg-6 text-right  wow fadeInLeft" data-wow-delay="0.2s">
                  <div class="rectangle-img">
                    <img src="/betimg/AppLogin.png" style={{ height: "700px" }} alt="Matkaking" class="d-none d-lg-block" />


                  </div>
                </div>
                <div class="col-lg-6 wow fadeInRight" data-wow-delay="0.2s">
                  <div class="rectangle-right">
                    <div class="title">
                      <span class="mdi mdi-dice-multiple"></span>
                      <h2>How to Play Online Matka with Mobile Application</h2>

                    </div>
                    <ul class="list">
                      <li>  <FcApproval/> Download Superking App</li>
                      <li>  <FcApproval/> Recharge Your Wallet</li>
                      <li>  <FcApproval/> Play Satta Betting</li>
                      <li>  <FcApproval/> Win Huge Real Cash</li>
                    </ul>

                    <a href="super_king.apk" class="boxed-btn">
                      <div class="dfx aic">
                        <div class="button-icon-img">
                          <i class="fa fa-download" style={{ fontStyle: "19px", color: "#000" }}>
                          </i>
                        </div>
                        <div class="btn-content">
                          <h6 class="down-button">Download App</h6>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <img src="home.aspx" alt="Matkaking" class="shape-img" />
          </div>


          <div class="c-border">
            <div class="container">
              <h2 class="link-head">Get Download Link On Your Mobile</h2>
              <div class="row">

                <div class="col-lg-6">

                  <input type="text" class="link-btn" placeholder="Enter mobile number" id="mobileNumber" name="number" onkeydown="return isNumberKey(event,'success')" autocomplete="off" maxlength="10" />
                  <button type="button" onclick="sendSms();" class="btnMsg" id="sendSMS">Get Link </button>
                  <button class="btn mobile" style={{ display: "none" }}></button>

                  <div id="success" style={{ color: "#000", paddingKeft: "25px" }}></div>

                </div>
                <div class="col-lg-6 d-none d-lg-block">
                  <img src="/betimg/support.png" class="image-responsive" />
                </div>
              </div>
            </div>
          </div>


          {/* <div class="testimonial-area" id="testimonial">
              <div class="container">
                <div class="row">
                  <div class="col-lg-10 wow fadeInUp" data-wow-delay="0.2s">
                    <div class="t-title">
                      <h6>TESTIMONIAL</h6>
                    </div>
                  </div>
                  <div class="col-lg-2 wow fadeInUp" data-wow-delay="0.2s">
                    <div class="nav-bar">
                      <button class="prevbtn"><span class="mdi mdi-arrow-left"></span></button>
                      <button class="nextbtn"><span class="mdi mdi-arrow-right"></span></button>
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-lg-12">
                    <div class="owl-carousel t-carousel nav-bar owl-loaded owl-drag">





                      <div class="owl-stage-outer"><div class="owl-stage" style={{transform: "translate3d(-1480px, 0px, 0px)", transition: "all 1s ease 0s", width: "4070px"}}><div class="owl-item cloned" style={{width:"370px"}}><div class="single-c-item wow fadeInRight" data-wow-delay="0.6s" style={{height: "330px"}}>
                        <p class="name-head">Fastest Mobile AppSuperking</p>
                        <p>Mere pahile hi game mai maine 70000 Jite. Mera anubhav kafi accha tha. Money withdrawl ki service bhi kafi fast hai.</p>
                        <br />
                        <div class="t-content aic dfx">
                          <div class="t-text">
                            <p class="name">Pinky singh, <span> Student</span></p>
                          </div>
                        </div>
                        <div class="quote-icon">
                          <i class="fa fa-user"></i>
                        </div>
                      </div></div><div class="owl-item cloned" style={{width:"370px"}}><div class="single-c-item wow fadeInRight" data-wow-delay="0.8s" style={{height: "330px"}}>
                        <p class="name-head">Excellent App for Play Matka</p>
                        <p>Matka King is a very reliable site to play. My gaming experience here is simply the best. Trusted and Fastest Withdraw.</p>
                        <div class="t-content aic dfx">
                          <div class="t-text">
                            <p class="name">Pooja Chimppa,<span>Businessman</span></p>
                          </div>
                        </div>
                        <div class="quote-icon">
                          <i class="fa fa-user"></i>
                        </div>
                      </div></div><div class="owl-item cloned" style={{width:"370px"}}><div class="single-c-item wow fadeInRight" data-wow-delay="0.9s" style={{height: "330px"}}>
                        <p class="name-head">Play Kalyan Star Line</p>
                        <p>Matka King aap mai satta k sath casino bhi khel sakte hai. Esliye mai kahunga ki aap bhi ek baar ye app download karke satta aur casino ek sath khelke dekhe.</p>
                        <br />
                        <div class="t-content aic dfx">
                          <div class="t-text">
                            <p class="name">Dishant Hedao, <span>Private Job</span></p>
                          </div>
                        </div>
                        <div class="quote-icon">
                          <i class="fa fa-user"></i>
                        </div>
                      </div></div><div class="owl-item" style={{width:"370px"}}><div class="single-c-item  wow fadeInRight" data-wow-delay="0.2s" style={{height: "330px"}}>
                        <p class="name-head">Online Matka Play App </p>
                        <p>Thanks to Superking. I did not expect that I would win first prize by playing at Superking App. I felt very happy at that moment. </p>
                        <br />
                        <div class="t-content aic dfx">
                          <div class="t-text">
                            <p class="name">Ayush dwivedi, <span> Teacher</span></p>

                          </div>

                        </div>
                        <div class="quote-icon">
                          <i class="fa fa-user"></i>
                        </div>
                      </div></div><div class="owl-item active" style={{width:"370px"}}><div class="single-c-item  wow fadeInRight" data-wow-delay="0.4s" style={{height: "330px"}}>
                        <p class="name-head">Best App for Satta Betting</p>
                        <p>Bahut mast app hai. Turant hi paise jama ho gaye aur turant khelna chalu. Withdrawl ki service bhi acchi hai.</p>
                        <br />
                        <div class="t-content aic dfx">

                          <div class="t-text">
                            <p class="name">Afzal khan,  <span>Delhi</span></p>
                          </div>
                        </div>
                        <div class="quote-icon">
                          <i class="fa fa-user"></i>
                        </div>
                      </div></div><div class="owl-item" style={{width:"370px"}}><div class="single-c-item wow fadeInRight" data-wow-delay="0.6s" style={{height: "330px"}}>
                        <p class="name-head">Fastest Mobile AppSuperking</p>
                        <p>Mere pahile hi game mai maine 70000 Jite. Mera anubhav kafi accha tha. Money withdrawl ki service bhi kafi fast hai.</p>
                        <br />
                        <div class="t-content aic dfx">
                          <div class="t-text">
                            <p class="name">Pinky singh, <span> Student</span></p>
                          </div>
                        </div>
                        <div class="quote-icon">
                          <i class="fa fa-user"></i>
                        </div>
                      </div></div><div class="owl-item" style={{width:"370px"}}><div class="single-c-item wow fadeInRight" data-wow-delay="0.8s" style={{height: "330px"}}>
                        <p class="name-head">Excellent App for Play Matka</p>
                        <p>Matka King is a very reliable site to play. My gaming experience here is simply the best. Trusted and Fastest Withdraw.</p>
                        <div class="t-content aic dfx">
                          <div class="t-text">
                            <p class="name">Pooja Chimppa,<span>Businessman</span></p>
                          </div>
                        </div>
                        <div class="quote-icon">
                          <i class="fa fa-user"></i>
                        </div>
                      </div></div><div class="owl-item" style={{width:"370px"}}><div class="single-c-item wow fadeInRight" data-wow-delay="0.9s" style={{height: "330px"}}>
                        <p class="name-head">Play Kalyan Star Line</p>
                        <p>Matka King aap mai satta k sath casino bhi khel sakte hai. Esliye mai kahunga ki aap bhi ek baar ye app download karke satta aur casino ek sath khelke dekhe.</p>
                        <br />
                        <div class="t-content aic dfx">
                          <div class="t-text">
                            <p class="name">Dishant Hedao, <span>Private Job</span></p>
                          </div>
                        </div>
                        <div class="quote-icon">
                          <i class="fa fa-user"></i>
                        </div>
                      </div></div><div class="owl-item cloned" style={{width:"370px"}}><div class="single-c-item  wow fadeInRight" data-wow-delay="0.2s" style={{height: "330px"}}>
                        <p class="name-head">Online Matka Play App </p>
                        <p>Thanks to Superking. I did not expect that I would win first prize by playing at Superking App. I felt very happy at that moment. </p>
                        <br />
                        <div class="t-content aic dfx">
                          <div class="t-text">
                            <p class="name">Ayush dwivedi, <span> Teacher</span></p>

                          </div>

                        </div>
                        <div class="quote-icon">
                          <i class="fa fa-user"></i>
                        </div>
                      </div></div><div class="owl-item cloned" style={{width:"370px"}}><div class="single-c-item  wow fadeInRight" data-wow-delay="0.4s" style={{height: "330px"}}>
                        <p class="name-head">Best App for Satta Betting</p>
                        <p>Bahut mast app hai. Turant hi paise jama ho gaye aur turant khelna chalu. Withdrawl ki service bhi acchi hai.</p>
                        <br />
                        <div class="t-content aic dfx">

                          <div class="t-text">
                            <p class="name">Afzal khan,  <span>Delhi</span></p>
                          </div>
                        </div>
                        <div class="quote-icon">
                          <i class="fa fa-user"></i>
                        </div>
                      </div></div><div class="owl-item cloned" style={{width:"370px"}}><div class="single-c-item wow fadeInRight" data-wow-delay="0.6s" style={{height: "330px"}}>
                        <p class="name-head">Fastest Mobile AppSuperking</p>
                        <p>Mere pahile hi game mai maine 70000 Jite. Mera anubhav kafi accha tha. Money withdrawl ki service bhi kafi fast hai.</p>
                        <br />
                        <div class="t-content aic dfx">
                          <div class="t-text">
                            <p class="name">Pinky singh, <span> Student</span></p>
                          </div>
                        </div>
                        <div class="quote-icon">
                          <i class="fa fa-user"></i>
                        </div>
                      </div></div></div></div><div class="owl-nav disabled"><button type="button" role="presentation" class="owl-prev"><span aria-label="Previous">‹</span></button><button type="button" role="presentation" class="owl-next"><span aria-label="Next">›</span></button></div><div class="owl-dots disabled"></div></div>
                  </div>
                </div>
              </div>
            </div> */}

          <div class="container">
            <div class="row">


              <div class="col-md-5 d-none d-lg-block">
                <img src="/betimg/about.png" style={{height:"650px",borderRadius:"15px"}}/>
              </div>
              <div class="col-md-7 text-left mt-5">
                <h5 class="abt-head">About Us</h5>
                <p class="abt-para">Superking App is the most popular Satta Matka Website to play online Matka that provides the fastest Satta Matka Result and Satta Matka Jodi &amp; Panel Numbers. Our website is famous for quick Superking App Matka Result or Matka Tips.Superking offers the chance to become a Satta Superking using Our Satta Matka Result Online.Superking mostly welcomes you in the popular Satta Matka World. This is totally official and 100% secure Matka site for real Matka players. This is the world’s most famous Online Satta website love by every Satta Matka player. Engaged in Satta Bazar We provide quickest and Super Results and error-free predictions. We are the only one who can help you big in earning huge money. Satta Matka is globally renowned website for Satta Com, Gali Satta, Matka Satta results. We are experts in guessing . Want to check out Satta Matka Live for fix Satta Matka results? Browse and know Satta Matka numbers on our websites. We have been a numerouno player in Satta Matka number guessing, Satta King, Satta Result, Matka Number, Disawar Satta, Ghaziabad Matka, Faridabad Satta Chart, GALI Satta Chart Market As Well.
                </p>
              </div>

            </div>
          </div>

        </form>
        <MainFooter />
      </div>

    </>
  );
};
export default Home;