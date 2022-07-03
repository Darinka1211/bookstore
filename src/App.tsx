import React from 'react';
import {Button} from "./components/Button/Button"
import './App.scss';
import {ButtonCancel} from "./components/ButtonCancel/Buttoncancel";
import ButtonFavorites from './components/ButtonFavorites/ButtonFavorites';

function App() {
  return (
    <div className="App">
     <Button text='add to cart'/>
     <ButtonCancel/>
     <ButtonFavorites/>
    </div>
  );
}

export default App;
