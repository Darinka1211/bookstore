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
import FavoriteBook from './components/FavoriteBook/FavoriteBook';
import Loading from './components/Loading/Loading';
import SearchBook from './components/SearchBook/SearchBook';


function App() {
 

  return (
    <div className="App">
 <SearchBook {...book}/>
    </div>
  );
}

export default App;
