import { Link } from "react-router-dom";
import styled from "styled-components";


interface IButton {
  isActive: boolean;
}

const StyledDetailsBook = styled.div``;
const StyledBackButton = styled.div`
  margin-top: 77px;
  cursor: pointer;
  path {
    fill: #313037;
  }
`;

const StyledTitle = styled.h1`
  margin-top: 37px;
  margin-bottom: 50px;
  font-family: "Bebas Neue";
  font-size: 56px;
  font-weight: 700;
  line-height: 64px;
  color: #313037;
`;
const StyledMainCointainer = styled.div`
  display: flex;
  gap: calc(100% - (544px + 448px));
  margin-bottom: 72px;
  
`;

const StyledBookImage = styled.div`
  position: relative;
  height: 472px;
  max-width: 544px;
  width: 100%;
  background-color: #fee9e2;
  img {
    height: 100%;
    width: 100%;
  }
  
`;
const StyledAddFovorite = styled.div`
  position: absolute;
  right: 0;
  top: 0;
`;

const StyledBookInfo = styled.div`
  position: relative;
  max-width: 448px;
  width: 100%;
  padding-top: 42px;
  border-top: 1px solid #e7e7e7;
  
`;

const StyledPrice = styled.h2`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  font-family: "Bebas Neue";
  font-size: 40px;
  font-weight: 700;
  line-height: 60px;
  color: #313037;
`;

const StyledParams = styled.p`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  font-family: "Helios";
  font-size: 16px;
  font-weight: 400;
  line-height: 32px;
  color:#a8a8a8;
  span {
    color: #313037;
  }
`;
const StyledArrowDown = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 55px;
  cursor: pointer;
  text-decoration: none;
 font-family: "Helios";
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #313037;
  transition: color 0.3s;
  path {
    transition: all 0.3s;
  }
  &:hover {
    color: #a8a8a8;
  }
  &:hover path {
    fill: #a8a8a8;
  }
  &:active {
    color: #313037;
  }
  &:active path {
    fill: #313037;
  }
`;

const StyledButtonContainer = styled.div`
  display: flex;
  align-items: end;
`;

const StyledTabList = styled.div`
  display: flex;
  gap: 40px;
  border-bottom: 1px solid #e7e7e7;
  margin-bottom: 50px;
`;

const StyledTab = styled.button<IButton>`
  padding: 0 40px 24px;
  border-bottom: 2px solid #ffffff;
  background-color:#ffffff;
 font-family: "Helios";
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #a8a8a8;
  cursor: pointer;
  transition: all 0.5s;
  &:hover {
    color: #5b5a62;
    border-bottom: 2px solid #5b5a62;
  }
  border-bottom: ${({ isActive }) =>
    isActive
      ? `2px solid #313037;
    color: #313037;
    `
      : ""};
`;

const StyledTabPanel = styled.div`
  min-height: 128px;
  font-family: "Helios";
  font-size: 16px;
  font-weight: 400;
  line-height: 32px;
  color: #313037;
  margin-bottom: 48px;
  
`;

const StyledIcons = styled.div`
  display: flex;
  gap: 10px;
`;
const StyledIconsItem = styled.a`
  height: 39px;
  width: 39px;
  border: 1px solid #e7e7e7;
  margin-right: 6px;
  margin-bottom: 75px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s linear;
  path {
    transition: 0.3s linear;
  }
  &:hover {
    border: 1px solid #fc857f};
  }
  &:hover path {
    fill: #fc857f};
  }
`;

export {
  StyledAddFovorite,
  StyledArrowDown,
  StyledBackButton,
  StyledBookImage,
  StyledBookInfo,
  StyledButtonContainer,
  StyledDetailsBook,
  StyledIcons,
  StyledIconsItem,
  StyledMainCointainer,
  StyledParams,
  StyledPrice,
  StyledTab,
  StyledTabList,
  StyledTabPanel,
  StyledTitle,
};
