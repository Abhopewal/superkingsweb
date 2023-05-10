/** @format */

import { useRoutes } from "react-router-dom";
import About from "../pages/About";
import NotFound from "../pages/NotFound";
import Contact from "../pages/Contact";
import Quote from "../pages/Quote";
import Portfolio from "../pages/Portfolio";
import Home from "../pages/Home/Home";
import Services from "../pages/Services";
import Technologies from "../pages/Technologies";

const AllRoutes = () => {

  const element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/contact", element: <Contact /> },
    { path: "/quote", element: <Quote /> },
    {path:"/portfolio",element:<Portfolio/>},
    {path:"/services",element:<Services/>},
    {path:"/technologies",element:<Technologies/>},
    { path: "*", element: <NotFound /> },
  ]);

  return element;
};

export default AllRoutes;
