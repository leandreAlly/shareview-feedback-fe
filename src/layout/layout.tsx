import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Navbar from "../components/NavBar";

const Layout = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Hero />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
