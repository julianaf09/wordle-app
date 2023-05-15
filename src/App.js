import React, { useState } from 'react';
import './App.css'
import Header from './components/Header'
import SecretWord from './components/SecretWord';
import GuessWord from './components/GuessWord';
import Feedback from './components/Feedback';
import Scoreboard from './components/Scoreboard';
import EndGame from './components/Endgame';
import Theme from './components/Theme';

function App() {
  const [secretWord, setSecretWord] = useState(generateRandomWord());
  const [isGameWon, setIsGameWon] = useState(false);
  const [isGameLost, setIsGameLost] = useState(false);
  const [attempts, setAttempts] = useState([]);
  const [score, setScore] = useState(0);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [correctPositions, setCorrectPostions] = useState([]);

  function generateRandomWord() {
    const words = ['APPLE','SCARF','DAISY','EAGLE','DIZZY'];
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
  }

  function handleGuess(guess) {
    // setAttempts(attempts + 1);
    let isCorrect = guess === secretWord;
    let correctLetters = [];
    let correctPositions = [];

    // Cheack each letter in the guess
    for(let i = 0; i < guess.length; i++) {
      // const guessLetter = guess[i];
      // const secretLetter = secretWord[i];

      if(guess[i] === secretWord[i]) {
        // correctPositions++;      
        correctPositions.push(i);
      } else if(secretWord.includes(guess[i]) && guess[i] !== secretWord[i]) {
        correctLetters.push(guess[i]);
      }
    } 

    const newAttempt = {
      word: guess,
      correctPositions: correctPositions,
      correctLetters: correctLetters
    };

    setAttempts((prevAttempts) => [...prevAttempts, newAttempt]);

    // if(guess === secretWord) {
    //   setIsGameWon(true);
    //   setScore(score + 1);
    // } else if(attempts >= 6) {
    //   setIsGameLost(true);
    // }
    if(isCorrect) {
      setIsGameWon(true);
    } else if(attempts.length + 1 >= 6) {
      setIsGameLost(true);
    }

    setCorrectLetters(correctLetters);
    setCorrectPostions(correctPositions);
  }

  function restartGame() {
    setSecretWord(generateRandomWord());
    setIsGameWon(false);
    setIsGameLost(false);
    setAttempts([]);
    setCorrectLetters([]);
    setCorrectPostions([]);
  }

  return (
    <div className='main-container'>
      <Header />
      <Theme />
      <SecretWord attempts={attempts} secretWord={secretWord}/>
      {!isGameWon && !isGameLost && (
        <div>
          <GuessWord onGuess={handleGuess} />
          {/* <Feedback correctLetters={correctLetters} correctPositions={correctPositions} /> */}
          {/* <Scoreboard score={score} /> */}
        </div>
      )}
      {isGameWon && <EndGame result="You won!" restartGame={restartGame} />}
      {isGameLost && (
        <EndGame result={`You lost! The word was: ${secretWord}`} restartGame={restartGame} />
      )}
    </div>
  );
}

export default App;
