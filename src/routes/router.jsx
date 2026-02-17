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
import ErrorPage from "../pages/ErrorPage/ErrorPage";

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
    children: [
      { index: true, element: <Home /> },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
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
    ],
  },
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
  { path: "/*", element: <ErrorPage /> },
]);
