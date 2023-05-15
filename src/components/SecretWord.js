import React from "react";

const SecretWord = ({attempts, secretWord}) => {
    // secretWord, correctPositions, correctLetters (old parameters)
    const placeholder = '[ ]';
    // const secretLetters = secretWord.split('');
    
    return (
        <div>
            {/* {secretLetters.map((letter, index) => {
                const isCorrectPosition = correctPositions.includes(index);
                const isCorrectLetter = correctLetters.includes(letter);
                const isGuessed = isCorrectPosition || isCorrectLetter;

                let className = '';
                if(isCorrectPosition && isCorrectLetter) {
                    className = 'correct-position-letter';
                } 
                else if (isCorrectPosition) {
                    className = 'correct-position';
                } 
                else if(isCorrectLetter) {
                    className = 'correct-letter';
                } 

                return (
                <span key={index} className={className}>
                    {isCorrectPosition ||  isCorrectLetter ? letter : placeholder}
                </span>
                );
            })}  */}

            {attempts.map((attempt, index) => {
                const {word, correctPositions, correctLetters } = attempt;
                // const isLastAttempt = index === attempt.length - 1;
                // const correctPositions = attempt.correctPositions;
                // const correctLetters = attempt.correctLetters;

                return (
                    <div key={index}>
                        {word.split('').map((letter, letterIndex) => {
                            const isCorrectPosition = correctPositions.includes(letterIndex);
                            const isCorrectLetter = correctLetters.includes(letter);

                            let className = '';
                            if(isCorrectPosition && isCorrectLetter) {
                                className = 'correct-position-letter';
                            } 
                            else if (isCorrectPosition) {
                                className = 'correct-position';
                            } 
                            else if(isCorrectLetter) {
                                className = 'correct-letter';
                            } 

                            return (
                                <span key={index} className={className}>
                                    {letter}
                                </span>
                            );
                        })}
                        
                    </div>
                )
            })}
        </div>
    );
};

export default SecretWord;