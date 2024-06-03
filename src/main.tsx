import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Article from "./views/article.tsx";
import About from "./views/about.tsx";

const router = createBrowserRouter([
  {
    id: "app",
    path: "/",
    element: <App />,
    children: [
      {
        id: "about",
        path: "/about",
        element: <About />,
      },
      {
        id: "article",
        path: "/article",
        element: <Article />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
