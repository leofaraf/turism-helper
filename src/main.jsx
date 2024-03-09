import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css";
import RouterProvider from "./RouterProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider>
    <App/>
  </RouterProvider>
);
