import styled from 'styled-components';

interface Active {
  isActive: boolean;
}

const StyledPagination = styled.div`
  display: grid;
  grid-template-columns: 60px 1fr 60px;
  margin-bottom: 30px;
`;
const StyledNavigationButton = styled.button`
    display: flex;
    align-items: center;
    gap: 11px;
    background-color: #ffffff;
    font-family: "Helios";
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    color: #a8a8a8};
    transition: color 0.5s;
    path {
      transition: fill 0.5s;
      fill: #a8a8a8};
    }
    &:hover {
      color: #313037;
    }
    &:hover path {
      fill: #313037;
    }
  `;
const StyledNumberButtonList = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 15px;
`;

const StyledNumberButton = styled.button<Active>`
  display: flex;
  align-items: center;
  background-color: #ffffff;
  font-family: 'Helios';
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  color: ${({ isActive }) => (isActive ? `#313037` : `#a8a8a8`)};
  transition: color 0.3s;
  &:hover {
    color: #313037;
  }
`;

export { StyledPagination, StyledNavigationButton, StyledNumberButton, StyledNumberButtonList };
