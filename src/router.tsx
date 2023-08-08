import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout/layout";
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
    ],
  },
]);

export default router;
