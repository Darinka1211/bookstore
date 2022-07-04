import React from 'react';
import {Button} from "./components/Button/Button"
import './App.scss';
import {ButtonCancel} from "./components/ButtonCancel/Buttoncancel";
import ButtonFavorites from './components/ButtonFavorites/ButtonFavorites';
import StarRating from './components/StarRating/StarRating';
import { Footer } from './components/Footer/Footer';
import { BookCart } from './components/BookCart/BookCart';
import {BurgerMenu} from "./components/BurgerMenu/BurgerMenu"
import { ChangeEvent, useEffect, useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleBurgerClose = () => {
    setIsOpen(false);
  };
  const handleBurgerOpen = () => {
    setIsOpen(true);
  };

  return (
    <div className="App">
     {/* <Button text='add to cart'/>
     <ButtonCancel/>
     <ButtonFavorites/>
     <StarRating rating={5}/>
     <Footer/> */}
     
     <BurgerMenu handleBurgerClose={handleBurgerClose} isOpen={isOpen} />

    </div>
  );
}

export default App;
