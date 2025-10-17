import { createBrowserRouter } from "react-router";
import Mainlayout from "../Layout/Mainlayout";
import Home from "../Components/Home";
import Apps from "../Components/Apps";
import Installation from "../Components/Installation";
import UserDetails from "../Components/UserDetails";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Mainlayout,
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
