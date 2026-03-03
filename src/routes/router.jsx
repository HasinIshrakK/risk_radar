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
import PaymentSuccess from "../pages/Payment/PaymentSuccess";
import PaymentCancel from "../pages/Payment/PaymentCancel";

export const router = createBrowserRouter([
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
      // {
      //   path: "payment-success",
      //   element: <PaymentSuccess></PaymentSuccess>,
      // },
      // {
      //   path: "payment-cancel",
      //   element: <PaymentCancel></PaymentCancel>,
      // },
    ],
  },
  // Dashboard layout
  {
    path: "/dashboard",
    element: (
      <>
        <ScrollToTop />
        <DashboardLayout />
      </>
    ),
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "profile",
        element: <UserProfile />,
      },
      {
        path: "live",
        element: <p>Lives</p>,
      },
      {
        path: "rules",
        element: <p>Rules</p>,
      },
      {
        path: "watchlist",
        element: <p>Watchlist</p>,
      },
      {
        path: "settings",
        element: <p>Settings</p>,
      },
      {
        path: "payment",
        element: <p>Payment</p>,
      },
      {
        path: "payment-success",
        element: <p>Layment-success</p>,
      },
      {
        path: "payment-cancel",
        element: <p>Payment-cancel</p>,
      },
    ],
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
