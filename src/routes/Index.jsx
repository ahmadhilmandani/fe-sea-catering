import { createBrowserRouter } from "react-router";
import HomeIndex from "../pages/home/Index";
import MainLayout from "../layouts/MainLayout";
import OrderMealIndex from "../pages/orderMeal/Index";
import SubscriptionIndex from "../pages/subscription/Index";


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
    ]
  }
]);
