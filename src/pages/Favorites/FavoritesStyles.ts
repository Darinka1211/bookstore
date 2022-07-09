import styled from "styled-components";


const StyledFavorites = styled.div`
  padding-bottom: 50px;
`;
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

const StyledText = styled.p`
  text-align: center;
  margin-bottom: 50px;
  font-family: "Bebas Neue";
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  color: #313037;
`;



export {
  StyledBackButton,
  StyledFavorites,
  StyledText,
  StyledTitle,
};
