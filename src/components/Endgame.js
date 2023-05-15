import React from "react";

const EndGame = ({ result, restartGame }) => {
    return (
        <div>
            <h2>{result}</h2>
            <button onClick={restartGame}></button>
        </div>
    );
};

export default EndGame;