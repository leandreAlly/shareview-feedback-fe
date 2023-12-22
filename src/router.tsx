import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import VerifyEmailPage from "./components/auth/VerifyEmail";
import AuthLayout from "./layout/AuthLayout";
import Layout from "./layout/layout";
import ForgotPassPage from "./pages/auth/ForgotPassPage";
import SigninPage from "./pages/auth/SigninPage";
import SignupPage from "./pages/auth/SignupPage";
import HomePage from "./pages/HomePage";

interface RouteConfig {
  path: string;
  element: React.ReactNode;
  children?: RouteConfig[];
}

const routes: RouteConfig[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
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
      {
        path: "auth/forget-password",
        element: <ForgotPassPage />,
      },
    ],
  },
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "auth/verify-email",
        element: <VerifyEmailPage />,
      },
    ],
  },
];

const AppRouter: React.FC = () => (
  <BrowserRouter>
    <Routes>
      {routes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element}>
          {route.children?.map((child) => (
            <Route key={child.path} path={child.path} element={child.element} />
          ))}
        </Route>
      ))}
    </Routes>
  </BrowserRouter>
);

const App: React.FC = () => (
  <div>
    <AppRouter />
  </div>
);

export default App;
