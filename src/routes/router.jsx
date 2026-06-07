import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Dashboard from "../pages/Dashboard/Dashboard";
import FAQ from "../pages/FAQ/FAQ";
import Offers from "../pages/Offers/Offers";
import Home from "../pages/Home/Home";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import Loader from "../components/SharedUi/Loader";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/auth/Login/Login";
import Register from "../pages/auth/Register/Register";
import ServerError from "../Error/ServerError";
import NotFound from "../Error/NotFound";
import DashboardLayout from "../layouts/DashboardLayout";
import ContactUs from "../pages/ContactUs/ContactUs";
import Services from "../pages/Services/Services";
import PaymentCancel from "../pages/Dashboard/Payment/PaymentCancel";
import PaymentSuccess from "../pages/Dashboard/Payment/PaymentSuccess";
import Notifications from "../pages/Dashboard/Notifications/Notifications";
import BlockedUsers from "../pages/Dashboard/BlockedUser/BlockedUsers";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import MyPlan from "../pages/Dashboard/MyPlan/MyPlan";
import Settings from "../pages/Dashboard/Settings/Settings";
import TransactionFraudDashboard from "../pages/Dashboard/TransactionFraud/TransactionFraudDashboard";
import PrivateRoute from "./PrivateRoute";
import TrxnList from "../pages/Dashboard/TrxnList/TrxnList";

export const router = createBrowserRouter([
  // RootLayout
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
        path: "/offers",
        element: <Offers></Offers>,
      },
      {
        path: "/faq",
        element: <FAQ></FAQ>,
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
    element: (
      <PrivateRoute>
        <ScrollToTop />
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "/dashboard/notifications",
        Component: Notifications,
      },
      {
        path: "/dashboard/my-plan",
        element: <MyPlan />,
      },
      {
        path: "/dashboard/all-users",
        Component: AllUsers,
      },
      {
        path: "/dashboard/transaction-fraud",
        Component: TrxnList,
      },
      {
        path: "/dashboard/blockedUser",
        Component: BlockedUsers,
      },
      {
        path: "/dashboard/settings",
        element: <Settings />,
      },
      {
        path: "/dashboard/payment-success",
        element: <PaymentSuccess></PaymentSuccess>,
      },
      {
        path: "/dashboard/payment-cancel",
        element: <PaymentCancel></PaymentCancel>,
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
