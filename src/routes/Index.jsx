import { createBrowserRouter } from "react-router";
import TestIndex from "../pages/test/Index";
import HomeIndex from "../pages/home/Index";
import MainLayout from "../layouts/MainLayout";
import OrderMealIndex from "../pages/orderMeal/Index";


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
    ]
  },
  {
    path: "/test",
    element: <TestIndex />,
  },
]);
