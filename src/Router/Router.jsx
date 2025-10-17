import { createBrowserRouter } from "react-router";
import Mainlayout from "../Layout/Mainlayout";
import Home from "../Components/Home";
import Apps from "../Components/Apps";
import Installation from "../Components/Installation";

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
    ],
  },
]);
export default router;
