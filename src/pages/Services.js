import React from 'react'
import Header from "../components/Header";

const Services = (props) => {
  return (
    <>
   {!props.home ? <Header/> : ""} 
     <div className='text-center mt-5 mb-0'>
        <h2 class="section-title">
          <strong>Services</strong>
        </h2>
      </div>
      <section class="mb-5">
        <div class="container ">
          <div class="row">
            <div class="col-md-6 mb-5 mb-md-0 text-center">
              <img
                src="/images/webDevelopement.png"
                alt="special offers"
                class="img-fluid"
                width="492px"
              />
            </div>
            <div class="col-md-6 mt-5">
              <h2 class="section-title">
                IT solution to clients
              </h2>
              <p class="mb-5">
                We provide business solution for every web development task you
                need as website development, mobile app development, graphic
                designing, migration and E-commerce services.
              </p>

              <div class="row">
                <div class="col-md-6 mb-3">
                  <div class="media landing-feature">
                    <span class="landing-feature-icon"></span>
                    <div class="media-body">
                      <h5>Custom Web Development</h5>
                      <p>
                        In web development We offer services those in trends.
                        that keep your application, website or software
                        up-to-date with the current trends.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 mb-3">
                  <div class="media landing-feature">
                    <span class="landing-feature-icon"></span>
                    <div class="media-body">
                      <h5>Backend Apis</h5>
                      <p>
                        We are the top pioneers in building backend APIs for
                        small IT companies, freelancers and any type of use.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 mb-3">
                  <div class="media landing-feature">
                    <span class="landing-feature-icon"></span>
                    <div class="media-body">
                      <h5>Hybrid Mobile Development</h5>
                      <p>
                        We are the top pioneers in building backend APIs for
                        small IT companies, freelancers and any type of use.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 mb-3">
                  <div class="media landing-feature">
                    <span class="landing-feature-icon"></span>
                    <div class="media-body">
                      <h5>Ecommerce Development</h5>
                      <p>
                        We offer e-commerce store development for small and big
                        businesses.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="py-5 mb-5 ">
        <div class="container ">
          <div class="row">
            <div class="col-md-6 mt-5">
              <h2 class="section-title">
                Get special offers on decenterlize (dApps) systems.
              </h2>
              <p class="mb-5">
                We provide help to startups integrate reliable and secure
                decentralized blockchain solutions for their businesses.
              </p>
              <div class="row">
                <div class="col-md-6 mb-3">
                  <div class="media landing-feature">
                    <span class="landing-feature-icon"></span>
                    <div class="media-body">
                      <h5>Blockchain</h5>
                      <p>
                        We provide help to startups integrate reliable and
                        secure decentralized blockchain solutions for their
                        businesses.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 mb-3">
                  <div class="media landing-feature">
                    <span class="landing-feature-icon"></span>
                    <div class="media-body">
                      <h5>NFTs</h5>
                      <p>
                        we provide end-to-end NFT development services and can
                        help you create non fungible token marketplace that
                        allows the trading and auction of NFTs.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 mb-3">
                  <div class="media landing-feature">
                    <span class="landing-feature-icon"></span>
                    <div class="media-body">
                      <h5>Decenterlize (dApps) System</h5>
                      <p>
                        All the basics for businesses that are just getting
                        started.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 mb-5 mb-md-0">
              <img
                src="/images/decenterlize.png"
                alt="special offers"
                class="img-fluid"
                width="492px"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Services