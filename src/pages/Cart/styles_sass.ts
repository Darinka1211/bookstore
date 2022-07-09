import styled from "styled-components";


const StyledCart = styled.div`
  min-height: 60vh;
  height: 100%;
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
  font-family: "Bebas Neue";
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  color: #313037;
`;

const StyledCheckList = styled.div`
  width: 256px;
  margin-top: 48px;
  margin-bottom: 72px;
  margin-left: auto;
 
`;

const StyledCheckItem = styled.p`
  display: flex;
  justify-content: space-between;
  font-family: "Helios";
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #a8a8a8;
  &:first-child {
    margin-bottom: 16px;
  }
  span {
    color: #313037;
  }
`;

const StyledCheckTotal = styled.h2`
  display: flex;
  justify-content: space-between;
  margin: 24px 0;
  font-family: "Bebas Neue";
  font-size: 40px;
  font-weight: 700;
  line-height: 60px;
  color: #313037;
`;

const StyledCheckButton = styled.button`
  width: 100%;
  background-color: #ffffff;
`;

export {
  StyledCheckButton,
  StyledCheckItem,
  StyledCheckList,
  StyledCheckTotal,
  StyledBackButton,
  StyledCart,
  StyledText,
  StyledTitle,
};
