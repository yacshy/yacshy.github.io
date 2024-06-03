import App from "@/views/app/index";
import Home from "@/views/home/index";
import Tool from "@/views/tool/index";
import Work from "@/views/work/index";
import QuickDoc from "@/views/quickdoc/index";

import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    id: "App",
    path: "/",
    element: <App />,
    children: [
      {
        id: "Home",
        path: "/home",
        element: <Home />,
      },
      {
        id: "Tool",
        path: "/tool",
        element: <Tool />,
      },
      {
        id: "Work",
        path: "/work",
        element: <Work />,
      },
      {
        id: "QuickDoc",
        path: "/quickdoc",
        element: <QuickDoc />,
      },
    ],
  },
]);

export default router;
