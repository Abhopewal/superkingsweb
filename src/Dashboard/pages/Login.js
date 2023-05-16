/** @format */

import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import Header from "../../components/Header";
import "./style.css";
import { ImGithub, ImFacebook2 } from "react-icons/im";
import { FcGoogle } from "react-icons/fc";
import { Form, Formik, Field } from "formik";
import * as Yup from "yup";

export const Login = () => {

    const formikRef = useRef();
    const LoginSchema = Yup.object().shape({
        email: Yup.string().email().required("Enter Your Email"),
        password: Yup.string().required("Enter The Password"),
    });

    const values = {
        email: "",
        password: "",
    };

    const handleSubmit = (values) => {
        console.log(values, "Value")
    };

    return (
        <>
            <Header />
            <div className="login-container mt-5">
                <img src="/betimg/appLogo.png" style={{ height: "50px" }} className="login-logo mt-4" />
                <div className="main-content">
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
                                <div className="login-form">
                                    <div className="mt-3">
                                        <label for="floatingInput">Email address</label>
                                        <Field
                                            type="email"
                                            name="email"
                                            id="floatingInput"
                                            placeholder="name@example.com"
                                            className={`form-control auth-input${touched.email && errors.email ? "is-invalid auth-input" : ""
                                                }`}
                                        />
                                        {errors.email && touched.email ? (
                                            <div className="d-block invalid-feedback ">
                                                {errors.email}
                                            </div>
                                        ) : null}
                                    </div>
                                    <div className="mt-3">
                                        <div className="d-flex justify-content-between">
                                            <span>
                                                <label for="floatingInput">Password</label>
                                            </span>
                                            <span>
                                                <label for="floatingInput">
                                                    <NavLink to="/forgotPassword">
                                                        {" "}
                                                        Forgot Password?{" "}
                                                    </NavLink>
                                                </label>
                                            </span>
                                        </div>
                                        <Field
                                            type="password"
                                            name="password"
                                            id="floatingInput"
                                            placeholder="***********"
                                            className={`form-control auth-input ${touched.password && errors.password ? "is-invalid auth-input" : ""
                                                }`}
                                        />
                                        {errors.password && touched.password ? (
                                            <div className="d-block invalid-feedback ">
                                                {errors.password}
                                            </div>
                                        ) : null}
                                    </div>
                                    <div className="mt-3">
                                        <button type="submit" class="submit-btn">
                                            Login{" "}
                                        </button>
                                    </div>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </>
    );
};
