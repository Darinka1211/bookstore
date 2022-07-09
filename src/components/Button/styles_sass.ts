import styled from "styled-components";


export const StyledButton = styled.button`
  width: 100%;
  padding: 18px;
  background-color: #313037;
  border: none;
  font-family: "Bebas Neue";
  font-weight: 700;
  font-size: 24px;
  line-height: 24px;
  color: #ffffff;
  text-align: center;
  transition: background 0.5s;
  &:hover {
    background-color: #5b5a62;
  }

  &:active {
    background-color: #313037;
  }

  &:disabled {
    background-color: #a8a8a8;
  }
`;
