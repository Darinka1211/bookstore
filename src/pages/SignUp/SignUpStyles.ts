import styled from 'styled-components';

const StyledSign = styled.div`
  max-width: 544px;
  width: 100%;
  margin: 0 auto;
  margin-top: 100px;
  margin-bottom: 100px;
  border: 1px solid #e7e7e7;
`;

const StyledTabs = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-bottom: 1px solid #e7e7e7;
  padding: 0 32px;
`;

const StyledTab = styled.div`
  padding: 26px 0;
  text-align: center;
  color: #a8a8a8;
  font-family: 'Bebas Neue';
  font-weight: 700;
  font-size: 24px;
  line-height: 24px;
  cursor: pointer;
  transition: all 0.3s;
  &:last-child {
    border-bottom: 2px solid #313037;
    color: #313037;
  }
  &:first-child:hover {
    color: #5b5a62;
  }
`;

const StyledForm = styled.form`
  padding: 32px;
  padding-bottom: 40px;
`;

const StyledContainer = styled.div`
  margin-bottom: 16px;
  &:last-of-type {
    margin-bottom: 40px;
  }
`;

const StyledInput = styled.input`
  width: 100%;
  height: 56px;
  padding: 0 20px;
  border: 1px solid #e7e7e7;
  font-family: 'Helios';
  font-size: 16px;
  font-weight: 400;
  line-height: 32px;
  &::placeholder {
    color: #a8a8a8;
  }
  &:focus {
    outline: none;
    border: 2px solid #e7e7e7;
  }
  &:active {
    border: 1px solid #e7e7e7;
  }
  &:disabled {
    background-color: #e7e7e7;
  }
`;
const StyledLabel = styled.label`
  margin-bottom: 4px;
  font-family: 'Helios';
  font-size: 16px;
  font-weight: 400;
  line-height: 32px;
  font-weight: 700;
  color: #313037;
`;

const StyledErrorLabel = styled.label`
  margin-top: 4px;
  font-family: 'Helios';
  font-size: 16px;
  font-weight: 400;
  line-height: 32px;
  font-weight: 700;
  color: #fc857f;
`;

const StyledError = styled.div`
  padding: 10px;
  margin-bottom: 20px;
  background-color: #fc857f;
  font-family: 'Helios';
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  text-align: center;
`;

export {
  StyledContainer,
  StyledErrorLabel,
  StyledForm,
  StyledInput,
  StyledLabel,
  StyledSign,
  StyledTab,
  StyledTabs,
  StyledError,
};
