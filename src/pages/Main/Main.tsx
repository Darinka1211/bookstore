import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import "./Main.scss"

const Main = () => {
    return (
      <div className="div__main">
        <div className="div__main__container">
          <NavBar />
          <Outlet />
          <Footer />
        </div>
      </div>
    );
  };
  
  export default Main;