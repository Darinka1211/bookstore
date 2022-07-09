import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import { StyledContainer, StyledMain } from "./MainStyles";

const Main = () => {
    return (
      <StyledMain>
      <StyledContainer>
        <NavBar />
        <Outlet />
        <Footer />
      </StyledContainer>
    </StyledMain>
    );
  };
  
  export default Main;