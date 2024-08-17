import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import About from "../pages/About";
import Contact from "../pages/Contact";
const Routes = createBrowserRouter([

  {
    path: "/",
    element: <Home/>,
  },

  {
    path: "/Log_in",
    element: <Login/>,
  },

  {
    path: "/About",
    element: <About/>,
  },

  {
    path: "/Contact",
    element: <Contact/>,
  },

]);

export default Routes;