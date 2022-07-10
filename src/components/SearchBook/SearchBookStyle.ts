import styled from 'styled-components';
import { Link } from "react-router-dom";

const StyledSearchBook = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  background-color: #ffffff;
  border: 1px solid #e7e7e7;
  border-top: 1px solid #ffffff;
  :first-of-type {
    border-top: 1px solid #e7e7e7;
  }
  text-decoration: none;
  transition: background .9s;
  :hover {
    background-color: #e7e7e7;
  }
`;
const StyledImage = styled.div`
  min-width: 80px;
  height: 80px;
  background-color: #d7e4fd;
  img {
    width: 100%;
    height: 100%;
  }
`;

const StyledTitle = styled.div`
  color: #313037;
  font-family: "Helios";
  font-weight: 700;
  font-size: 14px;
  line-height: 32px;
`;

export { StyledSearchBook, StyledImage, StyledTitle };