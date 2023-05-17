import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
//import SecretWord from "./components/SecretWord";
import GuessWord from "./components/GuessWord";
import EndGame from "./components/Endgame";
import Theme from "./components/Theme";
import Feedback from "./components/Feedback";

function App() {
  const [secretWord, setSecretWord] = useState("");
  const [isGameWon, setIsGameWon] = useState(false);
  const [isGameLost, setIsGameLost] = useState(false);
  const [attempts, setAttempts] = useState([]);

  useEffect(() => {
    generateRandomWord();
  }, []);

  const generateRandomWord = () => {
    fetch("https://random-word-api.herokuapp.com/word?length=5")
      .then((response) => response.json())
      .then((data) => {
        const randomWord = data[0];
        setSecretWord(randomWord.toUpperCase());
      })
      .catch((error) => {
        console.error("Error fetching word: ", error);
      });
  };

  function handleGuess(guess) {
    let isCorrect = guess === secretWord;
    let correctLetters = [];
    let correctPositions = [];

    // error checking
    if (guess.length !== 5) {
      // handle incorrect number of letters
      alert("Enter a valid 5-letter word");
      return;
    }

    if (!/^[A-Za-z]+$/.test(guess)) {
      alert("Please enter only letters in your guess.");
      return;
    }

    // Cheack each letter in the guess
    for (let i = 0; i < guess.length; i++) {
      if (guess[i] === secretWord[i]) {
        correctPositions.push(i);
      } else if (secretWord.includes(guess[i]) && guess[i] !== secretWord[i]) {
        correctLetters.push(guess[i]);
      }
    }

    const newAttempt = {
      word: guess,
      correctPositions: correctPositions,
      correctLetters: correctLetters,
    };

    setAttempts((prevAttempts) => [...prevAttempts, newAttempt]);

    if (isCorrect) {
      setIsGameWon(true);
    } else if (attempts.length + 1 >= 6) {
      setIsGameLost(true);
    }
  }

  function restartGame() {
    generateRandomWord();
    setIsGameWon(false);
    setIsGameLost(false);
    setAttempts([]);
  }

  return (
    <div className="main-container">
      <Header className="header" />
      <Theme />
      {/* <SecretWord attempts={attempts} /> */}
      <Feedback attempts={attempts} />
      {!isGameWon && !isGameLost && (
        <div>
          <GuessWord onGuess={handleGuess} />
        </div>
      )}
      {isGameWon && <EndGame result="You won!" restartGame={restartGame} />}
      {isGameLost && (
        <EndGame
          result={`You lost! The word was: ${secretWord}`}
          restartGame={restartGame}
        />
      )}
    </div>
  );
}

export default App;
