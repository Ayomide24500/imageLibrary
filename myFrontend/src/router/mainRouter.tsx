import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Homescreen from "../pages/HomeScreen";

export const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Homescreen />,
      },
    ],
  },
]);
