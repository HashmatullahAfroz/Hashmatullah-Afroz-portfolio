import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Main from "./pages/main/main.page";

function App() {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Navigate to="en/main" />,
      },
      {
        path: "en/main",
        element: <Main />,

      },
    ],
    { basename: "/Hashmatullah-Afroz-portfolio" }
  );

  return <RouterProvider router={router} />;
}

export default App;
