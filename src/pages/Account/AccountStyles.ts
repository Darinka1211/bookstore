import styled from "styled-components";


const StyledAccount = styled.div`
  max-width: 544px;
  width: 100%;
  margin: 0 auto;
  margin-top: 100px;
  margin-bottom: 100px;
  border: 1px solid #e7e7e7;
  
`;

const StyledTitle = styled.h2`
  padding: 15px 0;
  border-bottom: 1px solid #e7e7e7;
  font-family: "Bebas Neue";
  font-size: 40px;
  font-weight: 700;
  line-height: 60px;
  color: #313037;
  text-align: center;
`;
const StyledSubtitle = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  height: 200px;
  font-family: "Helios";
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  color: #313037;
  text-align: center;
  font-weight: 700;
  font-size: 25px;
  span {
    text-transform: lowercase;
    color: #a8a8a8;
  }
`;
const StyledButton = styled.div`
  width: 100%;
  background-color: #ffffff};
`;

export { StyledAccount, StyledTitle, StyledSubtitle, StyledButton };
