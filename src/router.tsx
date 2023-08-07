import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./layout/layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ index: true, element: <HomePage /> }],
  },
]);

export default router;
