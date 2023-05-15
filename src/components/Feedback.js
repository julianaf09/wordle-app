import React from "react";

const Feedback = ({ correctLetters, correctPositions }) => {
    return (
        <div>
            <p>Correct Letters: {correctLetters}</p>
            <p>Correct Positions: {correctPositions}</p>
        </div>
    );
};

export default Feedback;