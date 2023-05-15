import React from "react";

const SecretWord = ({attempts, secretWord}) => {
    const placeholder = '[ ]';
    
    return (
        <div>
            {attempts.map((attempt, index) => {
                const {word, correctPositions, correctLetters } = attempt;
                return (
                    <div key={index}>
                        {word.split('').map((letter, letterIndex) => {
                            const isCorrectPosition = correctPositions.includes(letterIndex);
                            const isCorrectLetter = correctLetters.includes(letter);

                            let className = 'box';
                            if(isCorrectPosition && isCorrectLetter) {
                                className += ' correct-position correct-letter';
                            } 
                            else if (isCorrectPosition) {
                                className += ' correct-position';
                            } 
                            else if(isCorrectLetter) {
                                className += ' correct-letter';
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