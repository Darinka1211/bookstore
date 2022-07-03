import React from 'react';
import {Button} from "./components/Button/Button"
import './App.scss';
import {ButtonCancel} from "./components/ButtonCancel/Buttoncancel";

function App() {
  return (
    <div className="App">
     <Button text='add to cart'/>
     <ButtonCancel/>
    </div>
  );
}

export default App;
