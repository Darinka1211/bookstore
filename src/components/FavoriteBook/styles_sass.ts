import { Link } from "react-router-dom";
import styled from "styled-components";


const StyledFavoriteBook = styled.div`
  display: flex;
  gap: 32px;
  border-bottom: 1px solid #e7e7e7;
  margin-bottom: 48px;

`;
const StyledImage = styled(Link)`
  margin-bottom: 49px;
  width: 256px;
  height: 192px;
  background-color: #d7e4fd;
  img {
    display: block;
    margin: 0 auto;
    width: 164px;
    height: 191px;
  }
`;

const StyledBookInfo = styled.div`
  max-width: 446px;
  width: 100%;
`;

const StyledTitle = styled.h3`
  margin-top: 36px;
  margin-bottom: 10px;
  font-family: "Bebas Neue";
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  color: "#313037";
 
`;

const StyledText = styled.p`
font-family: "Helios";
font-weight: 400;
font-size: 16px;
line-height: 24px;
  color: "#a8a8a8";
`;

const StyledPrice = styled.h2`
  display: flex;
  gap: 187px;
  margin-top: 24px;
  font-family: "Bebas Neue";
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  color: #313037;
 
`;

const StyledRaiting = styled.div`
  
`;

const StyledRemoveButton = styled.button`
  margin: 88px 20px auto auto;
  background-color: "#ffffff";
  transition: background 0.5s;
  path {
    transition: all 0.5s;
    fill: "#fc857f";
    stroke: "#fc857f";
    cursor: pointer;
  }
  &:hover path {
    fill: "#a8a8a8";
    stroke: "#a8a8a8";
  }
 
`;

export {
  StyledBookInfo,
  StyledFavoriteBook,
  StyledImage,
  StyledPrice,
  StyledRaiting,
  StyledText,
  StyledTitle,
  StyledRemoveButton,
};
