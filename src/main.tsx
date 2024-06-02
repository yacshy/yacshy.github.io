import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        // http://localhost:3000/login
        path: "/login",
        element: (
          <div
            style={{
              color: "red",
            }}
          >
            登录
          </div>
        ),
      },
      {
        // // http://localhost:3000/article
        path: "/article",
        element: <div>文章</div>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
    {/* <App /> */}
  </React.StrictMode>
);
