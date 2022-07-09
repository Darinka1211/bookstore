import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledBookItem = styled(Link)`
  display: grid;
  grid-template-rows: 250px 60px 25px 50px 30px;
  grid-gap: 5px;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  text-decoration: none;
  
  &:hover{
    margin-top: -10px;
    margin-bottom: 10px;
  }
`;
const StyledImg = styled.img`
  height: 100%;
  display: block;
  margin: 0 auto;
`;

const StyledTitle = styled.h2`
  overflow: hidden;
  font-family: "Bebas Neue";
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;

  color: #313037;
  text-align: center;
`;

const StyledIsbn = styled.p`
  overflow: hidden;
  font-family: "Helios";
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color:#a8a8a8;
`;

const StyledSubtitle = styled.p`
  overflow: hidden;
  font-family: "Helios";
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  color:#313037";
`;

const StyledPrice = styled.p`
font-family: "Bebas Neue";
font-size: 24px;
font-weight: 700;
line-height: 32px;
  color:#313037";
  text-align: end;
`;

export {
  StyledBookItem,
  StyledImg,
  StyledIsbn,
  StyledPrice,
  StyledSubtitle,
  StyledTitle,
};
