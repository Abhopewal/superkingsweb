/** @format */

import React, { useRef, useState } from "react";
import * as Yup from "yup";
import { Form, Formik, Field } from "formik";
import commonService from "../services/commonService";
import { TheToast } from "../Blocks/TheToast";
import Loader from "../Blocks/Loader";
import Header from "../components/Header";


const Quote = (props) => {
    const formikRef = useRef();
    let [loading,setLoading] = useState(false);
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
        setLoading(true)
        let res = await commonService.getQuote(values);
        if (res.status == 201) {
            if (res.data.status == true) {
                setLoading(false)
                TheToast(res.data.message);
            }
        }
    };

    return (
        <>
                {!props.home ? <Header/> : ""} 
                <div className="container q-margin">
                <h2 class="section-title mt-4 text-center">
                        <strong>  Get Quote </strong>
                    </h2>
                    <section className="p-4">
                        <h2>Get A Free Consultation</h2>

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
                                                YOUR NAME <sup className="text-danger">*</sup>
                                            </label>
                                            <Field
                                                type="text"
                                                id="name"
                                                name="name"
                                                placeholder="Name"
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
                                                YOUR EMAIL ADDRESS <sup className="text-danger">*</sup>
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
                                        <div className="form-group col-md-4">
                                            <label for="phone">
                                                YOUR PHONE NUMBER <sup className="text-danger">*</sup>
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
                                        <div className="form-group col-md-4">
                                            <label for="subject">
                                                SUBJECT <sup className="text-danger">*</sup>
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
                                        <div className="form-group col-md-4">
                                            <label for="subject">
                                                BUDGET <sup className="text-danger">*</sup>
                                            </label>
                                            <Field
                                                as="select"
                                                name="budget"
                                                id="message"
                                                rows="7"
                                                className="form-control"
                                            >
                                                <option>Select Budget</option>
                                                <option>Less than $2000</option>
                                                <option>$2000-$10000</option>
                                                <option>$10000-$15000</option>
                                                <option>$15000-$30000</option>
                                                <option>$30000-$50000</option>
                                                <option>&gt;$50000</option>
                                            </Field>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group col-12">
                                            <label for="message">
                                                Describe your project details <sup className="text-danger">*</sup>
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
                                           {loading ? <Loader/> : "Let's Talk"} 
                                        </button>

                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </section>
                </div>
        </>
    );
};

export default Quote;
