/** @format */

import React, { useRef, useState } from "react";
import Header from "../components/Header";
import MainFooter from "../components/Main.Footer";
import * as Yup from "yup";
import { Form, Formik, Field } from "formik";
import commonService from "../services/commonService";
import { TheToast } from "../Blocks/TheToast";
import { toast } from "react-toastify";
import Loader from "../Blocks/Loader";

const Contact = () => {
  const formikRef = useRef();
  let [loader,setLoader] = useState(false)
  const LoginSchema = Yup.object().shape({
    name: Yup.string().required("Enter Your Name"),
    email: Yup.string().email().required("Enter Your Email"),
    subject: Yup.string().required("Enter Subject"),
    phone: Yup.string().required("Enter Your Phone"),
    message: Yup.string().required("Enter Message"),
  });

  const values = {
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
  };

  const handleSubmit = async (values) => {
    setLoader(true)
    let res = await commonService.contactUs(values);
    if (res.status == 201) {
      if (res.data.status == true) {
        setLoader(false)
        TheToast(res.data.message);
      }
    }
  };

  return (
    <>
      <Header />
      <main>
        <div className="container">
          <section className="page-header">
            <h2>Tell us about yourself</h2>
            <h5>
              Whether you have questions or you would just like to say hello,
              contact us.
            </h5>
          </section>

          <section className="contact-form-wrapper">
            <Formik
              innerRef={formikRef}
              enableReinitialize={true}
              initialValues={values}
              validationSchema={LoginSchema}
              onSubmit={(values) => {
                handleSubmit(values);
              }}>
              {({ errors, touched }) => (
                <Form>
                  <div className="row">
                    <div className="form-group col-md-6">
                      <label for="name">
                        YOUR NAME <sup>*</sup>
                      </label>
                      <Field
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Name *"
                        className={`form-control ${touched.name && errors.name ? "is-invalid" : ""
                          }`}
                      />
                      {errors.name && touched.name ? (
                        <div className="d-block invalid-feedback ">
                          {errors.name}
                        </div>
                      ) : null}
                    </div>
                    <div className="form-group col-md-6">
                      <label for="email">
                        YOUR EMAIL ADDRESS <sup>*</sup>
                      </label>
                      <Field
                        type="email"
                        id="email"
                        name="email"
                        placeholder="feeney.matteo@schmeler.com"
                        className={`form-control ${touched.email && errors.email ? "is-invalid" : ""
                          }`}
                      />
                      {errors.email && touched.email ? (
                        <div className="d-block invalid-feedback ">
                          {errors.email}
                        </div>
                      ) : null}
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group col-md-6">
                      <label for="subject">
                        SUBJECT <sup>*</sup>
                      </label>
                      <Field
                        type="text"
                        id="name"
                        name="subject"
                        placeholder="Development"
                        className={`form-control ${touched.subject && errors.subject ? "is-invalid" : ""
                          }`}
                      />
                      {errors.subject && touched.subject ? (
                        <div className="d-block invalid-feedback ">
                          {errors.subject}
                        </div>
                      ) : null}
                    </div>
                    <div className="form-group col-md-6">
                      <label for="phone">
                        YOUR PHONE NUMBER <sup>*</sup>
                      </label>
                      <Field
                        type="text"
                        id="phone"
                        name="phone"
                        placeholder="635-396-9570"
                        className={`form-control ${touched.phone && errors.phone ? "is-invalid" : ""
                          }`}
                      />
                      {errors.phone && touched.phone ? (
                        <div className="d-block invalid-feedback ">
                          {errors.phone}
                        </div>
                      ) : null}

                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group col-12">
                      <label for="message">
                        HOW CAN WE HELP YOU? <sup>*</sup>
                      </label>
                      <Field
                        name="message"
                        id="message"
                        rows="7"
                        placeholder="Hi there, I would like to ..."
                        className={`form-control ${touched.message && errors.message ? "is-invalid" : ""
                          }`}
                      />
                      {errors.message && touched.message ? (
                        <div className="d-block invalid-feedback ">
                          {errors.message}
                        </div>
                      ) : null}
                    </div>
                  </div>
                  <div className="text-center">
                    <button type="submit" className="btn btn-primary mb-4">
                    {loader ? <Loader/> : "Submit"}
                    </button>
                    <p className="form-footer-text">
                      We'll get back to you in 1-2 business days.
                    </p>
                  </div>
                </Form>
              )}
            </Formik>
          </section>
        </div>
      </main>
      <MainFooter />
    </>
  );
};

export default Contact;
