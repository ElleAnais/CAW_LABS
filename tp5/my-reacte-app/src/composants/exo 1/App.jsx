import React, { useState } from 'react';
import ClickButton from './ClickButton';

const App = () => {
  const [clickedButton, setClickedButton] = useState(null);
  const [counter, setCounter] = useState(0);

  const handleButtonClick = (buttonNumber) => {
    setClickedButton(buttonNumber);
  };

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDecrement = () => {
    setCounter(counter - 1);
  };

  return (
    <div>
      <div>
        <ClickButton onClick={() => handleButtonClick(1)} />
        <ClickButton onClick={() => handleButtonClick(2)} />
        <ClickButton onClick={() => handleButtonClick(3)} />

        <p>{clickedButton ? `Le bouton n°${clickedButton} a été cliqué` : ''}</p>
      </div>

      <div>
        <h1>Counter: {counter}</h1>
        <button onClick={handleIncrement}>Inc</button>
        <button onClick={handleDecrement}>Dec</button>
      </div>
    </div>
  );
};

export default App;
