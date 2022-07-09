import styled from "styled-components";


const StyledNewBooks = styled.div`
  padding: 72px 0;
`;
const StyledTitle = styled.h1`
font-family: "Bebas Neue";
font-size: 56px;
font-weight: 700;
line-height: 64px;;
  color: #313037;
  margin-bottom: 50px;
`;
const StyledBooks = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 20px;
  padding: 0;
`;

export { StyledBooks, StyledNewBooks, StyledTitle };
