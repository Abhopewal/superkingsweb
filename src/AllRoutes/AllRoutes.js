/** @format */

import { Navigate, useRoutes } from "react-router-dom";
import About from "../pages/About";
import NotFound from "../pages/NotFound";
import Contact from "../pages/Contact";
import Quote from "../pages/Quote";
import Portfolio from "../pages/Portfolio";
import Home from "../pages/Home/Home";
import Services from "../pages/Services";
import Technologies from "../pages/Technologies";
import { Login } from "../Dashboard/pages/Login";
import DashboardLayout from "../Dashboard/Layout";
import Dashboard from "../Dashboard/pages/Dashboard";
import Games from '../Dashboard/pages/Games';
import {Users} from "../Dashboard/pages/Users";
import CreateGame from "../Dashboard/pages/CreateGame";

const AllRoutes = () => {

  const token = JSON.parse(localStorage.getItem("token")) ? JSON.parse(localStorage.getItem("token")) : null;

  const ProtectAdmin = ({ children }) => {
    return token ? children : <Navigate to="/iam-admin" />;
  };



  const element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/contact", element: <Contact /> },
    { path: "/quote", element: <Quote /> },
    { path: "/portfolio", element: <Portfolio /> },
    { path: "/services", element: <Services /> },
    { path: "/technologies", element: <Technologies /> },

    { path: "/iam-admin", element: <Login /> },
    {
      path: "/dashboard", element:(<ProtectAdmin><DashboardLayout /></ProtectAdmin>),
      children: [
        { path: "", element: <Dashboard /> },
        { path: "users", element: <Users/> },
        {path:"games",element:<Games/>},
        {path:"games/create",element:<CreateGame/>},
      
      ]
    },
    { path: "*", element: <NotFound /> },
  ]);

  return element;
};

export default AllRoutes;
