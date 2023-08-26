import "./index.css";
import "./styles/slick.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import router from "./router";
import { Provider } from "react-redux";
import store from "./redux/store/store";
import "react-toastify/dist/ReactToastify.css";
import App from "./router";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer />
      <App />
    </Provider>
  </React.StrictMode>
);
