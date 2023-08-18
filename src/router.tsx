import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout/layout";
import ForgotPassPage from "./pages/auth/ForgotPassPage";
import SigninPage from "./pages/auth/SigninPage";
import SignupPage from "./pages/auth/SignupPage";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "auth/signup",
        element: <SignupPage />,
      },
      {
        path: "auth/signin",
        element: <SigninPage />,
      },
    ],
  },
  {
    path: "/auth",
    element: <Layout />,
    children: [
      {
        path: "forget-password",
        element: <ForgotPassPage />,
      },
    ],
  },
]);

export default router;
