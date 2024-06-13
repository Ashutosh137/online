import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import UseProvider from "./store.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UseProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UseProvider>
  </React.StrictMode>
);
