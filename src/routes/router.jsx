import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../Pages/Home/Home";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Transactions from "../Pages/Transactions/Transactions";
import Alerts from "../Pages/Alerts/Alerts";
import Reports from "../Pages/Reports/Reports";

export const router = createBrowserRouter([
  {
    path: "/",
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
]);
