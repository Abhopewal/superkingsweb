import React from 'react'
import MainFooter from '../components/Main.Footer'
import { NavLink } from 'react-router-dom'
import {AiOutlineLink} from 'react-icons/ai'
import Header from "../components/Header";

const Portfolio = (props) => {
    return (
        <>
       {!props.home ? <Header/> : ""} 

         <div className='text-center'>
        <h2 class="section-title">
             <strong>  Portfolio </strong> 
              </h2>
        </div>
            <div id="marine-content-inner" className='mt-5 mb-5'>
                <section id="main-content mt-5">
                    <div class="container">
                        <div class="row row-fluid ">
                            <div class="col-sm-12 column column_container">
                                <div class="align-center">
                                    <div class="row projects-container" id="MixItUp4F7D79">
                                        <div
                                            class="col-lg-4 col-md-4 col-sm-4 mix category-print"
                                            style={{ display: "block" }}>
                                            <div class="project">
                                                <div class="project-image">
                                                    <img alt="####" src="/images/clicksecurepro.png" />
                                                    <div class="project-hover">
        
                                                        <a
                                                            class="search-icon prettyPhoto"
                                                            href="https://clicksecurepro.com/" target="_blank"><AiOutlineLink/></a>
                                                            
                                                        
                                                    </div>
                                                </div>
                                                <div class="project-meta">
                                                    <h4>ClicksecurePro</h4>
                                                    <span class="project-category">ClickSecurepro service is able to recognize the invalid traffic coming from your Facebook advertising compaigns through different data points, and block visitors from seeing them again.Ad fraud prevention service blocks invalid traffic in real-time making sure no damage is done to your ad budget.</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div
                                            class="col-lg-4 col-md-4 col-sm-4 mix category-print"
                                            style={{ display: "block" }}>
                                            <div class="project">
                                                <div class="project-image">
                                                    <img alt="####" src="/images/javea.png" />
                                                    <div class="project-hover">
                                                        {" "}
                                                        <a
                                                            class="search-icon prettyPhoto"
                                                            href="https://www.javea.properties/"></a>{" "}
                                                    </div>
                                                </div>
                                                <div class="project-meta">
                                                    <h4>javea Properties</h4>
                                                    <span class="project-category">Javea Properties matched hundreds of families with their perfect property. With decades of experience selling Javea homes, 
                                                    Javea Properties can guide you through every step of the process for a stress-free, straightforward transaction.</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div
                                            class="col-lg-4 col-md-4 col-sm-4 mix category-print"
                                            style={{ display: "block" }}>
                                            <div class="project">
                                                <div class="project-image">
                                                    <img alt="####" src="/images/gymeque.png" />
                                                    <div class="project-hover">
                                                        {" "}
                                                        <a
                                                            class="search-icon prettyPhoto"
                                                            href="https://gymequipmentdubai.com/"><AiOutlineLink/></a>{" "}
                                                    </div>
                                                </div>
                                                <div class="project-meta">
                                                    <h4>Gym Equipment Dubai</h4>
                                                    <span class="project-category">Rent or buy gym Equipment</span>
                                                </div>
                                            </div>
                                        </div>

                                       

                                        <div class="clearfix marine-header2-clearfix60"></div>                                   
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div> 
        </>
    )
}

export default Portfolio