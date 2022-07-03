import React from 'react';
import {Button} from "./components/Button/Button"
import './App.scss';
import {ButtonCancel} from "./components/ButtonCancel/Buttoncancel";
import ButtonFavorites from './components/ButtonFavorites/ButtonFavorites';
import StarRating from './components/StarRating/StarRating';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
     <Button text='add to cart'/>
     <ButtonCancel/>
     <ButtonFavorites/>
     <StarRating rating={5}/>
     <Footer/>
    </div>
  );
}

export default App;
