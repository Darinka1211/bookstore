import React from 'react';
import NewBooks from '../../components/NewBook/NewBook';
import { StyledHome, } from './HomeStyles';


const Home = () => {
  return (
    <StyledHome>
      <NewBooks />
    </StyledHome>
  );
};

export default Home;
