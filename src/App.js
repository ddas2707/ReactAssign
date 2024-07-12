import React from 'react';
import './App.css';
import BasketballPlayerCard from './Components/BasketballPlayerCard';
import b2 from './Images/b2.jpeg'

function App() {
  return (
    <div className="App">
      <BasketballPlayerCard
        name="LeBron James"
        image={b2}
        position="Forward"
        stats={{
          pointsPerGame: 25.4, assistsPerGame: 7.1,
          reboundsPerGame: 10.5
        }}
      />
    </div>
  );
}

export default App;
