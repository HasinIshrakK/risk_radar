import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../Pages/Home/Home";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Transactions from "../Pages/Transactions/Transactions";
import Alerts from "../Pages/Alerts/Alerts";
import Reports from "../Pages/Reports/Reports";
import ServerError from "../Error/ServerError";
import NotFound from "../Error/NotFound";
import AdminDashboard from "../pages/Admin/AdminDashboard";
import SideBar from "../user/SideBar";
import Notification from "../pages/Admin/Notification";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    // errorElement: <ServerError />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/transaction", element: <Transactions /> },
      { path: "/alerts", element: <Alerts /> },
      { path: "/reports", element: <Reports /> },
      // { path: "*", element: <NotFound /> },
    ],
  },
  {
    path: "/sideBar",
    element: <SideBar />,
    children: [
      {
        path: "admin-dashboard",
        element: <AdminDashboard />,
      },
      {
        path: "notification",
        element: <Notification />,
      },
    ],
  },
]);
