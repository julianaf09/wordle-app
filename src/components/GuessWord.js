import React, { useState } from "react";

const GuessWord = ({ onGuess }) => {
  const [guess, setGuess] = useState("");

  const handleInputChange = (event) => {
    const { value } = event.target;
    // setGuess(event.target.value.toUpperCase());
    setGuess(value.slice(0, 5).toUpperCase());
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onGuess(guess);
    setGuess("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={guess}
        maxLength={5}
        onChange={handleInputChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default GuessWord;
