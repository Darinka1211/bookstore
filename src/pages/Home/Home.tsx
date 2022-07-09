import React from 'react';
import NewBooks from '../../components/NewBook/NewBook';
import { StyledHome, StyledTitle } from './styles';


const Home = () => {
  return (
    <StyledHome>
      <NewBooks />
    </StyledHome>
  );
};

export default Home;
