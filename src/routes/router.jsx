import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Dashboard from "../pages/Dashboard/Dashboard";
import Transactions from "../pages/Transactions/Transactions";
import Alerts from "../pages/Alerts/Alerts";
import Reports from "../pages/Reports/Reports";
import Home from "../pages/Home/Home";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import Loader from "../components/SharedUi/Loader";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ServerError from "../Error/ServerError";
import NotFound from "../Error/NotFound";
import DashboardLayout from "../layouts/DashboardLayout";
import ContactUs from "../pages/ContactUs/ContactUs";
import UserProfile from "../pages/Dashboard/UserProfile";
import Services from "../pages/Services/Services";
// import PaymentSuccess from "../pages/Payment/PaymentSuccess";
import PaymentCancel from "../pages/Payment/PaymentCancel";
import PaymentSuccess from "../pages/Payment/paymentSuccess";

export const router = createBrowserRouter([
  // App layout
  {
    path: "/",
    element: (
      <>
        <ScrollToTop />
        <RootLayout />
      </>
    ),
    hydrateFallbackElement: <Loader />,
    errorElement: <ServerError></ServerError>,
    children: [
      { index: true, element: <Home /> },
      { path: "/services", element: <Services /> },
      {
        path: "/transaction",
        element: <Transactions></Transactions>,
      },
      
      {
        path: "/alerts",
        element: <Alerts></Alerts>,
      },
      {
        path: "/reports",
        element: <Reports></Reports>,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "*",
        element: <NotFound></NotFound>,
      },
    ],
  },
  // Dashboard layout
  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        index: true,
        Component: Dashboard,
      },
      {
        path:"/dashboard/profile",
        Component:UserProfile
      },
      {
        path: "/dashboard/payment-success",
        element: <PaymentSuccess></PaymentSuccess> ,
      },
      {
        path: "/dashboard/payment-cancel",
        element: <PaymentCancel></PaymentCancel> ,
      },
    ]
  },
  // Auth layout
  {
    path: "/auth",
    element: (
      <>
        <ScrollToTop />
        <AuthLayout />
      </>
    ),
    children: [
      { path: "login", element: <Login /> },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  { path: "/*", element: <NotFound /> },
]);
