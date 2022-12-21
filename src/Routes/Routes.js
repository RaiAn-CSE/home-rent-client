import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AboutUs from "../Pages/AboutUs/AboutUs";
import AddProperty from "../Pages/AddProperty/AddProperty";
import AllProperty from "../Pages/AllProperty/AllProperty";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import PropertyDetails from "../Pages/PropertyDetails/PropertyDetails";
import Signup from "../Pages/Signup/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allProperty",
        element: <AllProperty></AllProperty>,
      },
      {
        path: "/addProperty",
        element: <AddProperty></AddProperty>,
      },
      {
        path: "/aboutUs",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/logIn",
        element: <Login></Login>,
      },
      {
        path: "/signUp",
        element: <Signup></Signup>,
      },
      {
        path: "/details",
        element: <PropertyDetails></PropertyDetails>,
      },
    ],
  },
]);
export default router;
