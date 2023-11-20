import React from 'react';
import DisplayTab from './DisplayTab';

const App = () => {
  const firstTab = ["apple", "orange", "banana"];
  const secondTab = ["car", "bus", "bike"];

  return (
    <div>
      <h2>DisplayTab 1:</h2>
      <DisplayTab tab={firstTab} />

      <h2>DisplayTab 2:</h2>
      <DisplayTab tab={secondTab} />
    </div>
  );
};

export default App;
