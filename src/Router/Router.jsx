import { createBrowserRouter } from "react-router";
import Mainlayout from "../Layout/Mainlayout";
import Home from "../Components/Home";
import Apps from "../Components/Apps";
import Installation from "../Components/Installation";
import UserDetails from "../Components/UserDetails";
import ErrorPage from "../Components/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Mainlayout,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/apps",
        Component: Apps,
      },
      {
        path: "/installation",
        Component: Installation,
      },
      {
        path: "/userdetails/:id",
        Component: UserDetails,
      },
    ],
  },
]);
export default router;
