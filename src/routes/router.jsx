import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
<<<<<<< HEAD
import Home from "../Pages/Home/Home";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Transactions from "../Pages/Transactions/Transactions";
import Alerts from "../Pages/Alerts/Alerts";
import Reports from "../Pages/Reports/Reports";
=======
import Home from "../pages/Home/Home";
import ScrollToTop from "./ScrollToTop";
import Loader from "../components/SharedUi/Loader";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
>>>>>>> aeda9ff18adf843c51adf0ee947a58a4f94013d4

export const router = createBrowserRouter([
  {
    path: "/",
<<<<<<< HEAD
    element: <RootLayout></RootLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
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
=======
    element: (
      <>
        <ScrollToTop />
        <RootLayout />
      </>
    ),
    hydrateFallbackElement: <Loader />,
    children: [{ index: true, element: <Home /> }],
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
>>>>>>> aeda9ff18adf843c51adf0ee947a58a4f94013d4
]);
