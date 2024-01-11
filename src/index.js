import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { BrowserRouter as Route } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
 <React.StrictMode>
  <Route>
   <App />
  </Route>
 </React.StrictMode>
);
reportWebVitals();
