import { Navigate, RouteObject } from "react-router-dom";
import AccentSidebarLayout from "./layouts/AccentSidebar";
import BaseLayout from "./layouts/BaseLayout";
import BoxedSidebarLayout from "./layouts/BoxedSidebar";
import CollapsedSidebarLayout from "./layouts/CollapsedSidebar";
import ExtendedSidebarLayout from "./layouts/ExtendedSidebar";
import Dashboard from "./pages/Dashboard";
import Overview from "./pages/Overview";
import Status404 from "./pages/Status/404";
import TestApp from "./TestApp";
import ChannelList from "./pages/Channel";
import AddChannel from "./pages/Channel/AddChannel";
import Channel from "./pages/Channel";
import { element } from "prop-types";
import EditProfile from "./pages/Users/EditProfile";
import Register from "./pages/Users/Register";
import ForgotPassword from "./pages/Users/ForgotPassword";
import ResetPassword from "./pages/Users/ResetPassword";
import Logout from "./pages/Users/Logout";
import Login from "./pages/Users/Login";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <BaseLayout />,
    children: [
      {
        path: "",
        element: <Navigate to="/login" replace />,
      },
      {
        path: "/login",
        element: <Login/>
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "forgot-password",
        element: <ForgotPassword />,
      },
      {
        path: "reset-password",
        element: <ResetPassword />,
      },
      {
        path: "/status",
        children: [
          {
            path: "",
            element: <Navigate to="404" replace />,
          },
          {
            path: "404",
            element: <Status404 />,
          },
        ],
      },
      {
        path: "*",
        element: <Status404 />,
      },
    ],
  },
  {
    path: "/overview",
    element: <AccentSidebarLayout />,
    children: [
      {
        path: "",
        element: <Navigate to="/overview/main" replace />,
      },
      {
        path: "main",
        element: <Overview />,
      },
    ],
  },
  {
    path: "/console",
    element: <AccentSidebarLayout />,
    children: [
      {
        path: "",
        element: <Navigate to="/console/channels" replace />,
      },
      {
        path: "channels",
        element: <Channel />,
      },
      {
        path: "addChannel",
        element: <AddChannel />,
      },
      {
        path: "gateways",
        element: <TestApp />,
      },
      {
        path: "*",
        element: <Status404 />,
      },
    ],
  },
  {
    path: "/applications",
    element: <AccentSidebarLayout />,
    children: [
      {
        path: "",
        element: <Navigate to="/applications/dashboard" replace />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
    ],
  },
  {
    path: "/user-profile",
    element: <AccentSidebarLayout />,
    children: [
      {
        path: "",
        element: <Navigate to="/user-profile/edit-profile" replace />,
      },
      {
        path: "edit-profile",
        element: <EditProfile />,
      },

      {
        path: "logout",
        element: <Logout />,
      },
    ],
  },
];
export default routes;
