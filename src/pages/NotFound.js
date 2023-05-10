import React from 'react'
import { NavLink } from 'react-router-dom';
import NotFoundPng from "../assets/images/404.png";

const NotFound = () => {
  return (
    <>
    <main className="page-error">
        <div className="container">
            <section className="error-section">
                <h1 className="error-code">404</h1>
                <p className="error-message">Sorry, the page you are looking for could not be found.</p>
                <img src={NotFoundPng} alt="page not found" className="error-img" />
                <NavLink to="/" className="btn btn-info btn-error-action">Return Home</NavLink>
            </section>
        </div>
    </main>
      </>
  )
}

export default NotFound;