import { Link } from "react-router-dom";
import styled from "styled-components";


interface IOpen {
  open: boolean;
}

const StyledMenu = styled.div<IOpen>`
display: none; `;


const StyledMenuContainer = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  height: 100%;
`;

const StyledMenuNav = styled.div`
  position: relative;
  width: 368px;
  height: 100%;
  margin-left: auto;
  padding: 0 40px;
  background-color: w;
 
`;

const StyledCloseContainer = styled.div`
  margin: 0 auto;
  height: 104px;
  width: 288px;
  border-bottom: 1px solid gray;
  margin-bottom: 56px;
`;

const StyledClose = styled.div`
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
`;

const StyledSearch = styled.div`
  position: relative;
  margin-bottom: 50px;
  svg {
    position: absolute;
    right: 16px;
    top: 16px;
  }
`;

const StyledLink = styled(Link)`
  display: block;
  text-decoration: none;
  color: gray;
  &:first-of-type {
    margin-bottom: 55px;
  }
  font-family: "Bebas Neue";
  font-weight: 700;
  font-size: 32px;
  line-height: 44px;;
  text-align: center;
  :active {
    color: gray;
  }
`;

const StyledButton = styled.div`
  position: absolute;
  width: 288px;
  bottom: 10px;
`;
const StyledInput = styled.input`
  width: 100%;
  height: 56px;
  padding: 0 20px;
  border: 1px solid gray;
  font-family: "Helios";
  font-size: 16px;
  font-weight: 400;
  line-height: 32px;
  &::placeholder {
    color: gray;
  }
  &:focus {
    outline: none;
    border: 2px solid gray;
  }
  &:active {
    border: 1px solid gray;
  }
  &:disabled {
    background-color: gray;
  }
`;

export {
  StyledButton,
  StyledClose,
  StyledCloseContainer,
  StyledMenu,
  StyledMenuContainer,
  StyledMenuNav,
  StyledSearch,
  StyledLink,
  StyledInput
};
