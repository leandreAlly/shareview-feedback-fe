import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

const AuthLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default AuthLayout;
