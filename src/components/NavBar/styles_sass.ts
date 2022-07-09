import styled from "styled-components";
import { NavLink } from "react-router-dom";


const StyledNavbar = styled.nav`
  padding: 24px 0;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  align-items: center;
  border-bottom: 1px solid "#e7e7e7";
 
`;
const StyledLogo = styled(NavLink)``;
const StyledSearchButton = styled.button`
  background-color: #ffffff;
`;
const StyledSearch = styled.div`
  position: relative;
  max-width: 542px;
  width: 100%;
  justify-self: center;
  svg {
    display: block;
    position: absolute;
    top: 18px;
    right: 18px;
    cursor: pointer;
    path:first-of-type {
      transition: all 0.3s;
      fill: "#a8a8a8";
    }
    :hover path:first-of-type {
      fill: "#fc857f";
    }
    :active path:first-of-type {
      fill: "#313037";
    }
  }

`;

const StyledSearchResult = styled.div`
  position: absolute;
  width: 100%;
  margin-top: 5px;
  background-color:"#ffffff";
  z-index: 2;
  
`;
const StyledSearchResultContainer = styled.div`
  max-height: 420px;
  overflow: auto;
  ::-webkit-scrollbar {
    width: 0;
  }
`;
const StyledAllResultsButton = styled.button`
  width: 100%;
  padding: 17px;
  background-color:"#ffffff";
  border: 1px solid"#e7e7e7";
  font-family: "Helios";
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: "#a8a8a8";
  transition: all 0.5s;
  :hover {
    color: "#313037";
    border: 1px solid "#313037";
  }
`;

const StyledFavorites = styled(NavLink)`
  position: relative;
 
`;
const StyledFavoriteCircle = styled.div`
  svg:last-child {
    position: absolute;
    top: -2px;
    right: -2px;
  }
  
`;
const StyledCart = styled(NavLink)`
  position: relative;
 
  }
`;
const StyledAccount = styled(NavLink)``
  

const StyledCartCircle = styled.div`
  svg:last-child {
    position: absolute;
    top: -2px;
    right: -2px;
  }
`;

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 46px;
  justify-content: center;
  align-items: center;
  padding: 19px;
  justify-self: end;
 
`;

const StyledOpen = styled.div`
  display: none;
 
`;

const StyledInput = styled.input`
  width: 100%;
  height: 56px;
  padding: 0 20px;
  border: 1px solid"#e7e7e7";
  font-family: "Helios";
  font-size: 16px;
  font-weight: 400;
  line-height: 32px;
  &::placeholder {
    color: "#a8a8a8";
  }
  &:focus {
    outline: none;
    border: 2px solid"#e7e7e7";
  }
  &:active {
    border: 1px solid"#e7e7e7";
  }
  &:disabled {
    background-color:"#e7e7e7";
  }
`;

export {
  StyledAccount,
  StyledOpen,
  StyledCart,
  StyledCartCircle,
  StyledContainer,
  StyledFavoriteCircle,
  StyledFavorites,
  StyledInput,
  StyledLogo,
  StyledNavbar,
  StyledSearch,
  StyledSearchButton,
  StyledSearchResult,
  StyledAllResultsButton,
  StyledSearchResultContainer,
};
