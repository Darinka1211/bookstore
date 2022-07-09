import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledCartCard = styled.div`
  position: relative;
  display: flex;
  gap: 32px;
  border-bottom: 1px solid "#e7e7e7"};
  margin-bottom: 50px;

  }
`;

const StyledImage = styled(Link)`
  margin-bottom: 49px;
  width: 256px;
  height: 192px;
  background-color: '#d7e4fd';
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  img {
    display: block;
    margin: 0 auto;
    width: 163px;
    height: 191px;
  }
`;

const StyledBookInfo = styled.div`
  max-width: 446px;
  width: 100%;
`;

const StyledTitle = styled.h3`
  margin-top: 26px;
  margin-bottom: 10px;
  font-family: 'Bebas Neue';
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  color: '#313037';
`;

const StyledText = styled.p`
font-family: "Helios";
font-weight: 400;
font-size: 16px;
line-height: 24px;
  color: "#a8a8a8";
 
  }
`;

const StyledPrice = styled.h2`
  margin: auto 50px auto auto;
  font-family: 'Bebas Neue';
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  color: '#313037';
`;

const StyledRemoveCartButton = styled.button`
  margin: auto 17px auto auto;
  background-color: #fff;

 
  }
`;

const StyledQuantity = styled.div`
  display: flex;
  gap: 45px;
  margin-top: 35px;
  font-family: 'Bebas Neue';
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  color: '#313037';
`;

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  background-color: '#ffffff';
`;

export {
  StyledBookInfo,
  StyledCartCard,
  StyledImage,
  StyledPrice,
  StyledText,
  StyledTitle,
  StyledRemoveCartButton,
  StyledQuantity,
  StyledButton,
};
