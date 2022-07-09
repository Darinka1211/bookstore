import styled from "styled-components";


export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  padding: 16px;
  transition: background 0.3s;
  path {
    transition: all 0.3s;
    stroke: #ffffff;
  }
  background-color: #313037;
  &:hover {
    background-color: #5b5a62;
    path {
      stroke: #fc857f
    }
  }
  &:active {
    path {
      fill: #fc857f;
    }
  }
  &:disabled {
    background-color: #a8a8a8;
  }
`;
