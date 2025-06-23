import { createBrowserRouter } from "react-router";
import TestIndex from "../pages/test/Index";
import HomeIndex from "../pages/home/Index";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeIndex />,
  },
  {
    path: "/test",
    element: <TestIndex />,
  },
]);
