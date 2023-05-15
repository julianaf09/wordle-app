import React from "react";

const Scoreboard = ({ score, highScores }) => {
    return (
        <div>
            <h2>Score: {score}</h2>
            <h3>High Scores</h3>
            <ul>
                {highScores.map((score, index) => 
                    <li key={index}>{score}</li>
                )}
            </ul>
        </div>
    );
};

export default Scoreboard;