import styled from "styled-components";

const StyledFooter = styled.footer`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 36px 0;
  border-top: 1px solid #e7e7e7;
 
`;

const StyledText = styled.p`
font-family: "Helios";
font-size: 18px;
font-weight: 400;
line-height: 24px;
  color: #a8a8a8;
  &:last-child {
    justify-self: end;
  }
  
`;

export { StyledFooter, StyledText };
