import { createRoot } from "react-dom/client";
import React from "react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./style/index.scss";
import "antd/dist/antd.css";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
