import React, { useState } from "react";

const GuessWord = ({ onGuess }) => {
    const [guess, setGuess] = useState('');

    const handleInputChange = (event) => {
        setGuess(event.target.value.toUpperCase());
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onGuess(guess);
        setGuess('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type='text' value={guess} onChange={handleInputChange}></input>
            <button type='submit'></button>
        </form>
    );
};

export default GuessWord;