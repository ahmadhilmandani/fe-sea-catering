import { createBrowserRouter } from "react-router";
import HomeIndex from "../pages/home/Index";
import MainLayout from "../layouts/MainLayout";
import OrderMealIndex from "../pages/orderMeal/Index";
import SubscriptionIndex from "../pages/subscription/Index";
import LoginIndex from "../pages/login/Index";
import RegisterIndex from "../pages/register/Index";
import DashboardIndex from "../pages/dashboardUser/Index";
import DashboardAdminIndex from "../pages/dashboardAdmin/Index";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        element: <HomeIndex />
      },
      {
        path: '/order-meal',
        element: <OrderMealIndex />
      },
      {
        path: '/subscription',
        element: <SubscriptionIndex />
      },
      {
        path: '/login',
        element: <LoginIndex />
      },
      {
        path: '/register',
        element: <RegisterIndex />
      },
      {
        path: '/dashboard',
        element: <DashboardIndex />
      },
      {
        path: '/admin-dashboard',
        element: <DashboardAdminIndex />
      },
    ]
  }
]);
