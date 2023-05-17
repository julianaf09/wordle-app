import * as React from 'react';

const EndGame = ({ result, restartGame }) => {
  return (
    <div>
      <h2>{result}</h2>
      <button onClick={restartGame}>New Game</button>
    </div>
  );
};

export default EndGame;
